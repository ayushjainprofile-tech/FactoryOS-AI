"""Reports API Schemas."""

from typing import Optional
from pydantic import BaseModel, Field


class CreateReportRequest(BaseModel):
    title: str
    report_type: str  # "maintenance", "compliance", "investigation"
    equipment_id: Optional[str] = None


class ReportResponse(BaseModel):
    report_id: str
    title: str
    status: str  # "generating", "completed", "failed"
    download_url: Optional[str] = None
    created_at: str
