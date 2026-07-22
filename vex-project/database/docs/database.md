# Database Setup & Operations Guide

## 1. Quickstart & Local Setup

Ensure PostgreSQL 16+ is running with `pgvector` extension installed.

```bash
# Connect to PostgreSQL
psql -U postgres -d factoryos_db

# Run migrations in sequence
psql -U postgres -d factoryos_db -f database/migrations/001_initial_schema.sql
psql -U postgres -d factoryos_db -f database/migrations/002_auth.sql
psql -U postgres -d factoryos_db -f database/migrations/003_indexes.sql
psql -U postgres -d factoryos_db -f database/migrations/004_pgvector.sql

# Seed local development data
psql -U postgres -d factoryos_db -f database/seeds/admin.sql
psql -U postgres -d factoryos_db -f database/seeds/demo_users.sql
psql -U postgres -d factoryos_db -f database/seeds/demo_projects.sql
psql -U postgres -d factoryos_db -f database/seeds/sample_data.sql
```
