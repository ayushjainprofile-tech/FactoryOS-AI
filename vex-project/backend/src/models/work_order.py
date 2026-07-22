"""Work Order Model."""

from datetime import datetime
from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field


class WorkOrderModel(BaseModel):
    """Maintenance work order model."""

    id: str
    tenant_id: str
    title: str
    description: str
    equipment_id: str
    plant_id: str
    status: str = "draft"  # draft, scheduled, in_progress, completed, cancelled
    priority: str = "medium"  # low, medium, high, emergency
    assigned_engineer_id: Optional[str] = None
    sop_document_id: Optional[str] = None
    scheduled_start: Optional[datetime] = None
    completed_at: Optional[datetime] = None
    checklist: List[Dict[str, Any]] = Field(default_factory=list)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
