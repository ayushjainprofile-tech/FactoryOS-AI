"""Audit Log Model (Append-Only)."""

from datetime import datetime
from typing import Any, Dict, Optional
from pydantic import BaseModel, Field


class AuditLogModel(BaseModel):
    """Immutable audit trail record."""

    id: str
    tenant_id: str
    actor_id: str
    action: str  # LOGIN, UPLOAD_DOCUMENT, DELETE_EQUIPMENT, OVERRIDE_METADATA
    target_resource: str
    outcome: str = "success"  # success, failure, unauthorized
    ip_address: Optional[str] = None
    payload: Dict[str, Any] = Field(default_factory=dict)
    timestamp: datetime = Field(default_factory=datetime.utcnow)
