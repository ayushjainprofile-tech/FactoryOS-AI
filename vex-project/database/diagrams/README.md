# FactoryOS AI — Enterprise Entity Relationship Diagram

## ASCII Overview

```text
+-------------------+       +-------------------+       +-------------------+
|  organizations    |       |  users            |       | auth_credentials  |
|-------------------|       |-------------------|       |-------------------|
| PK id             |1     *| PK id             |1     1| PK id             |
|    name           +-------+ FK organization_id+-------+ FK user_id        |
|    slug           |       |    email          |       |    password_hash  |
|    plan_tier      |       |    role           |       |    two_factor     |
+---------+---------+       +---------+---------+       +-------------------+
          | 1                         | 1
          |                           |
          | *                         | * (technician)
+---------+---------+       +---------+---------+
|  assets           |1     *| maintenance_logs  |
|-------------------|       |-------------------|
| PK id             +-------+ PK id             |
| FK organization_id|       | FK asset_id       |
|    asset_code     |       | FK technician_id  |
|    health_score   |       |    findings       |
+---------+---------+       +-------------------+
          | 1
          |
          | *
+---------+---------+       +-------------------+
|  documents        |1     *| embeddings        |
|-------------------|       |-------------------|
| PK id             +-------+ PK id             |
| FK asset_id       |       | FK document_id    |
|    title          |       |    chunk_content  |
|    document_type  |       |    vector(1536)   |
+-------------------+       +-------------------+
```

## Entity List & Data Dictionary

### Core Entities
1. **organizations**
   - **Purpose:** Boundaries for enterprise multi-tenancy.
   - **Records Expected:** 10s to 1,000s.
   - **Features:** UUID, Soft Delete (`deleted_at`), Unique slugs.
2. **users**
   - **Purpose:** RBAC-controlled access (Plant Manager, Technician).
   - **Records Expected:** 1,000s to 100,000s.
   - **Features:** B-Tree index on email, scoped by `organization_id`.
3. **assets**
   - **Purpose:** Industrial equipment (Pumps, Motors, Compressors).
   - **Records Expected:** 1M+ across tenants.
   - **Features:** Composite unique constraint (`organization_id`, `asset_code`).

### AI & Data Intelligence Entities
4. **documents**
   - **Purpose:** OEM Manuals, P&IDs, SOPs.
   - **Records Expected:** 10M+.
   - **Features:** Associated optionally with specific `assets`.
5. **embeddings**
   - **Purpose:** pgvector chunks for RAG.
   - **Records Expected:** 100M+ to 1B+.
   - **Features:** `vector(1536)` datatype, HNSW cosine index.

### Operational Entities
6. **maintenance_records**
   - **Purpose:** Historical downtime and fixes.
   - **Records Expected:** 10M+.
   - **Features:** Ties `users` (technicians) to `assets`.
7. **audit_logs**
   - **Purpose:** Immutable compliance and security ledger.
   - **Records Expected:** 1B+ (Partitioned horizontally by month).
   - **Features:** Append-only, indexed by timestamp and organization.
