"""Query Rewriter — reformulates user queries for improved retrieval precision."""

from typing import List, Optional


class QueryRewriter:
    """Reformulates conversationally ambiguous or short queries into domain-enriched search queries."""

    def rewrite(self, query: str, conversation_history: Optional[List[str]] = None) -> str:
        """Expands query with conversation context and domain term normalization."""
        cleaned = query.strip()
        if not conversation_history or len(conversation_history) == 0:
            return cleaned

        # Simple contextual expansion heuristic
        recent_context = " ".join(conversation_history[-2:])
        if "it" in cleaned.lower() or "that" in cleaned.lower():
            return f"{cleaned} ({recent_context})"

        return cleaned
