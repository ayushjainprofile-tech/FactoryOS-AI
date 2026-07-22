"""Alerts API Schemas."""

from typing import List
from pydantic import BaseModel


class AlertResponse(BaseModel):
    id: str
    equipment_id: str
    severity: str
    message: str
    status: str
    created_at: str


class AlertListResponse(BaseModel):
    items: List[AlertResponse]
    total: int
