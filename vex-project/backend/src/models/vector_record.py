"""Vector Record Model — holds vector data with complete metadata provenance."""

from datetime import datetime
from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field


class VectorRecordModel(BaseModel):
    """Vector record with metadata filtering capability."""

    id: str
    tenant_id: str
    document_id: str
    chunk_id: str
    vector: List[float]
    content: str
    embedding_model: str
    embedding_version: str = "v1.0"
    content_hash: str
    plant_id: Optional[str] = None
    department_id: Optional[str] = None
    document_type: Optional[str] = None
    tags: List[str] = Field(default_factory=list)
    metadata: Dict[str, Any] = Field(default_factory=dict)
    created_at: datetime = Field(default_factory=datetime.utcnow)
