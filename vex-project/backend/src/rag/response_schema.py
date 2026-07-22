"""RAG Response Schema."""

from typing import Any, Dict, List
from pydantic import BaseModel, Field
from src.rag.attribution import AttributionRecord


class RAGResponse(BaseModel):
    """End-to-end RAG response contract."""

    answer: str
    attributions: List[AttributionRecord] = Field(default_factory=list)
    confidence: float = 1.0
    model_name: str = "gpt-4o"
    execution_trace: List[str] = Field(default_factory=list)
    metadata: Dict[str, Any] = Field(default_factory=dict)
