"""Dashboard API Schemas."""

from typing import Dict
from pydantic import BaseModel, Field


class DashboardMetricsResponse(BaseModel):
    total_equipment: int
    active_alerts: int
    open_investigations: int
    compliance_score: float
    system_health: str
    metrics_summary: Dict[str, float] = Field(default_factory=dict)
