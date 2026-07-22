"""Document Chunk Data Model."""

from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field


class DocumentChunkModel(BaseModel):
    """Document chunk model with provenance and optional embedding vector."""

    id: str
    document_id: str
    tenant_id: str
    chunk_index: int
    content: str
    token_count: int
    section_title: Optional[str] = None
    page_number: Optional[int] = None
    start_char_offset: Optional[int] = None
    end_char_offset: Optional[int] = None
    embedding: Optional[List[float]] = None
    embedding_model: Optional[str] = None
    metadata: Dict[str, Any] = Field(default_factory=dict)
