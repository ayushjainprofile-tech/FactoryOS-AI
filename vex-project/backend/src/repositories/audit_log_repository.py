"""Audit Log Repository (Append-Only)."""

from typing import Dict, List, Optional
from src.models.audit_log import AuditLogModel


class AuditLogRepository:
    """Append-only repository for security and operational audit trail logs."""

    def __init__(self) -> None:
        self._logs: List[AuditLogModel] = []

    async def append(self, log: AuditLogModel) -> AuditLogModel:
        """Appends an immutable audit log record."""
        self._logs.append(log)
        return log

    async def list_by_tenant(
        self, tenant_id: str, actor_id: Optional[str] = None, limit: int = 50
    ) -> List[AuditLogModel]:
        results = []
        for log in reversed(self._logs):
            if log.tenant_id != tenant_id:
                continue
            if actor_id and log.actor_id != actor_id:
                continue
            results.append(log)
            if len(results) >= limit:
                break
        return results
