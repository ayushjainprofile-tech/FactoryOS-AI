"""Context Builder — compiles retrieved chunks into bounded prompt context."""

from typing import List
from src.rag.retriever import RetrievedChunk


class ContextBuilder:
    """Assembles reranked chunks into bounded context string with provenance citations."""

    def __init__(self, max_context_chars: int = 4000) -> None:
        self.max_context_chars = max_context_chars

    def build_context(self, chunks: List[RetrievedChunk]) -> str:
        context_parts: List[str] = []
        current_len = 0

        for idx, chunk in enumerate(chunks, 1):
            source_id = chunk.metadata.get("source_id", chunk.document_id)
            snippet = f"[[Source {idx}: {source_id}]]\n{chunk.content}"
            if current_len + len(snippet) > self.max_context_chars:
                break
            context_parts.append(snippet)
            current_len += len(snippet)

        return "\n\n".join(context_parts)
