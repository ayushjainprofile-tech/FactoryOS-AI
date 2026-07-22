"""Graph Provenance Data Model — source document & chunk lineage."""

from datetime import datetime
from typing import Any, Dict, Optional
from pydantic import BaseModel, Field


class GraphProvenanceModel(BaseModel):
    """Lineage model attaching graph artifacts to original sources."""

    tenant_id: str
    document_id: Optional[str] = None
    chunk_id: Optional[str] = None
    page_number: Optional[int] = None
    extraction_method: str = "automated_ner"  # automated_ner, manual, LLM
    confidence: float = 1.0
    created_at: datetime = Field(default_factory=datetime.utcnow)
    metadata: Dict[str, Any] = Field(default_factory=dict)
