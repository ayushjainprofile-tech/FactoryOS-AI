-- Seed: Super Admin Account

INSERT INTO organizations (id, name, slug, plan_tier) 
VALUES ('00000000-0000-0000-0000-000000000001', 'FactoryOS Enterprise System', 'factoryos-admin', 'ENTERPRISE')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO users (id, organization_id, email, first_name, last_name, role, is_active, is_email_verified)
VALUES (
    '00000000-0000-0000-0000-000000000002',
    '00000000-0000-0000-0000-000000000001',
    'admin@factoryos.ai',
    'Super',
    'Admin',
    'SYSTEM_ADMIN',
    true,
    true
)
ON CONFLICT (email) DO NOTHING;

-- Argon2id hashed password for 'AdminPass123!'
INSERT INTO auth_credentials (user_id, password_hash, password_algo)
VALUES (
    '00000000-0000-0000-0000-000000000002',
    '$argon2id$v=19$m=65536,t=3,p=4$c2FsdHNhbHQ$hashedpasswordplaceholder',
    'argon2id'
)
ON CONFLICT (user_id) DO NOTHING;
