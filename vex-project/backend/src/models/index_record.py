"""Index Record Model — tracks index version and rebuild state."""

from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field


class IndexRecordModel(BaseModel):
    """Index rebuild and status tracking record."""

    index_name: str
    tenant_id: str
    version: int = 1
    status: str = "active"  # building, active, deprecated
    vector_count: int = 0
    embedding_model: str = "text-embedding-3-small"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
