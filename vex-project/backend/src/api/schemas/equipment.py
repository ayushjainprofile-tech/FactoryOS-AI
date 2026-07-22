"""Equipment & Alert API Schemas."""

from typing import List, Optional
from pydantic import BaseModel, Field


class EquipmentResponse(BaseModel):
    id: str
    tenant_id: str
    plant_id: str
    name: str
    category: str
    status: str  # "operational", "warning", "critical", "maintenance"
    health_score: float


class EquipmentListResponse(BaseModel):
    items: List[EquipmentResponse]
    total: int
    page: int
    page_size: int


class AlertResponse(BaseModel):
    id: str
    equipment_id: str
    severity: str  # "low", "medium", "high", "critical"
    message: str
    status: str  # "active", "acknowledged", "resolved"
    created_at: str


class AlertListResponse(BaseModel):
    items: List[AlertResponse]
    total: int
