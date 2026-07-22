# Indexing Strategy

## 1. Vector Indexing (HNSW)
We use `HNSW` (Hierarchical Navigable Small World) for `embedding vector(1536)`:
- `m = 16`: Controls max connections per node.
- `ef_construction = 64`: Trade-off between build time and recall accuracy.
- Distance operator: `vector_cosine_ops` (Cosine Similarity).

## 2. GIN Indexes on JSONB
Used for flexible document metadata and tenant settings filtering without costly table scans:
- `idx_organizations_settings_gin`
- `idx_embeddings_metadata_gin`

## 3. Partial B-Tree Indexes
Excluded soft-deleted records to keep index tree shallow:
```sql
CREATE INDEX idx_users_org_id ON users(organization_id) WHERE deleted_at IS NULL;
```
