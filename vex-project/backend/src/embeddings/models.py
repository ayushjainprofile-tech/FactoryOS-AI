"""Embedding Models & Schemas."""

from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, Field


class EmbeddingRequest(BaseModel):
    """Embedding request payload."""

    texts: List[str]
    model_name: Optional[str] = "text-embedding-3-small"


class EmbeddingResponse(BaseModel):
    """Embedding response payload."""

    embeddings: List[List[float]]
    model_name: str
    dimension: int
    created_at: datetime = Field(default_factory=datetime.utcnow)
