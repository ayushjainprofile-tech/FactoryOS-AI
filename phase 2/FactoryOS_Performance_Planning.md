# FactoryOS AI — Performance Planning Document
**Step 7 | Version 1.0 | Team: CodeHack**
**Stack: PostgreSQL 16 + pgvector · ChromaDB · Redis · TimescaleDB (Sensor) · S3**

---

## Table of Contents
1. [Volume Projections](#1-volume-projections)
2. [Indexing Strategy](#2-indexing-strategy)
3. [Partitioning Strategy](#3-partitioning-strategy)
4. [Vector Indexing](#4-vector-indexing)
5. [Query Optimization Patterns](#5-query-optimization-patterns)
6. [Caching Layer](#6-caching-layer)
7. [Archival Policy](#7-archival-policy)
8. [Backup & Disaster Recovery](#8-backup--disaster-recovery)
9. [Monitoring & SLA Targets](#9-monitoring--sla-targets)
10. [Performance-Aware System Prompt](#10-performance-aware-system-prompt)

---

## 1. Volume Projections

Define scale before indexing. Every strategy below is sized to these numbers.

| Table | Year 1 Rows | Year 3 Rows | Growth Driver |
|---|---|---|---|
| sensor_data | 315M | 1.8B | 10 sensors × 10 equipment × 1 read/min × 3 years |
| audit_logs | 12M | 50M | Every user action logged |
| document_chunks | 500K | 5M | ~1,000 docs × 500 chunks average |
| embeddings | 500K | 5M | 1:1 with chunks |
| ai_chat_history | 2M | 20M | Active daily usage across plants |
| maintenance_history | 50K | 300K | Manual entry by technicians |
| alerts | 200K | 1.5M | Sensor threshold engine |
| ai_investigations | 100K | 800K | Investigation queries per user/day |
| equipment | 5K | 30K | New plants onboarded |
| documents | 20K | 200K | Ongoing document uploads |

**Critical insight:** `sensor_data` and `audit_logs` are the only tables that grow unboundedly without partitioning. Everything else is manageable with standard indexing.

---

## 2. Indexing Strategy

### 2.1 Core Principle
Index for the three query patterns FactoryOS AI runs:
- **Lookup by identity** — find one entity by its ID or tag
- **Filter + range scan** — equipment at a plant, alerts this week
- **Aggregation** — health score averages, compliance rate by framework

Never index blindly. Every index has a write-amplification cost.

---

### 2.2 equipment_tag — Primary Lookup Index

`equipment_tag` is the most queried column in the system.
Every AI investigation, every alert, every work order references it.

```sql
-- Composite: plant scope + tag lookup (most common query pattern)
CREATE UNIQUE INDEX idx_equipment_tag_plant
  ON equipment(plant_id, equipment_tag);

-- Health score range scans (dashboard: "show all degraded equipment")
CREATE INDEX idx_equipment_health_score
  ON equipment(plant_id, health_score ASC)
  WHERE status != 'decommissioned';

-- Status filter (operational dashboard)
CREATE INDEX idx_equipment_status_plant
  ON equipment(plant_id, status);

-- Equipment type filtering (e.g., "all pumps at this plant")
CREATE INDEX idx_equipment_type_plant
  ON equipment(plant_id, equipment_type);
```

**Query pattern this serves:**
```sql
-- Typical investigation trigger — resolves in <1ms with this index
SELECT * FROM equipment
WHERE plant_id = $1
  AND equipment_tag = 'PUMP-21';
```

---

### 2.3 document_id — Document Pipeline Index

Every chunk lookup, every embedding join, every citation resolution
starts from `document_id`.

```sql
-- Chunk retrieval by document (used in post-OCR processing pipeline)
CREATE INDEX idx_chunks_document_id
  ON document_chunks(document_id);

-- Page-ordered chunk retrieval (reconstructing document context)
CREATE INDEX idx_chunks_document_page
  ON document_chunks(document_id, page_number, chunk_index);

-- Metadata GIN index (filter: "is_table = true", "section = Installation")
CREATE INDEX idx_chunks_metadata_gin
  ON document_chunks USING GIN(metadata jsonb_path_ops);

-- Embedding join (1:1 lookup, already UNIQUE but explicit)
CREATE UNIQUE INDEX idx_embeddings_chunk_id
  ON embeddings(chunk_id);

-- Document type scoping (retrieve only OEM Manual chunks for this plant)
CREATE INDEX idx_documents_type_plant
  ON documents(plant_id, document_type);

-- OCR processing queue
CREATE INDEX idx_documents_ocr_pending
  ON documents(ocr_status, created_at)
  WHERE ocr_status IN ('pending', 'processing');
```

---

### 2.4 plant_id — Multi-Tenant Isolation Index

Every table with `plant_id` must have it indexed. It is the first filter
in 90% of all queries (tenant isolation).

```sql
-- Applied to: users, equipment, documents, alerts, work_orders, compliance, reports
CREATE INDEX idx_users_plant_id        ON users(plant_id);
CREATE INDEX idx_equipment_plant_id    ON equipment(plant_id);
CREATE INDEX idx_documents_plant_id    ON documents(plant_id);
CREATE INDEX idx_alerts_plant_equipment ON alerts(equipment_id);  -- equipment carries plant scope
CREATE INDEX idx_compliance_plant      ON compliance(equipment);  -- equipment carries plant

-- Cross-plant admin queries (super-admin dashboard)
CREATE INDEX idx_plants_industry_status ON plants(industry, status);
```

---

### 2.5 Timestamp Indexes — Time-Range Queries

All dashboards and reports are time-bounded. Without DESC indexes,
"last 7 days" scans the whole table.

```sql
-- Alerts feed (real-time dashboard)
CREATE INDEX idx_alerts_created_desc
  ON alerts(equipment_id, created_at DESC);

-- Open alerts only (partial index — avoids indexing resolved noise)
CREATE INDEX idx_alerts_open
  ON alerts(equipment_id, severity, created_at DESC)
  WHERE status = 'open';

-- Investigation history for equipment
CREATE INDEX idx_investigations_equipment_time
  ON ai_investigations(equipment_id, created_at DESC);

-- Audit trail time-range queries (compliance export)
CREATE INDEX idx_audit_timestamp_desc
  ON audit_logs(timestamp DESC);

-- Audit by user + time (who did what and when)
CREATE INDEX idx_audit_user_time
  ON audit_logs(user_id, timestamp DESC);

-- Maintenance history timeline
CREATE INDEX idx_maint_equipment_time
  ON maintenance_history(equipment_id, created_at DESC);

-- Notification inbox (unread first)
CREATE INDEX idx_notif_user_status_time
  ON notifications(user_id, status, created_at DESC);
```

---

### 2.6 Work Orders — Operational Dashboard Indexes

```sql
-- My work orders (technician dashboard)
CREATE INDEX idx_wo_assigned_status
  ON work_orders(assigned_to, status, priority);

-- Open high-priority work orders (plant manager view)
CREATE INDEX idx_wo_priority_open
  ON work_orders(equipment_id, priority, created_at DESC)
  WHERE status IN ('open', 'in_progress');

-- Completion date tracking (overdue detection)
CREATE INDEX idx_wo_completion_date
  ON work_orders(completion_date ASC)
  WHERE status NOT IN ('completed', 'cancelled');
```

---

### 2.7 Compliance Indexes

```sql
-- Compliance dashboard: non-compliant items by risk (sorted descending)
CREATE INDEX idx_compliance_risk_desc
  ON compliance(status, risk_score DESC)
  WHERE status = 'non_compliant';

-- Framework-specific compliance audit export
CREATE INDEX idx_compliance_framework_status
  ON compliance(framework, status);
```

---

### 2.8 AI Feedback — Model Quality Monitoring

```sql
-- Low-rated investigation detection (RLHF pipeline trigger)
CREATE INDEX idx_feedback_low_rating
  ON ai_feedback(rating, created_at DESC)
  WHERE rating <= 2;

-- Conversation-level rating lookup
CREATE INDEX idx_feedback_conversation
  ON ai_feedback(conversation_id);
```

---

## 3. Partitioning Strategy

### 3.1 sensor_data — Range Partitioning by Month

**Why:** 315M rows Year 1. Without partitioning, a single `WHERE timestamp > now() - interval '7 days'` scans 315M rows. With monthly partitions, it scans ≤30 days of data per partition (≈1M rows at 10 equipment × 10 sensors × 1/min).

```sql
-- Parent table (declarative partitioning)
CREATE TABLE sensor_data (
  id          BIGSERIAL,
  equipment_id UUID NOT NULL,
  temperature  DECIMAL(6,2),
  pressure     DECIMAL(8,3),
  rpm          DECIMAL(8,2),
  vibration    DECIMAL(6,3),
  oil_level    DECIMAL(5,2),
  power_usage  DECIMAL(8,3),
  timestamp    TIMESTAMPTZ NOT NULL DEFAULT now()
) PARTITION BY RANGE (timestamp);

-- Auto-generate monthly partitions (run via pg_cron or deployment script)
CREATE TABLE sensor_data_2026_07
  PARTITION OF sensor_data
  FOR VALUES FROM ('2026-07-01') TO ('2026-08-01');

CREATE TABLE sensor_data_2026_08
  PARTITION OF sensor_data
  FOR VALUES FROM ('2026-08-01') TO ('2026-09-01');

-- Indexes on each partition (PostgreSQL auto-propagates from parent)
CREATE INDEX ON sensor_data(equipment_id, timestamp DESC);
CREATE INDEX ON sensor_data(equipment_id, vibration)
  WHERE vibration IS NOT NULL;
```

**Partition management automation:**
```sql
-- pg_cron job: create next month's partition on 25th of current month
SELECT cron.schedule(
  'create-sensor-partition',
  '0 0 25 * *',
  $$
    SELECT create_sensor_partition(
      date_trunc('month', now() + interval '1 month')
    );
  $$
);
```

**Archival via partition DROP (zero-cost delete):**
```sql
-- Drop partitions older than 2 years — instant, no row-by-row DELETE
DROP TABLE sensor_data_2024_06;
```

---

### 3.2 audit_logs — Range Partitioning by Quarter

Audit logs grow to 50M rows Year 3. Quarterly partitions balance partition count vs size.
Audit data must be retained 7 years (compliance). Partitions make cold-tier migration trivial.

```sql
CREATE TABLE audit_logs (
  id          BIGSERIAL,
  user_id     UUID,
  action      VARCHAR(100) NOT NULL,
  entity      VARCHAR(100) NOT NULL,
  entity_id   UUID NOT NULL,
  timestamp   TIMESTAMPTZ NOT NULL DEFAULT now(),
  ip_address  INET
) PARTITION BY RANGE (timestamp);

CREATE TABLE audit_logs_2026_q3
  PARTITION OF audit_logs
  FOR VALUES FROM ('2026-07-01') TO ('2026-10-01');

CREATE TABLE audit_logs_2026_q4
  PARTITION OF audit_logs
  FOR VALUES FROM ('2026-10-01') TO ('2027-01-01');
```

---

### 3.3 ai_chat_history — Range Partitioning by Month

800K+ rows/year growing with user base. Conversations older than 90 days
are rarely accessed — good cold-tier candidate.

```sql
CREATE TABLE ai_chat_history (
  id                  UUID DEFAULT gen_random_uuid(),
  conversation_id     UUID NOT NULL,
  user_message        TEXT NOT NULL,
  assistant_response  TEXT NOT NULL,
  citations           JSONB,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT now()
) PARTITION BY RANGE (created_at);
```

---

### 3.4 TimescaleDB Option (Alternative to Native Partitioning)

For sensor_data specifically, TimescaleDB is the production-grade alternative:

```sql
-- Convert sensor_data to a hypertable (TimescaleDB extension)
SELECT create_hypertable('sensor_data', 'timestamp',
  chunk_time_interval => INTERVAL '1 week'
);

-- Enable compression on chunks older than 7 days (8–10x compression ratio)
ALTER TABLE sensor_data SET (
  timescaledb.compress,
  timescaledb.compress_orderby = 'timestamp DESC',
  timescaledb.compress_segmentby = 'equipment_id'
);

SELECT add_compression_policy('sensor_data', INTERVAL '7 days');

-- Continuous aggregate for dashboard KPIs (pre-computed hourly rollup)
CREATE MATERIALIZED VIEW sensor_hourly_avg
WITH (timescaledb.continuous) AS
SELECT
  equipment_id,
  time_bucket('1 hour', timestamp) AS bucket,
  AVG(temperature)  AS avg_temp,
  AVG(vibration)    AS avg_vibration,
  MAX(vibration)    AS max_vibration,
  AVG(rpm)          AS avg_rpm,
  AVG(power_usage)  AS avg_power
FROM sensor_data
GROUP BY equipment_id, bucket;

-- Refresh policy: update every 5 minutes
SELECT add_continuous_aggregate_policy('sensor_hourly_avg',
  start_offset  => INTERVAL '2 hours',
  end_offset    => INTERVAL '5 minutes',
  schedule_interval => INTERVAL '5 minutes'
);
```

---

## 4. Vector Indexing

### 4.1 pgvector — HNSW Index (Primary)

HNSW (Hierarchical Navigable Small World) is the production choice for
FactoryOS AI. IVFFlat is faster to build but slower to query at scale.

```sql
-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Embeddings table with HNSW index
CREATE INDEX idx_embeddings_hnsw ON embeddings
  USING hnsw (vector vector_cosine_ops)
  WITH (
    m              = 16,   -- connections per node (higher = better recall, more memory)
    ef_construction = 64   -- build-time search width (higher = better index quality)
  );

-- Query-time: set ef_search for recall vs speed tradeoff
SET hnsw.ef_search = 40;   -- default; raise to 100 for higher recall on critical queries

-- Semantic search query (top-5 chunks for a given investigation)
SELECT
  dc.id,
  dc.chunk_text,
  dc.page_number,
  dc.metadata,
  d.document_name,
  d.document_type,
  1 - (e.vector <=> $query_vector) AS similarity_score
FROM embeddings e
JOIN document_chunks dc ON dc.id = e.chunk_id
JOIN documents d        ON d.id  = dc.document_id
WHERE d.plant_id = $plant_id
ORDER BY e.vector <=> $query_vector
LIMIT 5;
```

**HNSW tuning for FactoryOS AI scale:**

| Parameter | Hackathon (500K vectors) | Production (5M vectors) |
|---|---|---|
| m | 16 | 32 |
| ef_construction | 64 | 128 |
| ef_search | 40 | 80 |
| RAM required | ~4 GB | ~40 GB |
| p99 query latency | <5ms | <15ms |

---

### 4.2 Filtered Vector Search (Plant-Scoped Retrieval)

Never search across all plants. Pre-filter by plant before ANN.

```sql
-- Scoped retrieval: only chunks from this plant's documents
WITH plant_chunks AS (
  SELECT dc.id, dc.chunk_text, dc.page_number, dc.metadata,
         d.document_name, d.document_type
  FROM document_chunks dc
  JOIN documents d ON d.id = dc.document_id
  WHERE d.plant_id = $plant_id
    AND d.document_type = ANY($doc_types)  -- optional: filter by doc type
)
SELECT
  pc.*,
  1 - (e.vector <=> $query_vector) AS score
FROM plant_chunks pc
JOIN embeddings e ON e.chunk_id = pc.id
ORDER BY e.vector <=> $query_vector
LIMIT $top_k;
```

---

### 4.3 ChromaDB (Alternative / Hybrid)

Use ChromaDB as a **sidecar vector store** for rapid prototyping and the hackathon demo.
Migrate to pgvector HNSW for production.

```python
import chromadb
from chromadb.config import Settings

client = chromadb.PersistentClient(path="./chroma_db")

# One collection per plant (tenant isolation)
collection = client.get_or_create_collection(
    name=f"plant_{plant_id}_docs",
    metadata={"hnsw:space": "cosine"}
)

# Upsert chunks
collection.upsert(
    ids=[chunk_id],
    embeddings=[vector],
    metadatas=[{
        "document_name": doc_name,
        "document_type": doc_type,
        "page_number": page_number,
        "plant_id": plant_id
    }],
    documents=[chunk_text]
)

# Query with metadata filter
results = collection.query(
    query_embeddings=[query_vector],
    n_results=5,
    where={"document_type": {"$in": ["oem_manual", "sop", "inspection"]}}
)
```

**ChromaDB vs pgvector decision matrix:**

| Factor | ChromaDB | pgvector HNSW |
|---|---|---|
| Setup time | 5 minutes | 30 minutes |
| Filtered search | Native metadata filter | JOIN-based (more flexible) |
| Scales beyond 5M vectors | Needs Chroma Cloud | Yes (with tuning) |
| Unified with relational data | No (separate DB) | Yes |
| Hackathon recommendation | ✅ Use this | Production target |

---

### 4.4 Embedding Model Selection

| Model | Dimension | Cost | Best for |
|---|---|---|---|
| `text-embedding-3-large` (OpenAI) | 1536 | $0.13 / 1M tokens | Highest recall |
| `text-embedding-3-small` (OpenAI) | 1536 | $0.02 / 1M tokens | Budget option |
| `embed-english-v3.0` (Cohere) | 1024 | $0.10 / 1M tokens | Industrial text |
| `all-MiniLM-L6-v2` (local) | 384 | Free | Offline / air-gapped plants |

**Recommendation for hackathon:** `text-embedding-3-small` — cheap, fast, same dimension as large.
**Recommendation for production:** `text-embedding-3-large` — critical safety documents need best recall.

---

## 5. Query Optimization Patterns

### 5.1 Materialized Views for Dashboard KPIs

Never compute aggregates live for a dashboard. Pre-compute.

```sql
-- Equipment health summary per plant (refreshed every 15 minutes)
CREATE MATERIALIZED VIEW mv_plant_health_summary AS
SELECT
  e.plant_id,
  COUNT(*)                                          AS total_equipment,
  AVG(e.health_score)                               AS avg_health_score,
  COUNT(*) FILTER (WHERE e.status = 'failed')       AS failed_count,
  COUNT(*) FILTER (WHERE e.status = 'degraded')     AS degraded_count,
  COUNT(*) FILTER (WHERE e.health_score < 50)       AS critical_health_count,
  COUNT(a.id) FILTER (WHERE a.status = 'open'
    AND a.severity = 'critical')                    AS open_critical_alerts
FROM equipment e
LEFT JOIN alerts a ON a.equipment_id = e.id
WHERE e.status != 'decommissioned'
GROUP BY e.plant_id;

CREATE UNIQUE INDEX ON mv_plant_health_summary(plant_id);

-- Refresh job (pg_cron)
SELECT cron.schedule('refresh-health-mv', '*/15 * * * *',
  'REFRESH MATERIALIZED VIEW CONCURRENTLY mv_plant_health_summary');
```

```sql
-- Compliance risk summary per plant (refreshed daily)
CREATE MATERIALIZED VIEW mv_compliance_summary AS
SELECT
  e.plant_id,
  c.framework,
  COUNT(*) FILTER (WHERE c.status = 'non_compliant') AS violations,
  AVG(c.risk_score)                                   AS avg_risk,
  MAX(c.risk_score)                                   AS max_risk
FROM compliance c
JOIN equipment e ON e.id = c.equipment
GROUP BY e.plant_id, c.framework;

SELECT cron.schedule('refresh-compliance-mv', '0 1 * * *',
  'REFRESH MATERIALIZED VIEW CONCURRENTLY mv_compliance_summary');
```

---

### 5.2 Connection Pooling

```
PgBouncer (transaction mode)
  Pool size per service:   20 connections
  Max client connections:  500
  Pool mode:               transaction  (not session — avoids connection bloat)
  Server pool size:        20 per database
```

---

### 5.3 Read Replicas

```
Primary DB        → All writes
Read Replica 1    → AI investigation queries, RAG retrieval (read-heavy)
Read Replica 2    → Dashboard / reporting queries
TimescaleDB node  → Sensor data only
```

---

## 6. Caching Layer

### 6.1 Redis Cache Strategy

```
Cache Layer: Redis 7 (Upstash for serverless / self-hosted for production)

TTL Policy:
  Plant health dashboard    → 5 minutes     (low staleness tolerance)
  Equipment detail page     → 2 minutes     (status changes frequently)
  Document chunk retrieval  → 1 hour        (content is immutable post-processing)
  AI investigation result   → 24 hours      (same query on same equipment = same answer)
  Compliance summary        → 15 minutes    (daily updates but near-real-time feel)
  User session              → 8 hours       (JWT + RBAC claims)
```

```python
import redis
import json
import hashlib

r = redis.Redis(host='localhost', port=6379, db=0)

def get_or_set_investigation(equipment_id: str, query: str, ttl: int = 86400):
    """Cache AI investigation results by equipment + query hash."""
    cache_key = f"inv:{equipment_id}:{hashlib.sha256(query.encode()).hexdigest()[:16]}"

    cached = r.get(cache_key)
    if cached:
        return json.loads(cached)

    result = run_ai_investigation(equipment_id, query)
    r.setex(cache_key, ttl, json.dumps(result))
    return result

def invalidate_equipment_cache(equipment_id: str):
    """Called when new maintenance record or alert is created."""
    pattern = f"inv:{equipment_id}:*"
    keys = r.keys(pattern)
    if keys:
        r.delete(*keys)
```

---

## 7. Archival Policy

### 7.1 Data Retention Tiers

| Table | Hot Tier (SSD) | Warm Tier (HDD/Object) | Cold Tier (Glacier/Archive) | Delete After |
|---|---|---|---|---|
| sensor_data | Last 90 days | 90 days → 2 years | 2 years → 7 years | 7 years |
| audit_logs | Last 1 year | 1 year → 5 years | 5 years → 7 years | 7 years (regulatory) |
| ai_chat_history | Last 90 days | 90 days → 1 year | 1 year → 3 years | 3 years |
| ai_investigations | Last 2 years | 2 years → 5 years | Never (institutional knowledge) | Never |
| maintenance_history | Forever (hot) | — | — | Never |
| documents | Forever (hot) | — | — | Never (OEM manuals) |
| alerts (resolved) | Last 6 months | 6 months → 2 years | 2 years → 7 years | 7 years |
| embeddings | Active docs only | Archived doc embeddings | — | On doc archival |

### 7.2 Archival Execution

```sql
-- Step 1: Move old sensor partitions to cold storage
-- Export partition to S3 as Parquet (via COPY)
COPY (
  SELECT * FROM sensor_data_2024_06
) TO PROGRAM
  'aws s3 cp - s3://factoryos-archive/sensor/2024/06/data.csv'
WITH (FORMAT CSV, HEADER);

-- Step 2: Verify row count matches
-- Step 3: Drop partition
DROP TABLE sensor_data_2024_06;
```

```python
# Archival pipeline (run monthly via cron/Airflow)
def archive_sensor_partition(year: int, month: int):
    partition_name = f"sensor_data_{year}_{month:02d}"

    # Export to Parquet on S3
    export_to_s3(partition_name, f"s3://factoryos-archive/sensor/{year}/{month:02d}/")

    # Verify checksum
    verify_row_count(partition_name)

    # Drop partition (instant — no row-by-row delete)
    db.execute(f"DROP TABLE {partition_name}")

    # Log archival action
    write_audit_log(action="PARTITION_ARCHIVED", entity=partition_name)
```

### 7.3 Compliance-Driven Retention Rules

```
ISO 55001 (Asset Management):  Maintenance records → minimum 10 years
OSHA PSM (Process Safety):     Inspection records → minimum 5 years
IEC 62443 (Cybersecurity):     Audit logs → minimum 5 years
Indian Factories Act:          Accident/incident records → minimum 3 years
Internal policy:               AI Investigations → Never delete (institutional IP)
```

---

## 8. Backup & Disaster Recovery

### 8.1 Backup Strategy

```
BACKUP TIERS
============

1. Continuous WAL Archiving (point-in-time recovery)
   Tool:        pgBackRest or pg_basebackup + WAL-G
   Target:      S3 (encrypted, versioned)
   RPO:         < 5 minutes (WAL segment archive every 5 min)
   RTO:         < 30 minutes (WAL replay from last base backup)

2. Daily Full Base Backup
   Schedule:    02:00 local plant time (low activity window)
   Retention:   30 days of daily backups
   Compression: lz4 (fast decompression for rapid restore)
   Encryption:  AES-256 with KMS-managed keys

3. Weekly Snapshot (EBS / Block Storage)
   Schedule:    Sunday 03:00
   Retention:   12 weekly snapshots (3 months)
   Use case:    Rapid environment clone for staging

4. Monthly Archive to Glacier
   Schedule:    1st of month, 04:00
   Retention:   7 years (compliance minimum)
   Contents:    Full DB dump + archived sensor partitions
```

### 8.2 Backup Execution (WAL-G)

```bash
# Environment configuration
export WALG_S3_PREFIX=s3://factoryos-backups/postgres
export AWS_REGION=ap-south-1
export PGPASSWORD=$DB_PASSWORD

# Continuous WAL archiving (postgresql.conf)
# archive_command = 'wal-g wal-push %p'
# archive_mode = on
# wal_level = replica

# Daily base backup (cron 0 2 * * *)
wal-g backup-push $PGDATA

# Verify backup integrity
wal-g backup-list

# Point-in-time restore to 2026-07-20 08:30:00
wal-g backup-fetch $PGDATA LATEST
echo "restore_command = 'wal-g wal-fetch %f %p'"     >> $PGDATA/recovery.conf
echo "recovery_target_time = '2026-07-20 08:30:00'"  >> $PGDATA/recovery.conf
```

### 8.3 Disaster Recovery Runbook

```
SCENARIO 1: Single table corrupted
  Action:    pg_restore --table=affected_table from latest daily backup
  RTO:       < 10 minutes
  Data loss: 0 (WAL replay fills gap)

SCENARIO 2: Primary DB instance failure
  Action:    Promote read replica to primary (pg_ctl promote)
  RTO:       < 5 minutes (replica lag typically < 30 seconds)
  Data loss: < 30 seconds (replica lag)

SCENARIO 3: Full datacenter / AZ failure
  Action:    Restore from S3 backup in secondary region
  RTO:       < 2 hours
  Data loss: < 5 minutes (WAL archive lag)

SCENARIO 4: Accidental mass DELETE / DROP TABLE
  Action:    PITR — restore to 1 minute before the event
  RTO:       30 minutes
  Data loss: 0 (PITR is exact)

SCENARIO 5: Ransomware / storage corruption
  Action:    Restore from Glacier monthly archive
  RTO:       4–8 hours
  Data loss: Up to 1 month of operational data
  Mitigation: Monthly archives + WAL in separate S3 account (different credentials)
```

### 8.4 ChromaDB / Vector Store Backup

```python
# ChromaDB: export all collections to S3 daily
import chromadb
import boto3
import json

def backup_chromadb(chroma_path: str, s3_bucket: str, date: str):
    client = chromadb.PersistentClient(path=chroma_path)

    for collection in client.list_collections():
        data = collection.get(include=["embeddings", "metadatas", "documents"])
        s3_key = f"chroma-backup/{date}/{collection.name}.json"

        boto3.client('s3').put_object(
            Bucket=s3_bucket,
            Key=s3_key,
            Body=json.dumps(data),
            ServerSideEncryption='AES256'
        )
```

### 8.5 Recovery Testing Schedule

```
Monthly:   Restore single table from backup → verify row count
Quarterly: Full DR drill — restore entire DB to staging → run smoke tests
Annually:  Full datacenter failover simulation → test RTO/RPO targets
```

### 8.6 Multi-Region Architecture (Production Target)

```
┌─────────────────────────────────────────────┐
│              ap-south-1 (Primary)           │
│  PostgreSQL Primary + TimescaleDB           │
│  Redis Primary                              │
│  S3 (hot backups + WAL archive)             │
│  ChromaDB / pgvector                        │
└──────────────────┬──────────────────────────┘
                   │ Streaming replication (async)
                   │ WAL-G continuous archive
                   ▼
┌─────────────────────────────────────────────┐
│              ap-southeast-1 (Standby)       │
│  PostgreSQL Read Replica (hot standby)      │
│  Redis Replica                              │
│  S3 (cross-region replicated backups)       │
└─────────────────────────────────────────────┘
                   │ Monthly glacier export
                   ▼
┌─────────────────────────────────────────────┐
│              S3 Glacier (Archive)           │
│  7-year retention                           │
│  Separate AWS account (credential isolation)│
└─────────────────────────────────────────────┘
```

---

## 9. Monitoring & SLA Targets

### 9.1 Performance SLA Targets

| Operation | Target p50 | Target p99 | Alert Threshold |
|---|---|---|---|
| AI investigation (end-to-end) | < 2s | < 5s | > 8s |
| Vector search (top-5 chunks) | < 50ms | < 200ms | > 500ms |
| Equipment lookup by tag | < 5ms | < 20ms | > 100ms |
| Dashboard load (plant view) | < 500ms | < 1.5s | > 3s |
| Alert feed refresh | < 100ms | < 300ms | > 1s |
| Document upload + OCR trigger | < 3s | < 10s | > 30s |
| Sensor data ingest (per batch) | < 50ms | < 200ms | > 1s |

### 9.2 Key Metrics to Monitor

```sql
-- Slow query log (log any query > 200ms)
-- postgresql.conf:
-- log_min_duration_statement = 200

-- Index usage audit (find unused indexes monthly)
SELECT
  schemaname,
  tablename,
  indexname,
  idx_scan,
  pg_size_pretty(pg_relation_size(indexrelid)) AS index_size
FROM pg_stat_user_indexes
WHERE idx_scan = 0
  AND pg_relation_size(indexrelid) > 1024 * 1024  -- > 1MB
ORDER BY pg_relation_size(indexrelid) DESC;

-- Table bloat detection
SELECT
  tablename,
  pg_size_pretty(pg_total_relation_size(tablename::regclass)) AS total_size,
  pg_size_pretty(pg_relation_size(tablename::regclass)) AS table_size,
  pg_size_pretty(pg_indexes_size(tablename::regclass)) AS index_size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(tablename::regclass) DESC;
```

---

## 10. Performance-Aware System Prompt

**Add this as an additional section to the FactoryOS AI master system prompt.**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERFORMANCE & DATA FRESHNESS CONTEXT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DATA FRESHNESS — understand what you're reading:

  sensor_data         → real-time (last reading ≤ 60 seconds ago)
  alerts              → real-time (event-driven)
  equipment.health_score → refreshed every 15 minutes (ML pipeline)
  maintenance_history → manual entry (may lag actual work by hours)
  compliance          → refreshed daily
  materialized views  → dashboard KPIs pre-computed every 5–15 minutes

When answering time-sensitive queries, always state the data freshness:
  "Vibration reading: 8.4 mm/s as of [sensor_data.timestamp]."
  "Health score: 67.4 — last computed 8 minutes ago."

CONTEXT VOLUME AWARENESS:

  The retrieved_chunks injected into your context are the top-k semantic
  matches from a 500K–5M chunk corpus. You are not seeing all documents —
  only the most relevant segments. If a user asks about a document section
  that doesn't appear in your context, do NOT fabricate an answer.
  Say: "This detail was not retrieved from the knowledge base.
        Try: 'Search in [document_name] for [topic].'"

INVESTIGATION EXECUTION TIME:

  If execution_time_ms is returned in the context:
  - < 2000ms  → nominal, no comment needed
  - 2000–5000ms → "Investigation ran in [X]s — retrieval load may be elevated."
  - > 5000ms   → "Response time was elevated. Some context may be incomplete.
                   Consider re-running the investigation."

DATA GAP HANDLING:

  If sensor_data is absent or stale (last reading > 30 minutes ago):
  → Flag: "⚠️ Sensor data unavailable or stale for [equipment_tag].
           Analysis based on maintenance history and document knowledge only."

  If no document chunks were retrieved (empty retrieved_chunks):
  → Flag: "⚠️ No documents found in the knowledge base for this query.
           Upload relevant OEM manuals or inspection reports for this equipment."

  If maintenance_history is empty for equipment:
  → Note: "No maintenance history on record. Cannot assess MTBF or
           recurring failure patterns."

VECTOR SEARCH SCORING:

  Chunks with similarity_score < 0.65 are low-confidence matches.
  When your top retrieved chunk scores < 0.65:
  → Reduce investigation confidence by 15–25 points.
  → State: "Retrieved context is a weak match for this query.
             Confidence adjusted downward."

SCALE AWARENESS:

  You operate over a live industrial database. At peak:
  - sensor_data grows at ~10,000 rows/minute across the fleet
  - Alerts may queue in bursts during shift changes
  Do not assume the data you see is complete; it is a time-bounded snapshot.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CACHING BEHAVIOUR (for the frontend)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Include a cache_hint field in your JSON response to guide frontend caching:

  "cache_hint": {
    "ttl_seconds": 3600,
    "invalidate_on": ["new_alert", "new_maintenance_record"]
  }

TTL guidelines:
  Investigation on stable equipment, no open alerts → 3600s (1 hour)
  Investigation on equipment with open alerts       → 300s  (5 minutes)
  Real-time sensor query                            → 60s   (1 minute)
  Compliance query                                  → 900s  (15 minutes)
  Conversational chat                               → 0     (never cache)
```
