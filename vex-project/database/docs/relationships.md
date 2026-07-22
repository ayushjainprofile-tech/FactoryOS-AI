# Database Relationships & Integrity Rules

This document outlines the strict referential integrity and scaling rules for FactoryOS AI.

## 1. One-to-Many (1:N) Core Multi-Tenancy
**Relationship:** `organizations` (1) ➔ `users`, `assets`, `documents`, `audit_logs` (N)
- **Why it exists:** Provides logical isolation of data for B2B Enterprise SaaS.
- **Cascade Rules:** 
  - `ON DELETE CASCADE` for users and assets (If a tenant is purged, their data goes with them).
  - `audit_logs` use `ON DELETE SET NULL` to preserve security history for deleted users, but `CASCADE` on tenant deletion.
- **Performance:** All foreign keys pointing to `organization_id` have B-Tree indexes. Queries must ALWAYS include `WHERE organization_id = ?` to ensure proper routing and prepare the DB for future hash-based sharding (Citus).

## 2. One-to-One (1:1) Authentication
**Relationship:** `users` (1) ➔ `auth_credentials` (1)
- **Why it exists:** Segregates highly sensitive password hashes (`argon2id`) and 2FA secrets from the frequently queried `users` profile table.
- **Cascade Rules:** `ON DELETE CASCADE`. Deleting a user destroys their credentials immediately.
- **Security:** Limits exposure of hashes during general `SELECT * FROM users` queries.

## 3. Knowledge Graph & RAG (1:N)
**Relationship:** `documents` (1) ➔ `embeddings` (N)
- **Why it exists:** A single 500-page OEM Manual is chunked into hundreds of semantic text nodes for vector search.
- **Cascade Rules:** `ON DELETE CASCADE`. Deleting a document instantly removes its vectors to save expensive index space.
- **Performance:** `embeddings` is expected to reach 100M+ rows. It utilizes `HNSW` indexes for fast cosine distance matching (`vector_cosine_ops`).

## 4. Operational Telemetry & Maintenance (N:M Conceptual)
**Relationship:** `assets` (1) ➔ `maintenance_records` (N) 🡄 `users` (1)
- **Why it exists:** Tracks which technician (User) repaired which equipment (Asset).
- **Business Logic:** Forms the basis of the historical data fed into the FactoryOS AI context window.
- **Scaling:** Date-based partitioning is recommended for this table as it grows chronologically over years of plant operation.

## Validation Checklist Passed
- [x] Every table utilizes `UUID DEFAULT uuid_generate_v4()` for primary keys to prevent enumeration attacks and support distributed ID generation.
- [x] Zero circular dependencies.
- [x] 3NF Normalization achieved.
- [x] Multi-tenancy securely scoped.
