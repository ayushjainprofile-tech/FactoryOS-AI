"""Investigations API Schemas."""

from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field


class CreateInvestigationRequest(BaseModel):
    """Investigation request payload."""

    equipment_id: str
    title: str
    description: str


class InvestigationResponse(BaseModel):
    """Investigation response contract."""

    investigation_id: str
    equipment_id: str
    title: str
    status: str  # "open", "analyzing", "resolved"
    findings: List[str] = Field(default_factory=list)
    created_at: str
