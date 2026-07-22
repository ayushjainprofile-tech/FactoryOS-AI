"""Dashboard Configuration Schema."""

from typing import List
from pydantic import BaseModel, Field


class PanelWidget(BaseModel):
    title: str
    metric_name: str
    widget_type: str  # line_chart, bar_chart, gauge, stat
    width: int = 6


class DashboardSchema(BaseModel):
    """Schema specifying visual dashboard monitoring widgets."""

    dashboard_name: str
    panels: List[PanelWidget] = Field(default_factory=list)
