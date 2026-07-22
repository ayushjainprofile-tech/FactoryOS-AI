"""Memory Schemas and Containers."""

from datetime import datetime
from typing import Any, Dict, Optional
from pydantic import BaseModel, Field


class MemoryEntryModel(BaseModel):
    """Unified memory record container."""

    id: str
    tenant_id: str
    memory_type: str  # conversation, equipment, document, knowledge, investigation, executive
    scope_id: str  # session_id, equipment_id, doc_id, case_id, user_id
    content: str
    confidence: float = 1.0
    version: int = 1
    metadata: Dict[str, Any] = Field(default_factory=dict)
    created_at: datetime = Field(default_factory=datetime.utcnow)
