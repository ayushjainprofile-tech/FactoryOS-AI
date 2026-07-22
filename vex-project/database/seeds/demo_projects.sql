-- Seed: Demo Projects

INSERT INTO projects (id, organization_id, created_by, name, code, description, health_score)
VALUES
(
    '00000000-0000-0000-0000-000000000005',
    '00000000-0000-0000-0000-000000000001',
    '00000000-0000-0000-0000-000000000003',
    'Gujarat Complex B Digital Twin',
    'GUJ-COMPLEX-B',
    'Real-time industrial sensor telemetry & root-cause predictive maintenance.',
    96.40
)
ON CONFLICT (organization_id, code) DO NOTHING;
