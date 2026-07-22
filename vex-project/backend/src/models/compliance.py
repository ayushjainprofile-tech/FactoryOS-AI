"""Compliance Check Model."""

from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field


class ComplianceModel(BaseModel):
    """Safety and environmental compliance model."""

    id: str
    tenant_id: str
    standard_name: str  # e.g., OSHA 1910, ISO 55001, EPA Subpart W
    check_item: str
    status: str = "compliant"  # compliant, non_compliant, pending_audit
    plant_id: Optional[str] = None
    equipment_id: Optional[str] = None
    due_date: Optional[datetime] = None
    last_audited_at: datetime = Field(default_factory=datetime.utcnow)
