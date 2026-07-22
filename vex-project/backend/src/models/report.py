"""Report Model."""

from datetime import datetime
from typing import Any, Dict, Optional
from pydantic import BaseModel, Field


class ReportModel(BaseModel):
    """Generated analysis report record."""

    id: str
    tenant_id: str
    title: str
    report_type: str  # executive, RCA, maintenance_audit, compliance_summary
    status: str = "generated"  # queued, generating, generated, failed
    storage_path: Optional[str] = None
    parameters: Dict[str, Any] = Field(default_factory=dict)
    generated_by_user_id: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
