# Scalability & Read-Replica Plan

- **Horizontal Read Scaling:** Deploy Primary Writer Node + 3 Read Replicas behind PgBouncer.
- **Connection Pooling:** Use PgBouncer in `transaction` mode (max 10,000 client connections mapped to 100 backend server connections).
- **Partitioning Strategy:** Range partition `audit_logs` and `embeddings` by `created_at` (Monthly partitions).
- **Sharding Path:** Tenant-id hash sharding via Citus extension when scaling past 10TB data volume.
