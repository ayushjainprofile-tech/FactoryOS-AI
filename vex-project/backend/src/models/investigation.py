"""Investigation Model."""

from datetime import datetime
from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field


class InvestigationModel(BaseModel):
    """Failure investigation case model."""

    id: str
    tenant_id: str
    title: str
    description: str
    status: str = "open"  # open, in_progress, resolved, closed
    equipment_id: Optional[str] = None
    plant_id: Optional[str] = None
    assigned_engineer_id: Optional[str] = None
    root_cause_summary: Optional[str] = None
    evidence_chunk_ids: List[str] = Field(default_factory=list)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
