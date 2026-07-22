"""Compliance API Schemas."""

from typing import List
from pydantic import BaseModel, Field


class ComplianceItem(BaseModel):
    framework: str  # "ISO 55001", "OSHA PSM"
    status: str  # "compliant", "warning", "non_compliant"
    last_audited: str


class ComplianceStatusResponse(BaseModel):
    tenant_id: str
    overall_compliance_score: float
    frameworks: List[ComplianceItem] = Field(default_factory=list)
