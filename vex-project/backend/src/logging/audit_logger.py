"""Audit Logger — logs immutable audit events."""

from typing import Any, Dict, Optional
from src.logging.event_types import LogEventType
from src.logging.logger import StructuredLogger


class AuditLogger:
    """Specialized logger for immutable business and security audit records."""

    def __init__(self) -> None:
        self.logger = StructuredLogger("audit")

    def log_action(
        self,
        tenant_id: str,
        actor_id: str,
        action: str,
        target_resource: str,
        outcome: str = "success",
        metadata: Optional[Dict[str, Any]] = None,
    ) -> str:
        payload = {
            "tenant_id": tenant_id,
            "actor_id": actor_id,
            "action": action,
            "target_resource": target_resource,
            "outcome": outcome,
            "metadata": metadata or {},
        }
        return self.logger.info(
            message=f"Audit Action: {action} by {actor_id}",
            event_type=LogEventType.AUDIT.value,
            payload=payload,
        )
