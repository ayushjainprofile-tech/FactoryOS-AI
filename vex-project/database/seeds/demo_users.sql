-- Seed: Demo Users

INSERT INTO users (id, organization_id, email, first_name, last_name, role, is_active, is_email_verified)
VALUES 
(
    '00000000-0000-0000-0000-000000000003',
    '00000000-0000-0000-0000-000000000001',
    'rahul.sharma@factoryos.ai',
    'Rahul',
    'Sharma',
    'PLANT_ENGINEER',
    true,
    true
),
(
    '00000000-0000-0000-0000-000000000004',
    '00000000-0000-0000-0000-000000000001',
    'operator@factoryos.ai',
    'Plant',
    'Operator',
    'OPERATOR',
    true,
    true
)
ON CONFLICT (email) DO NOTHING;
