# FactoryOS AI — Database Technical Design Document
**Version:** 1.0 | **Project:** FactoryOS AI | **Team:** CodeHack
**Stack:** PostgreSQL (primary) · pgvector (embeddings) · Neo4j (knowledge graph)

---

## Table of Contents
1. [Users](#1-users)
2. [Plants](#2-plants)
3. [Equipment](#3-equipment)
4. [Documents](#4-documents)
5. [Document Chunks](#5-document-chunks)
6. [Embeddings](#6-embeddings)
7. [Knowledge Graph Nodes](#7-knowledge-graph-nodes)
8. [Knowledge Graph Relationships](#8-knowledge-graph-relationships)
9. [AI Investigations](#9-ai-investigations)
10. [Alerts](#10-alerts)
11. [Work Orders](#11-work-orders)
12. [Compliance](#12-compliance)
13. [Audit Logs](#13-audit-logs)
14. [Maintenance History](#14-maintenance-history)
15. [Sensor Data](#15-sensor-data)
16. [AI Chat History](#16-ai-chat-history)
17. [AI Feedback](#17-ai-feedback)
18. [Workflow Automation](#18-workflow-automation)
19. [Reports](#19-reports)
20. [Notifications](#20-notifications)
21. [Master Prompt — Schema-Aware Edition](#master-prompt)

---

## 1. Users

### Purpose
Central identity and access control table. Every human actor in the system — engineers, technicians, managers, admins — has exactly one record here.

### Business Description
FactoryOS AI is a multi-tenant, multi-plant platform. A user belongs to one plant (`plant_id`) and carries a role that gates what they can query, approve, or configure. Role-based behavior also determines how the AI structures its responses (executive summary vs full technical depth). `status` enables soft-disable without data deletion.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique user identifier |
| name | VARCHAR(120) | NOT NULL | Full display name |
| email | VARCHAR(255) | UNIQUE, NOT NULL | Login credential and notification target |
| password_hash | TEXT | NOT NULL | bcrypt hash, never stored in plain text |
| role | ENUM | NOT NULL | One of: `plant_manager`, `maintenance_eng`, `technician`, `compliance_officer`, `admin` |
| department | VARCHAR(100) | NULLABLE | e.g., Mechanical, Electrical, HSE, IT |
| plant_id | UUID | FK → plants.id | The plant this user primarily belongs to |
| last_login | TIMESTAMPTZ | NULLABLE | Updated on every successful auth |
| status | ENUM | NOT NULL, DEFAULT 'active' | One of: `active`, `inactive`, `suspended` |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | Record creation timestamp |
| updated_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | Auto-updated on every row change |

### Primary Key
`id` (UUID)

### Foreign Keys
- `plant_id` → `plants.id` ON DELETE SET NULL

### Indexes
```sql
CREATE UNIQUE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_plant_id ON users(plant_id);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_status ON users(status);
```

### Relationships
- **belongs to** → Plants (many-to-one)
- **creates** → AI Investigations, Documents, Reports, Audit Logs, Notifications

### Example Records
```json
[
  {
    "id": "a1b2c3d4-...",
    "name": "Rajesh Verma",
    "email": "r.verma@plantX.com",
    "role": "maintenance_eng",
    "department": "Mechanical",
    "plant_id": "plant-uuid-001",
    "status": "active",
    "last_login": "2026-07-20T08:32:00Z"
  },
  {
    "id": "e5f6g7h8-...",
    "name": "Sunita Patel",
    "email": "s.patel@plantX.com",
    "role": "plant_manager",
    "department": "Operations",
    "plant_id": "plant-uuid-001",
    "status": "active"
  }
]
```

---

## 2. Plants

### Purpose
Top-level tenant entity. Every piece of equipment, every document, every user, every alert ultimately rolls up to a plant.

### Business Description
FactoryOS AI serves multiple industrial facilities. Each plant is an independent operational unit with its own timezone, regulatory jurisdiction, and capacity profile. Multi-plant dashboards aggregate across plants. `industry` drives which compliance frameworks are applied by default (e.g., Oil & Gas → OSHA PSM, ISO 14224).

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique plant identifier |
| plant_name | VARCHAR(200) | NOT NULL | Official facility name |
| location | VARCHAR(300) | NOT NULL | Physical address or GPS coordinates |
| industry | ENUM | NOT NULL | One of: `oil_gas`, `pharma`, `steel`, `cement`, `power`, `chemical`, `food_beverage`, `mining` |
| timezone | VARCHAR(60) | NOT NULL | IANA tz string, e.g., `Asia/Kolkata` |
| country | VARCHAR(100) | NOT NULL | ISO 3166-1 alpha-2 or full name |
| capacity | JSONB | NULLABLE | Flexible capacity metadata e.g., `{"production_tpd": 5000, "units": "metric_tons"}` |
| status | ENUM | NOT NULL, DEFAULT 'active' | One of: `active`, `decommissioned`, `under_construction` |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | — |

### Primary Key
`id` (UUID)

### Foreign Keys
None (root entity)

### Indexes
```sql
CREATE INDEX idx_plants_industry ON plants(industry);
CREATE INDEX idx_plants_status ON plants(status);
CREATE INDEX idx_plants_country ON plants(country);
```

### Relationships
- **has many** → Users, Equipment, Documents, Alerts, Reports

### Example Records
```json
[
  {
    "id": "plant-uuid-001",
    "plant_name": "Bhilai Steel Works — Unit 3",
    "location": "Bhilai, Chhattisgarh, India",
    "industry": "steel",
    "timezone": "Asia/Kolkata",
    "country": "India",
    "capacity": { "production_tpd": 8500, "blast_furnaces": 3 },
    "status": "active"
  }
]
```

---

## 3. Equipment

### Purpose
The master asset registry. Every physical machine, pump, motor, vessel, valve, conveyor — anything that can fail, be maintained, or be monitored — is a row here.

### Business Description
`equipment_tag` is the ISA/plant-standard identifier (e.g., `P-2101`, `M-09`, `V-301`) used in P&IDs and maintenance logs. The AI always references equipment by tag. `health_score` (0–100) is computed by the ML pipeline from sensor data, maintenance history, and failure patterns. `drawing_reference` links to the P&ID or CAD file in the Documents table.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique equipment identifier |
| plant_id | UUID | FK → plants.id, NOT NULL | Owning plant |
| equipment_tag | VARCHAR(50) | UNIQUE (per plant), NOT NULL | ISA-style tag, e.g., `PUMP-21` |
| equipment_name | VARCHAR(200) | NOT NULL | Human-readable name, e.g., "Feed Water Pump 21" |
| equipment_type | ENUM | NOT NULL | One of: `pump`, `motor`, `compressor`, `vessel`, `heat_exchanger`, `valve`, `conveyor`, `boiler`, `turbine`, `sensor`, `plc`, `other` |
| manufacturer | VARCHAR(150) | NULLABLE | OEM name, e.g., Grundfos, Siemens |
| serial_number | VARCHAR(100) | NULLABLE | OEM serial number |
| installation_date | DATE | NULLABLE | Commissioning date |
| health_score | DECIMAL(5,2) | CHECK (0–100), NULLABLE | ML-computed 0–100 score |
| status | ENUM | NOT NULL, DEFAULT 'operational' | One of: `operational`, `degraded`, `under_maintenance`, `failed`, `decommissioned` |
| location | VARCHAR(200) | NULLABLE | Physical location within plant, e.g., "Bay 3, Level 2" |
| drawing_reference | VARCHAR(200) | NULLABLE | P&ID drawing number or CAD file reference |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | — |
| updated_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | — |

### Primary Key
`id` (UUID)

### Foreign Keys
- `plant_id` → `plants.id` ON DELETE CASCADE

### Indexes
```sql
CREATE UNIQUE INDEX idx_equipment_tag_plant ON equipment(plant_id, equipment_tag);
CREATE INDEX idx_equipment_type ON equipment(equipment_type);
CREATE INDEX idx_equipment_status ON equipment(status);
CREATE INDEX idx_equipment_health ON equipment(health_score);
```

### Relationships
- **belongs to** → Plants
- **has many** → Alerts, Work Orders, Maintenance History, Sensor Data, AI Investigations
- **referenced in** → Knowledge Graph Nodes

### Example Records
```json
[
  {
    "id": "equip-uuid-001",
    "plant_id": "plant-uuid-001",
    "equipment_tag": "PUMP-21",
    "equipment_name": "Boiler Feed Water Pump 21",
    "equipment_type": "pump",
    "manufacturer": "Grundfos",
    "serial_number": "GRF-2019-88821",
    "installation_date": "2019-03-15",
    "health_score": 67.4,
    "status": "degraded",
    "location": "Boiler House, Level 1",
    "drawing_reference": "P&ID-BFW-2101-Rev4"
  }
]
```

---

## 4. Documents

### Purpose
Document registry for every file uploaded into FactoryOS AI's knowledge base — the source of truth for the RAG pipeline.

### Business Description
Supports 11 document types: PDF, Word, Excel, Images, Scans, CAD, P&ID, SOP, Inspection Reports, Maintenance Records, OEM Manuals. Every uploaded file gets an entry here first. Then it is processed → chunked → embedded. `ocr_status` tracks whether scanned documents have been OCR-processed. `classification` stores the ML-assigned document category confirmed or corrected by the user.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique document identifier |
| plant_id | UUID | FK → plants.id, NOT NULL | Scoped to plant |
| document_name | VARCHAR(300) | NOT NULL | File name with extension |
| document_type | ENUM | NOT NULL | One of: `pdf`, `word`, `excel`, `image`, `scan`, `cad`, `pid`, `sop`, `inspection`, `maintenance`, `oem_manual` |
| file_url | TEXT | NOT NULL | S3/blob storage URL |
| ocr_status | ENUM | NOT NULL, DEFAULT 'not_required' | One of: `not_required`, `pending`, `processing`, `completed`, `failed` |
| classification | VARCHAR(100) | NULLABLE | ML-assigned or user-confirmed label |
| uploaded_by | UUID | FK → users.id | User who uploaded the file |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | Upload timestamp |

### Primary Key
`id` (UUID)

### Foreign Keys
- `plant_id` → `plants.id` ON DELETE CASCADE
- `uploaded_by` → `users.id` ON DELETE SET NULL

### Indexes
```sql
CREATE INDEX idx_documents_plant_id ON documents(plant_id);
CREATE INDEX idx_documents_type ON documents(document_type);
CREATE INDEX idx_documents_ocr_status ON documents(ocr_status);
CREATE INDEX idx_documents_uploaded_by ON documents(uploaded_by);
```

### Relationships
- **belongs to** → Plants, Users
- **has many** → Document Chunks
- **cited in** → AI Investigations, AI Chat History

### Example Records
```json
[
  {
    "id": "doc-uuid-001",
    "plant_id": "plant-uuid-001",
    "document_name": "Grundfos-CR95-OEM-Manual.pdf",
    "document_type": "oem_manual",
    "file_url": "s3://factoryos-docs/plant-001/grundfos-cr95.pdf",
    "ocr_status": "not_required",
    "classification": "pump_manual",
    "uploaded_by": "a1b2c3d4-..."
  },
  {
    "id": "doc-uuid-002",
    "document_name": "Inspection-PUMP21-May2026.pdf",
    "document_type": "inspection",
    "ocr_status": "completed"
  }
]
```

---

## 5. Document Chunks

### Purpose
Every uploaded document is split into overlapping text segments (chunks). These chunks are the atomic units retrieved by the vector search during AI investigations.

### Business Description
Chunking strategy: 512 tokens per chunk, 64-token overlap (configurable). Each chunk knows its source document, page, and position. `metadata` stores additional context: section title, table/figure flags, extraction confidence from OCR, language detected. Chunks are the bridge between raw documents and the embedding layer.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique chunk identifier |
| document_id | UUID | FK → documents.id, NOT NULL | Parent document |
| chunk_text | TEXT | NOT NULL | Extracted text content of this chunk |
| page_number | INT | NULLABLE | Source page in original document |
| chunk_index | INT | NOT NULL | Sequential chunk number within document (0-based) |
| metadata | JSONB | NULLABLE | e.g., `{"section": "Installation", "is_table": true, "language": "en", "ocr_confidence": 0.94}` |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | — |

### Primary Key
`id` (UUID)

### Foreign Keys
- `document_id` → `documents.id` ON DELETE CASCADE

### Indexes
```sql
CREATE INDEX idx_chunks_document_id ON document_chunks(document_id);
CREATE INDEX idx_chunks_page ON document_chunks(document_id, page_number);
CREATE INDEX idx_chunks_index ON document_chunks(document_id, chunk_index);
CREATE INDEX idx_chunks_metadata ON document_chunks USING GIN(metadata);
```

### Relationships
- **belongs to** → Documents
- **has one** → Embeddings (1:1 after processing)

### Example Records
```json
[
  {
    "id": "chunk-uuid-001",
    "document_id": "doc-uuid-001",
    "chunk_text": "The CR95 pump series requires bearing lubrication at 2000-hour intervals using Shell Tellus S2 M46 oil. Maximum operating temperature: 85°C. Bearing replacement threshold: vibration > 7.1 mm/s RMS.",
    "page_number": 47,
    "chunk_index": 112,
    "metadata": { "section": "Maintenance Schedule", "is_table": false, "language": "en" }
  }
]
```

---

## 6. Embeddings

### Purpose
Stores the vector representation of each document chunk. Powers semantic similarity search in the RAG pipeline.

### Business Description
Uses `pgvector` extension in PostgreSQL. Each chunk gets exactly one embedding row. Embeddings are generated by `text-embedding-3-large` (OpenAI) or `embed-english-v3.0` (Cohere) — tracked via `embedding_model`. HNSW index enables sub-millisecond approximate nearest neighbour (ANN) search across millions of vectors. This table is the retrieval backbone of every AI investigation.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique embedding identifier |
| chunk_id | UUID | FK → document_chunks.id, UNIQUE, NOT NULL | Parent chunk (1:1) |
| vector | VECTOR(1536) | NOT NULL | Embedding vector; dimension matches model |
| embedding_model | VARCHAR(100) | NOT NULL | Model used, e.g., `text-embedding-3-large` |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | — |

### Primary Key
`id` (UUID)

### Foreign Keys
- `chunk_id` → `document_chunks.id` ON DELETE CASCADE

### Indexes
```sql
CREATE UNIQUE INDEX idx_embeddings_chunk_id ON embeddings(chunk_id);
-- HNSW index for ANN search (pgvector)
CREATE INDEX idx_embeddings_vector ON embeddings
  USING hnsw (vector vector_cosine_ops)
  WITH (m = 16, ef_construction = 64);
```

### Relationships
- **belongs to** → Document Chunks (1:1)

### Example Records
```json
[
  {
    "id": "emb-uuid-001",
    "chunk_id": "chunk-uuid-001",
    "vector": "[0.0023, -0.0147, 0.0891, ...]",
    "embedding_model": "text-embedding-3-large"
  }
]
```

---

## 7. Knowledge Graph Nodes

### Purpose
Every entity in FactoryOS AI's industrial knowledge graph — equipment, failure modes, causes, solutions, standards, components — lives here as a node.

### Business Description
Stored in Neo4j (graph database) but mirrored in PostgreSQL for audit. Node types cover the full industrial ontology: Equipment, Failure Mode, Root Cause, Solution, Component, Standard, Material, Process. `metadata` carries type-specific attributes. Nodes are created automatically from document extraction (NLP NER pipeline) and AI investigation outputs.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique node identifier |
| node_type | ENUM | NOT NULL | One of: `equipment`, `failure_mode`, `root_cause`, `solution`, `component`, `standard`, `material`, `process` |
| node_name | VARCHAR(300) | NOT NULL | Canonical name, e.g., "Bearing Failure", "PUMP-21", "ISO 14224" |
| metadata | JSONB | NULLABLE | Type-specific attributes, e.g., `{"tag": "PUMP-21", "plant_id": "..."}` |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | — |

### Primary Key
`id` (UUID)

### Foreign Keys
None (graph entity)

### Indexes
```sql
CREATE INDEX idx_kg_nodes_type ON kg_nodes(node_type);
CREATE INDEX idx_kg_nodes_name ON kg_nodes(node_name);
CREATE INDEX idx_kg_nodes_metadata ON kg_nodes USING GIN(metadata);
```

### Relationships
- **connected via** → Knowledge Graph Relationships
- **references** → Equipment (by tag in metadata)

### Example Records
```json
[
  { "id": "node-001", "node_type": "equipment",     "node_name": "PUMP-21",          "metadata": {"tag": "PUMP-21", "plant_id": "plant-uuid-001"} },
  { "id": "node-002", "node_type": "failure_mode",  "node_name": "Bearing Failure",   "metadata": {"iso_code": "BRG-001"} },
  { "id": "node-003", "node_type": "root_cause",    "node_name": "Inadequate Lubrication", "metadata": {} },
  { "id": "node-004", "node_type": "solution",      "node_name": "Shell Tellus S2 M46 Lubrication at 2000h", "metadata": {} }
]
```

---

## 8. Knowledge Graph Relationships

### Purpose
Directed, typed edges between knowledge graph nodes. Encodes the causal and operational relationships that drive AI reasoning chains.

### Business Description
Relationships power the graph traversal logic used in AI investigations. The AI navigates: Equipment → `HAS_FAILURE` → Failure Mode → `CAUSED_BY` → Root Cause → `SOLVED_BY` → Solution. `confidence` (0.0–1.0) reflects extraction reliability — low-confidence edges are flagged in responses. Edges are created by NLP extraction, AI investigation outputs, and manual curation by engineers.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique relationship identifier |
| source_node | UUID | FK → kg_nodes.id, NOT NULL | Origin node |
| target_node | UUID | FK → kg_nodes.id, NOT NULL | Destination node |
| relation | ENUM | NOT NULL | One of: `CONNECTED_TO`, `HAS_FAILURE`, `CAUSED_BY`, `SOLVED_BY`, `PART_OF`, `REQUIRES`, `AFFECTS`, `COMPLIES_WITH`, `REPLACED_BY` |
| confidence | DECIMAL(4,3) | CHECK (0.0–1.0), DEFAULT 1.0 | Extraction confidence score |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | — |

### Primary Key
`id` (UUID)

### Foreign Keys
- `source_node` → `kg_nodes.id` ON DELETE CASCADE
- `target_node` → `kg_nodes.id` ON DELETE CASCADE

### Indexes
```sql
CREATE INDEX idx_kg_rel_source ON kg_relationships(source_node);
CREATE INDEX idx_kg_rel_target ON kg_relationships(target_node);
CREATE INDEX idx_kg_rel_relation ON kg_relationships(relation);
CREATE INDEX idx_kg_rel_confidence ON kg_relationships(confidence);
```

### Relationships (example triples)
```
PUMP-21       --[CONNECTED_TO]-->  Motor-09
PUMP-21       --[HAS_FAILURE]-->   Bearing Failure         (confidence: 0.91)
Bearing Failure --[CAUSED_BY]-->   Inadequate Lubrication
Bearing Failure --[SOLVED_BY]-->   Shell Tellus Lubrication at 2000h
Motor-09      --[AFFECTS]-->       PUMP-21
```

---

## 9. AI Investigations

### Purpose
The heart of FactoryOS AI. Every structured root-cause analysis, failure diagnosis, or compliance investigation the AI performs is stored here with full reasoning chain, citations, and confidence.

### Business Description
An investigation is triggered when a user submits a query in Investigation Mode (vs. conversational chat). The AI's full Chain-of-Thought reasoning, retrieved document citations, knowledge graph nodes used, root cause hypotheses, and final recommendations are all persisted. This creates an institutional knowledge store — future investigations can reference prior ones. `execution_time` tracks performance SLAs.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique investigation identifier |
| user_id | UUID | FK → users.id, NOT NULL | Investigating user |
| equipment_id | UUID | FK → equipment.id, NULLABLE | Target equipment (null for plant-level queries) |
| query | TEXT | NOT NULL | Original natural language question |
| reasoning | TEXT | NOT NULL | AI's internal Chain-of-Thought reasoning |
| citations | JSONB | NOT NULL | Array of `{document, page, chunk_id, type}` |
| confidence | DECIMAL(5,2) | CHECK (0–100) | AI's self-reported confidence score |
| response | JSONB | NOT NULL | Full structured response (see Master Prompt JSON schema) |
| status | ENUM | NOT NULL, DEFAULT 'completed' | One of: `running`, `completed`, `failed`, `flagged` |
| execution_time | INT | NULLABLE | Milliseconds to complete |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | — |

### Primary Key
`id` (UUID)

### Foreign Keys
- `user_id` → `users.id` ON DELETE SET NULL
- `equipment_id` → `equipment.id` ON DELETE SET NULL

### Indexes
```sql
CREATE INDEX idx_investigations_user_id ON ai_investigations(user_id);
CREATE INDEX idx_investigations_equipment_id ON ai_investigations(equipment_id);
CREATE INDEX idx_investigations_status ON ai_investigations(status);
CREATE INDEX idx_investigations_confidence ON ai_investigations(confidence);
CREATE INDEX idx_investigations_created_at ON ai_investigations(created_at DESC);
```

### Relationships
- **belongs to** → Users, Equipment
- **references** → Documents (via citations JSONB)
- **rated by** → AI Feedback

### Example Records
```json
{
  "id": "inv-uuid-001",
  "user_id": "a1b2c3d4-...",
  "equipment_id": "equip-uuid-001",
  "query": "Why is PUMP-21 showing elevated vibration since Monday?",
  "confidence": 84.0,
  "status": "completed",
  "execution_time": 2340,
  "citations": [
    { "document": "Grundfos-CR95-OEM-Manual.pdf", "page": 47, "chunk_id": "chunk-uuid-001" },
    { "document": "Inspection-PUMP21-May2026.pdf", "page": 3, "chunk_id": "chunk-uuid-089" }
  ]
}
```

---

## 10. Alerts

### Purpose
Real-time and rule-based alert registry. Captures anomalies, threshold breaches, compliance violations, and AI-detected failure precursors.

### Business Description
Alerts are generated by three sources: sensor threshold rules (e.g., vibration > 7.1 mm/s), AI investigation outputs that detect risk, and compliance rule violations. Severity drives notification routing: `critical` → immediate SMS/call, `high` → push notification, `medium/low` → dashboard badge. Alerts feed the Notifications table.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique alert identifier |
| equipment_id | UUID | FK → equipment.id, NOT NULL | Affected equipment |
| severity | ENUM | NOT NULL | One of: `critical`, `high`, `medium`, `low` |
| type | ENUM | NOT NULL | One of: `sensor_anomaly`, `failure_prediction`, `compliance_violation`, `maintenance_overdue`, `health_degradation` |
| description | TEXT | NOT NULL | Human-readable alert description |
| status | ENUM | NOT NULL, DEFAULT 'open' | One of: `open`, `acknowledged`, `resolved`, `suppressed` |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | — |

### Primary Key
`id` (UUID)

### Foreign Keys
- `equipment_id` → `equipment.id` ON DELETE CASCADE

### Indexes
```sql
CREATE INDEX idx_alerts_equipment_id ON alerts(equipment_id);
CREATE INDEX idx_alerts_severity ON alerts(severity);
CREATE INDEX idx_alerts_status ON alerts(status);
CREATE INDEX idx_alerts_created_at ON alerts(created_at DESC);
```

### Relationships
- **belongs to** → Equipment
- **triggers** → Notifications, Work Orders

### Example Records
```json
{
  "id": "alert-uuid-001",
  "equipment_id": "equip-uuid-001",
  "severity": "high",
  "type": "sensor_anomaly",
  "description": "PUMP-21 vibration exceeded 7.1 mm/s RMS threshold. Current reading: 8.4 mm/s. Bearing failure risk elevated.",
  "status": "open"
}
```

---

## 11. Work Orders

### Purpose
Maintenance task tracking. Every AI-suggested or manually created maintenance action becomes a work order.

### Business Description
Work orders are created from Alert triggers, AI Investigation recommendations, or direct engineer action. They track assignment, priority, cost estimation, and completion. Integration with CMMS systems (SAP PM, IBM Maximo) is planned via webhook in the Workflow Automation table.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique work order identifier |
| equipment_id | UUID | FK → equipment.id, NOT NULL | Target equipment |
| assigned_to | UUID | FK → users.id, NULLABLE | Assigned technician |
| priority | ENUM | NOT NULL | One of: `critical`, `high`, `medium`, `low` |
| status | ENUM | NOT NULL, DEFAULT 'open' | One of: `open`, `in_progress`, `completed`, `cancelled`, `deferred` |
| estimated_cost | DECIMAL(12,2) | NULLABLE | Estimated cost in plant's base currency |
| completion_date | DATE | NULLABLE | Planned or actual completion date |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | — |
| updated_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | — |

### Primary Key
`id` (UUID)

### Foreign Keys
- `equipment_id` → `equipment.id` ON DELETE CASCADE
- `assigned_to` → `users.id` ON DELETE SET NULL

### Indexes
```sql
CREATE INDEX idx_wo_equipment_id ON work_orders(equipment_id);
CREATE INDEX idx_wo_assigned_to ON work_orders(assigned_to);
CREATE INDEX idx_wo_priority ON work_orders(priority);
CREATE INDEX idx_wo_status ON work_orders(status);
CREATE INDEX idx_wo_completion_date ON work_orders(completion_date);
```

### Relationships
- **belongs to** → Equipment
- **assigned to** → Users
- **triggered by** → Alerts, AI Investigations

---

## 12. Compliance

### Purpose
Tracks equipment-level and plant-level compliance status against regulatory frameworks and internal standards.

### Business Description
Maps each piece of equipment (or plant-wide rule) to compliance frameworks: ISO 55001 (Asset Management), OSHA PSM (Process Safety), IEC 62443 (Cybersecurity), ISO 14224 (Reliability & Maintenance), IS 2148 (Indian explosion-proof). `risk_score` (0–100) enables compliance risk ranking. `evidence` stores JSON references to the supporting documents and inspection records.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique compliance record identifier |
| framework | VARCHAR(100) | NOT NULL | e.g., `ISO 55001`, `OSHA PSM`, `IEC 62443` |
| equipment | UUID | FK → equipment.id, NULLABLE | Equipment scope (null = plant-wide) |
| rule | TEXT | NOT NULL | Specific rule or clause reference |
| status | ENUM | NOT NULL | One of: `compliant`, `non_compliant`, `under_review`, `not_applicable` |
| risk_score | DECIMAL(5,2) | CHECK (0–100) | Risk severity of non-compliance |
| evidence | JSONB | NULLABLE | References to documents proving compliance |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | — |

### Primary Key
`id` (UUID)

### Foreign Keys
- `equipment` → `equipment.id` ON DELETE SET NULL

### Indexes
```sql
CREATE INDEX idx_compliance_framework ON compliance(framework);
CREATE INDEX idx_compliance_equipment ON compliance(equipment);
CREATE INDEX idx_compliance_status ON compliance(status);
CREATE INDEX idx_compliance_risk ON compliance(risk_score DESC);
```

### Relationships
- **scoped to** → Equipment (optional)
- **cited in** → AI Investigations (compliance_flags), Audit Logs

---

## 13. Audit Logs

### Purpose
Immutable append-only log of every significant user action in the system. Required for regulatory compliance and security forensics.

### Business Description
Every write operation — document upload, work order creation, AI investigation trigger, user management action, alert acknowledgement — generates an audit log entry. The table is write-only (no updates, no deletes). Used for OSHA, ISO 55001, and IEC 62443 audit readiness. `ip_address` enables geographic anomaly detection.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | BIGSERIAL | PK, NOT NULL | Sequential integer for chronological ordering |
| user_id | UUID | FK → users.id, NULLABLE | Acting user (null for system actions) |
| action | VARCHAR(100) | NOT NULL | e.g., `DOCUMENT_UPLOAD`, `INVESTIGATION_RUN`, `WORK_ORDER_CREATED` |
| entity | VARCHAR(100) | NOT NULL | Table or entity type acted upon |
| entity_id | UUID | NOT NULL | ID of the specific record |
| timestamp | TIMESTAMPTZ | NOT NULL, DEFAULT now() | Action time |
| ip_address | INET | NULLABLE | Client IP address |

### Primary Key
`id` (BIGSERIAL)

### Foreign Keys
- `user_id` → `users.id` ON DELETE SET NULL

### Indexes
```sql
CREATE INDEX idx_audit_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_action ON audit_logs(action);
CREATE INDEX idx_audit_entity ON audit_logs(entity, entity_id);
CREATE INDEX idx_audit_timestamp ON audit_logs(timestamp DESC);
```

### Relationships
- **generated by** → Users
- **references** → Any entity (polymorphic via entity + entity_id)

---

## 14. Maintenance History

### Purpose
Complete historical log of every maintenance activity performed on every piece of equipment.

### Business Description
This table is the primary training signal for predictive maintenance models. It stores what was done, who did it, what was found, what parts were replaced, how long the equipment was down, and what it cost. The AI references maintenance history when investigating recurring failures and calculating Mean Time Between Failures (MTBF). `parts_used` is a JSONB array allowing multiple parts per activity.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique maintenance record |
| equipment_id | UUID | FK → equipment.id, NOT NULL | Equipment maintained |
| maintenance_type | ENUM | NOT NULL | One of: `preventive`, `predictive`, `corrective`, `emergency`, `inspection`, `overhaul` |
| technician | UUID | FK → users.id, NULLABLE | Performing technician |
| findings | TEXT | NULLABLE | Observations and diagnosis notes |
| parts_used | JSONB | NULLABLE | e.g., `[{"part": "Bearing 6205", "qty": 2, "cost": 1200}]` |
| downtime | INTERVAL | NULLABLE | Equipment downtime duration |
| cost | DECIMAL(12,2) | NULLABLE | Total maintenance cost |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | Activity date |

### Primary Key
`id` (UUID)

### Foreign Keys
- `equipment_id` → `equipment.id` ON DELETE CASCADE
- `technician` → `users.id` ON DELETE SET NULL

### Indexes
```sql
CREATE INDEX idx_maint_equipment_id ON maintenance_history(equipment_id);
CREATE INDEX idx_maint_type ON maintenance_history(maintenance_type);
CREATE INDEX idx_maint_technician ON maintenance_history(technician);
CREATE INDEX idx_maint_created_at ON maintenance_history(created_at DESC);
```

### Relationships
- **belongs to** → Equipment, Users
- **referenced in** → AI Investigations context block

---

## 15. Sensor Data

### Purpose
Time-series operational telemetry from physical sensors attached to equipment. Foundation for the Digital Twin roadmap.

### Business Description
Currently stores 6 sensor channels per record: temperature, pressure, RPM, vibration, oil level, power usage. Designed for extension. High-frequency data (readings every 5–60 seconds) generates large volume — partitioned by `timestamp` month in production. Anomaly detection ML models read from this table. The AI receives the last 24h or 7d of sensor data in its context block for investigation queries.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | BIGSERIAL | PK, NOT NULL | Sequential identifier |
| equipment_id | UUID | FK → equipment.id, NOT NULL | Source equipment |
| temperature | DECIMAL(6,2) | NULLABLE | °C |
| pressure | DECIMAL(8,3) | NULLABLE | Bar or PSI (plant-configured) |
| rpm | DECIMAL(8,2) | NULLABLE | Rotations per minute |
| vibration | DECIMAL(6,3) | NULLABLE | mm/s RMS |
| oil_level | DECIMAL(5,2) | NULLABLE | % of full |
| power_usage | DECIMAL(8,3) | NULLABLE | kW |
| timestamp | TIMESTAMPTZ | NOT NULL, DEFAULT now() | Sensor reading time |

### Primary Key
`id` (BIGSERIAL)

### Foreign Keys
- `equipment_id` → `equipment.id` ON DELETE CASCADE

### Indexes
```sql
-- Partitioned by month on timestamp (PostgreSQL declarative partitioning)
CREATE INDEX idx_sensor_equipment_time ON sensor_data(equipment_id, timestamp DESC);
CREATE INDEX idx_sensor_vibration ON sensor_data(equipment_id, vibration) WHERE vibration IS NOT NULL;
```

### Relationships
- **belongs to** → Equipment
- **feeds** → AI Investigations (context), Alerts (threshold engine)

---

## 16. AI Chat History

### Purpose
Stores every conversational message exchange in the AI chat interface. Provides persistent conversation context and enables session replay.

### Business Description
Separate from AI Investigations — this is the conversational (non-structured) mode. `conversation_id` groups messages into sessions. `citations` are optional — present when the AI retrieves document chunks in answering. Used for feedback loop training and conversation context injection in long sessions.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique message identifier |
| conversation_id | UUID | NOT NULL | Groups messages into a session |
| user_message | TEXT | NOT NULL | User's input message |
| assistant_response | TEXT | NOT NULL | AI's response |
| citations | JSONB | NULLABLE | Documents cited in this response |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | Message timestamp |

### Primary Key
`id` (UUID)

### Foreign Keys
None directly (conversation_id is a logical grouper, not FK)

### Indexes
```sql
CREATE INDEX idx_chat_conversation_id ON ai_chat_history(conversation_id);
CREATE INDEX idx_chat_created_at ON ai_chat_history(created_at DESC);
```

### Relationships
- **rated by** → AI Feedback (via conversation_id)

---

## 17. AI Feedback

### Purpose
Captures user ratings and qualitative feedback on AI investigations and chat responses. Drives RLHF-style model improvement.

### Business Description
After every AI investigation or chat session, users are prompted (optionally) to rate the response (1–5 stars) and leave a comment. Aggregated ratings are used to evaluate prompt quality, retrieval accuracy, and model performance across equipment types and document sets. Low-rated investigations are flagged for prompt engineering review.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique feedback record |
| conversation_id | UUID | NOT NULL | Links to investigation or chat session |
| rating | SMALLINT | CHECK (1–5), NOT NULL | Star rating |
| feedback | TEXT | NULLABLE | Free-text comment |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | Submission time |

### Primary Key
`id` (UUID)

### Indexes
```sql
CREATE INDEX idx_feedback_conversation ON ai_feedback(conversation_id);
CREATE INDEX idx_feedback_rating ON ai_feedback(rating);
```

---

## 18. Workflow Automation

### Purpose
Stores rule definitions for automated actions triggered by system events — the automation engine backbone.

### Business Description
Enables no-code workflow creation: "When alert severity = CRITICAL AND equipment_type = boiler → create work order AND notify plant_manager." `trigger` and `action` are JSON DSL objects processed by the automation engine. Supports CMMS integration (SAP PM webhook), notification routing, and report scheduling.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique workflow identifier |
| workflow_name | VARCHAR(200) | NOT NULL | Human-readable name |
| trigger | JSONB | NOT NULL | Event DSL e.g., `{"event": "alert_created", "conditions": {"severity": "critical"}}` |
| action | JSONB | NOT NULL | Action DSL e.g., `{"type": "create_work_order", "priority": "critical"}` |
| status | ENUM | NOT NULL, DEFAULT 'active' | One of: `active`, `inactive`, `draft` |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | — |

### Primary Key
`id` (UUID)

### Indexes
```sql
CREATE INDEX idx_workflow_status ON workflow_automation(status);
CREATE INDEX idx_workflow_trigger ON workflow_automation USING GIN(trigger);
```

---

## 19. Reports

### Purpose
Registry of all generated PDF/Excel reports — scheduled, on-demand, and AI-generated.

### Business Description
Reports are generated by three sources: scheduled jobs (weekly equipment health summary, monthly compliance report), user-triggered exports from the dashboard, and AI-generated post-investigation reports. `file_url` points to the generated file in blob storage. `generated_by` tracks whether a human or the system generated it.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique report identifier |
| report_name | VARCHAR(300) | NOT NULL | e.g., "PUMP-21 Investigation Report — July 2026" |
| generated_by | UUID | FK → users.id, NULLABLE | User or null (system-generated) |
| file_url | TEXT | NOT NULL | S3/blob URL of generated file |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | Generation timestamp |

### Primary Key
`id` (UUID)

### Foreign Keys
- `generated_by` → `users.id` ON DELETE SET NULL

### Indexes
```sql
CREATE INDEX idx_reports_generated_by ON reports(generated_by);
CREATE INDEX idx_reports_created_at ON reports(created_at DESC);
```

---

## 20. Notifications

### Purpose
Delivery queue for all in-app, push, email, and SMS notifications sent to users.

### Business Description
Decoupled notification layer — alerts, work order assignments, report completions, and compliance flags all write here first, then the notification service dispatches by channel. `type` determines channel routing. `status` tracks delivery lifecycle. Unread count drives dashboard badge.

### Columns

| Column | Data Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK, NOT NULL, DEFAULT gen_random_uuid() | Unique notification identifier |
| user_id | UUID | FK → users.id, NOT NULL | Recipient user |
| title | VARCHAR(200) | NOT NULL | Short notification title |
| message | TEXT | NOT NULL | Full notification body |
| type | ENUM | NOT NULL | One of: `alert`, `work_order`, `report`, `compliance`, `system` |
| status | ENUM | NOT NULL, DEFAULT 'unread' | One of: `unread`, `read`, `dismissed` |
| created_at | TIMESTAMPTZ | NOT NULL, DEFAULT now() | — |

### Primary Key
`id` (UUID)

### Foreign Keys
- `user_id` → `users.id` ON DELETE CASCADE

### Indexes
```sql
CREATE INDEX idx_notif_user_id ON notifications(user_id);
CREATE INDEX idx_notif_status ON notifications(user_id, status);
CREATE INDEX idx_notif_type ON notifications(type);
CREATE INDEX idx_notif_created_at ON notifications(created_at DESC);
```

### Relationships
- **sent to** → Users
- **triggered by** → Alerts, Work Orders, Reports, Compliance

---

## Master Prompt

**Schema-Aware Edition — drop as the `system` field in every `/v1/messages` call.**

```
You are FactoryOS AI — an enterprise Industrial Knowledge Intelligence engine.
You serve plant engineers, maintenance technicians, compliance officers, and plant
managers at industrial facilities. Your job: investigate equipment failures, answer
operational questions, surface maintenance history, enforce compliance, and synthesize
knowledge from multi-modal industrial documents.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DATABASE SCHEMA YOU OPERATE OVER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
You have semantic access to these 20 tables:

  users               → identity, role, plant_id, department, status
  plants              → plant_name, industry, timezone, country, capacity
  equipment           → equipment_tag, equipment_type, health_score, status, drawing_reference
  documents           → document_name, document_type, ocr_status, classification
  document_chunks     → chunk_text, page_number, chunk_index, metadata
  embeddings          → vector, embedding_model (retrieved by semantic search, not raw)
  kg_nodes            → node_type, node_name (equipment/failure/cause/solution/standard)
  kg_relationships    → source_node, target_node, relation, confidence
  ai_investigations   → prior query/reasoning/citations/confidence for this equipment
  alerts              → severity, type, description, status
  work_orders         → priority, assigned_to, status, estimated_cost, completion_date
  compliance          → framework, rule, status, risk_score, evidence
  audit_logs          → action, entity, entity_id, timestamp (read-only reference)
  maintenance_history → maintenance_type, findings, parts_used, downtime, cost
  sensor_data         → temperature, pressure, rpm, vibration, oil_level, power_usage
  ai_chat_history     → prior conversation context for this session
  ai_feedback         → past ratings on this equipment's investigations
  workflow_automation → active automation rules (read-only reference)
  reports             → generated report registry
  notifications       → user notification queue

KNOWLEDGE HIERARCHY (when sources conflict):
  OEM Manual > SOP > Inspection Report > Maintenance History > General PDF > AI Inference

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IDENTITY & TONE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Precise, authoritative, concise. No filler. Disclaimers only when safety-critical.
Address engineers as peers. Use ISO 14224, ISA-95, IEC 62443 terminology.
Confidence low? State it: "Confidence: 62%". Never fabricate equipment tags,
sensor values, or document page numbers. If data is absent: "Not found in
loaded knowledge base."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTEXT BLOCK (injected at runtime)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[USER]           id | name | role | department | plant_id
[PLANT]          plant_name | industry | timezone
[EQUIPMENT]      equipment_tag | equipment_name | type | manufacturer | health_score | status | drawing_reference
[RETRIEVED_CHUNKS]   chunk_text | page_number | document_name | document_type | chunk_id
[KNOWLEDGE_GRAPH]    Node --[RELATION]--> Node  (confidence: X%)
[MAINTENANCE_HISTORY]  type | technician | findings | parts_used | downtime | cost | date
[SENSOR_DATA]    temperature | pressure | rpm | vibration | oil_level | power_usage | timestamp
[ALERTS]         severity | type | description | status
[WORK_ORDERS]    priority | assigned_to | status | estimated_cost | completion_date
[COMPLIANCE]     framework | rule | status | risk_score | evidence
[INVESTIGATION_HISTORY]  prior AI investigations on this equipment

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REASONING PROTOCOL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. PARSE    — Identify equipment_tag, symptom, time window, scope.
2. RETRIEVE — Cross-reference retrieved chunks + knowledge graph triples.
3. CORRELATE — Link sensor_data anomalies → maintenance_history → kg failure modes.
4. HYPOTHESIZE — Generate 2–3 ranked root cause hypotheses with evidence.
5. CITE     — Attach document_name, page_number, chunk_id to every factual claim.
6. RECOMMEND — Prescribe immediate / short-term / long-term actions.
7. SCORE    — Output confidence (0–100) and flag data_gaps.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INVESTIGATION RESPONSE (JSON mode)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{
  "summary": "<one-line answer>",
  "reasoning": "<step-by-step analysis, 3–6 sentences>",
  "root_causes": [
    { "rank": 1, "cause": "...", "confidence": 87, "evidence": "..." },
    { "rank": 2, "cause": "...", "confidence": 61, "evidence": "..." }
  ],
  "recommendations": {
    "immediate": "...",
    "short_term": "...",
    "long_term": "..."
  },
  "citations": [
    { "document": "...", "type": "oem_manual", "page": 47, "chunk_id": "..." }
  ],
  "knowledge_graph_nodes": ["PUMP-21", "Bearing Failure", "Lubrication"],
  "suggest_edges": ["PUMP-21 --[HAS_FAILURE]--> Bearing Failure"],
  "alerts_triggered": [],
  "work_order_suggested": { "priority": "HIGH", "action": "...", "estimated_cost": null },
  "compliance_flags": [],
  "confidence": 84,
  "data_gaps": ["No vibration sensor data after 2026-06-01"],
  "execution_time_ms": null
}

Conversational queries → plain text (no JSON). Mode determined by
`investigation_mode: true` in the request body.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ROLE-BASED DEPTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
plant_manager       → Executive summary, costs, downtime impact, KPIs first.
maintenance_eng     → Full technical depth, tolerances, step-by-step procedure.
technician          → Plain-language steps, safety checklist, tool list.
compliance_officer  → Regulatory mapping, evidence trail, risk scores, audit readiness.
admin               → System-level context, user/document management scope.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KNOWLEDGE GRAPH RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Traverse: Equipment → HAS_FAILURE → Failure Mode → CAUSED_BY → Root Cause → SOLVED_BY → Solution.
- Confidence < 0.60 on any edge → flag as "unverified relationship".
- When you infer a new edge not in the graph, output as SUGGEST_EDGE in JSON response.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SAFETY RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Safety-critical systems (pressure vessels, boilers, HV electrical, rotating
machinery in confined spaces) → prepend:
⚠️ SAFETY FLAG: [reason]. Verify with certified plant engineer before action.
Never recommend bypassing safety interlocks. Ever.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HARD LIMITS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Do not fabricate sensor readings, equipment tags, or page numbers.
- Out-of-scope questions → "This is outside FactoryOS scope."
- Do not autonomously create work orders or fire alerts. Suggest only.
  The human always confirms.
```
