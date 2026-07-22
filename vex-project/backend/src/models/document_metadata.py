"""Document Metadata Data Model."""

from datetime import datetime
from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field


class DocumentMetadataModel(BaseModel):
    """Document metadata model supporting extracted and user-overridden tags/fields."""

    document_id: str
    tenant_id: str
    title: Optional[str] = None
    author: Optional[str] = None
    document_type: Optional[str] = None
    plant_id: Optional[str] = None
    department_id: Optional[str] = None
    tags: List[str] = Field(default_factory=list)
    confidence_score: float = 1.0
    created_at: Optional[datetime] = None
    modified_at: Optional[datetime] = None
    extracted_fields: Dict[str, Any] = Field(default_factory=dict)
    user_overrides: Dict[str, Any] = Field(default_factory=dict)
    version: int = 1
