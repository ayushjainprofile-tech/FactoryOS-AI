"""Citation Engine — converts evidence into normalized, deduplicated citation objects."""

from typing import Any, Dict, List
from datetime import datetime
from pydantic import BaseModel, Field

from src.rag.retriever import RetrievedChunk


class Citation(BaseModel):
    """Normalized citation with provenance."""

    citation_id: str
    source_type: str
    source_id: str
    excerpt: str
    confidence: float
    timestamp: str = Field(default_factory=lambda: datetime.utcnow().isoformat())
    metadata: Dict[str, Any] = Field(default_factory=dict)


class CitationEngine:
    """Converts retrieved chunks into deduplicated, machine-readable citations."""

    def generate_citations(self, chunks: List[RetrievedChunk]) -> List[Citation]:
        """Produces deduplicated citation objects from retrieval results."""
        seen_ids: set = set()
        citations: List[Citation] = []

        for i, chunk in enumerate(chunks):
            dedup_key = f"{chunk.source_type}::{chunk.chunk_id}"
            if dedup_key in seen_ids:
                continue
            seen_ids.add(dedup_key)

            citations.append(
                Citation(
                    citation_id=f"cite_{i + 1}",
                    source_type=chunk.source_type,
                    source_id=chunk.document_id or chunk.chunk_id,
                    excerpt=chunk.content[:500],
                    confidence=chunk.score,
                    metadata=chunk.metadata,
                )
            )

        return citations

    def format_citations_for_prompt(self, citations: List[Citation]) -> str:
        """Formats citations into a prompt-friendly string."""
        if not citations:
            return "No supporting evidence available."
        lines = []
        for c in citations:
            lines.append(f"[{c.citation_id}] ({c.source_type}) {c.excerpt} (confidence: {c.confidence:.2f})")
        return "\n".join(lines)
