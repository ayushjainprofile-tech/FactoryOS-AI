"""Re-ranker — precision candidate re-scoring."""

from typing import List
from src.rag.retriever import RetrievedChunk


class Reranker:
    """Re-scores retrieved candidate chunks using query-passage cross-relevance scoring."""

    def rerank(self, query: str, chunks: List[RetrievedChunk], top_k: int = 5) -> List[RetrievedChunk]:
        if not chunks:
            return []

        query_terms = set(query.lower().split())

        for chunk in chunks:
            content_lower = chunk.content.lower()
            term_matches = sum(1 for term in query_terms if term in content_lower)
            relevance_boost = float(term_matches) / max(len(query_terms), 1)
            chunk.score = round(0.5 * chunk.score + 0.5 * relevance_boost, 4)

        # Sort by updated score descending
        resorted = sorted(chunks, key=lambda c: c.score, reverse=True)
        return resorted[:top_k]
