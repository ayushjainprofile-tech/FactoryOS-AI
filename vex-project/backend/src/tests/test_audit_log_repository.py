"""Tests for Audit Log Repository (Append-Only)."""

import pytest
from src.models.audit_log import AuditLogModel
from src.repositories.audit_log_repository import AuditLogRepository


@pytest.mark.asyncio
async def test_audit_log_append_only():
    repo = AuditLogRepository()
    log1 = AuditLogModel(id="al_1", tenant_id="t1", actor_id="u1", action="LOGIN", target_resource="auth")
    log2 = AuditLogModel(id="al_2", tenant_id="t1", actor_id="u1", action="UPLOAD_DOC", target_resource="documents")

    await repo.append(log1)
    await repo.append(log2)

    logs = await repo.list_by_tenant("t1")
    assert len(logs) == 2
    # Reverse chronological order
    assert logs[0].action == "UPLOAD_DOC"
    assert logs[1].action == "LOGIN"
