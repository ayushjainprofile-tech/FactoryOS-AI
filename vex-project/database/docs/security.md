# Database Security Hardening

1. **Row-Level Security (RLS):** Ensure multi-tenant isolation by passing `organization_id` context into DB session variables.
2. **Password Hashing:** `argon2id` with memory parameter 64MB and 3 iterations.
3. **Connection Encryption:** Enforce SSL mode `require` or `verify-full` on database cluster.
4. **Least Privilege Principle:** Web app connects as `factoryos_app_user` without `SUPERUSER` or DDL schema mutation rights.
