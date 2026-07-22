"""Embedding Reference Model."""

from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, Field


class EmbeddingModel(BaseModel):
    """Embedding model metadata record."""

    id: str
    tenant_id: str
    chunk_id: str
    embedding_model: str
    dimension: int
    vector: Optional[List[float]] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
