"""Security Logger — logs auth successes/failures, policy violations, and suspicious events."""

from typing import Any, Dict, Optional
from src.logging.event_types import LogEventType
from src.logging.logger import StructuredLogger


class SecurityLogger:
    """Specialized logger for authentication events and security incidents."""

    def __init__(self) -> None:
        self.logger = StructuredLogger("security")

    def log_auth(
        self,
        tenant_id: str,
        actor_id: str,
        success: bool,
        message: str = "Auth event",
        metadata: Optional[Dict[str, Any]] = None,
    ) -> str:
        payload = {
            "tenant_id": tenant_id,
            "actor_id": actor_id,
            "success": success,
            "metadata": metadata or {},
        }
        severity = "INFO" if success else "WARNING"
        return self.logger._log(
            severity=severity,
            event_type=LogEventType.SECURITY_AUTH.value,
            message=message,
            payload=payload,
        )

    def log_policy_denial(
        self,
        tenant_id: str,
        actor_id: str,
        policy_id: str,
        target_resource: str,
    ) -> str:
        payload = {
            "tenant_id": tenant_id,
            "actor_id": actor_id,
            "policy_id": policy_id,
            "target_resource": target_resource,
        }
        return self.logger._log(
            severity="WARNING",
            event_type=LogEventType.SECURITY_POLICY.value,
            message="Policy access denied",
            payload=payload,
        )
