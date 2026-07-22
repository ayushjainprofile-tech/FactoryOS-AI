# Database Table Relationships

## Cascade & Soft Delete Policies

| Primary Table | Foreign Table | FK Column | On Delete Action | Soft Delete Supported |
|---|---|---|---|---|
| `organizations` | `users` | `organization_id` | `CASCADE` | Yes (`deleted_at`) |
| `organizations` | `projects` | `organization_id` | `CASCADE` | Yes (`deleted_at`) |
| `users` | `auth_credentials` | `user_id` | `CASCADE` | No |
| `users` | `sessions` | `user_id` | `CASCADE` | No |
| `users` | `notifications` | `user_id` | `CASCADE` | No |
| `projects` | `embeddings` | `project_id` | `CASCADE` | No |
| `users` | `audit_logs` | `user_id` | `SET NULL` | No (Immutable) |
