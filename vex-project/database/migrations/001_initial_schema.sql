-- Migration 001: Initial Base Schema & Extensions
-- Up Migration

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "vector";

\i database/schema/organizations.sql
\i database/schema/users.sql
\i database/schema/projects.sql
