# Entity-Relationship (ER) Diagram

```mermaid
erDiagram
    organizations ||--o{ users : "has_many"
    organizations ||--o{ projects : "owns"
    organizations ||--o{ api_keys : "issues"
    organizations ||--o{ audit_logs : "records"
    organizations ||--o{ embeddings : "stores"

    users ||--o1 auth_credentials : "authenticates"
    users ||--o{ sessions : "creates"
    users ||--o{ api_keys : "owns"
    users ||--o{ notifications : "receives"
    users ||--o{ projects : "creates"
    users ||--o{ audit_logs : "triggers"

    projects ||--o{ embeddings : "references"
```

## Entity Summary
- **Organizations:** Core multi-tenant boundary.
- **Users:** System accounts with RBAC roles (`SYSTEM_ADMIN`, `PLANT_ENGINEER`, etc.).
- **Auth Credentials:** Salted password hashes using `argon2id` and 2FA credentials.
- **Projects:** Industrial assets, plants, or project workspaces.
- **Embeddings:** High-dimensional vector chunks (`pgvector`) linked to projects and organizations.
