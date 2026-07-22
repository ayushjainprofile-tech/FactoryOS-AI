"""Equipment Domain Model."""

from datetime import datetime
from typing import Any, Dict, Optional
from pydantic import BaseModel, Field


class EquipmentModel(BaseModel):
    """Equipment asset model."""

    id: str
    tenant_id: str
    name: str
    asset_tag: str
    equipment_type: str  # pump, compressor, turbine, valve, heat_exchanger
    plant_id: str
    department_id: Optional[str] = None
    parent_equipment_id: Optional[str] = None
    status: str = "operational"  # operational, degraded, failure, maintenance
    properties: Dict[str, Any] = Field(default_factory=dict)
    is_deleted: bool = False
    version: int = 1
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
