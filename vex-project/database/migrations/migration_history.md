# Migration History Log

| Version | File | Description | Execution Status | Date |
|---|---|---|---|---|
| `001` | `001_initial_schema.sql` | Created base extensions, `organizations`, `users`, and `projects` tables. | Complete | 2026-07-21 |
| `002` | `002_auth.sql` | Created `auth_credentials`, `api_keys`, `sessions`, `audit_logs`, and `notifications`. | Complete | 2026-07-21 |
| `003` | `003_indexes.sql` | Created GIN indexes, auto-timestamp trigger functions, and performance tuning rules. | Complete | 2026-07-21 |
| `004` | `004_pgvector.sql` | Created `embeddings` table and HNSW cosine distance index. | Complete | 2026-07-21 |
