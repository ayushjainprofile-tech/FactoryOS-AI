"""Attribution Tracker — maps response claims to source chunk evidence."""

from typing import Any, Dict, List
from pydantic import BaseModel
from src.rag.retriever import RetrievedChunk


class AttributionRecord(BaseModel):
    """Source attribution payload."""

    citation_id: str
    chunk_id: str
    document_id: str
    excerpt: str
    score: float
    metadata: Dict[str, Any]


class AttributionTracker:
    """Builds explicit attribution metadata for RAG responses."""

    def build_attributions(self, chunks: List[RetrievedChunk]) -> List[AttributionRecord]:
        attributions: List[AttributionRecord] = []
        for idx, chunk in enumerate(chunks, 1):
            attributions.append(
                AttributionRecord(
                    citation_id=f"cite_{idx}",
                    chunk_id=chunk.chunk_id,
                    document_id=chunk.document_id,
                    excerpt=chunk.content[:150],
                    score=chunk.score,
                    metadata=chunk.metadata,
                )
            )
        return attributions
