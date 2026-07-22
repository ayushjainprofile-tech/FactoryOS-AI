-- ==============================================================================
-- Schema: Specialized Indexes (HNSW, B-Tree, Partial Indexes)
-- ==============================================================================

-- Vector Search Index (HNSW for Cosine Distance Optimization)
CREATE INDEX IF NOT EXISTS idx_embeddings_hnsw 
ON embeddings 
USING hnsw (embedding vector_cosine_ops) 
WITH (m = 16, ef_construction = 64);

-- JSONB GIN Indexes for metadata queries
CREATE INDEX IF NOT EXISTS idx_organizations_settings_gin ON organizations USING gin (settings);
CREATE INDEX IF NOT EXISTS idx_users_metadata_gin ON users USING gin (metadata);
CREATE INDEX IF NOT EXISTS idx_projects_metadata_gin ON projects USING gin (metadata);
CREATE INDEX IF NOT EXISTS idx_embeddings_metadata_gin ON embeddings USING gin (metadata);

-- Trigger for auto updating updated_at timestamp across all tables
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';
