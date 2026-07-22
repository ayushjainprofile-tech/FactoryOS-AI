"""Tests for Audit Logger."""

import json
import pytest
from src.logging.audit_logger import AuditLogger


def test_audit_logger():
    logger = AuditLogger()
    raw = logger.log_action(
        tenant_id="t1",
        actor_id="user_admin",
        action="UPDATE_RBAC_POLICY",
        target_resource="role_engineer",
    )

    data = json.loads(raw)
    assert data["event_type"] == "audit"
    assert data["payload"]["actor_id"] == "user_admin"
    assert data["payload"]["action"] == "UPDATE_RBAC_POLICY"
