"""Alert Model."""

from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field


class AlertModel(BaseModel):
    """Telemetry and anomaly alert model."""

    id: str
    tenant_id: str
    title: str
    severity: str  # critical, high, warning, info
    source: str
    equipment_id: Optional[str] = None
    plant_id: Optional[str] = None
    department_id: Optional[str] = None
    status: str = "active"  # active, acknowledged, resolved, dismissed
    assigned_to_user_id: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    resolved_at: Optional[datetime] = None
