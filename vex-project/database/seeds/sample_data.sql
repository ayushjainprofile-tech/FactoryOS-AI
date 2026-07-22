-- Seed: Sample RAG Vector Chunks & Audit Logs

INSERT INTO audit_logs (organization_id, user_id, action, resource_type, resource_id, payload)
VALUES (
    '00000000-0000-0000-0000-000000000001',
    '00000000-0000-0000-0000-000000000003',
    'AI_INVESTIGATION_COMPLETED',
    'ASSET',
    'Pump-21',
    '{"confidence": 0.96, "root_cause": "Bearing lubrication degradation"}'::jsonb
);

INSERT INTO notifications (user_id, title, message, type)
VALUES (
    '00000000-0000-0000-0000-000000000003',
    'Pump-21 Telemetry Alert Resolved',
    'Root cause investigation successfully logged by FactoryOS AI Engine.',
    'SUCCESS'
);
