# Naming Conventions

- **Tables:** `snake_case`, plural forms (`organizations`, `users`, `audit_logs`).
- **Columns:** `snake_case`, singular forms (`user_id`, `is_active`, `created_at`).
- **Primary Keys:** Always named `id` with type `UUID DEFAULT uuid_generate_v4()`.
- **Foreign Keys:** Named `<singular_target_table>_id` (e.g. `organization_id`).
- **Indexes:** Named `idx_<table_name>_<column_name_or_purpose>` (e.g. `idx_users_email`).
- **Timestamps:** Always UTC `TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP`.
