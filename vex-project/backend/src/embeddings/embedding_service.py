"""Embedding Service for vector generation and caching."""

from typing import List


class EmbeddingService:
    """Embedding generation service with pluggable backend and version metadata."""

    def __init__(self, model_name: str = "text-embedding-3-small", dimension: int = 1536) -> None:
        self.model_name = model_name
        self.dimension = dimension
        self._cache = {}

    def generate_embedding(self, text: str) -> List[float]:
        """Generate vector embedding for input text with caching."""
        if text in self._cache:
            return self._cache[text]

        # Deterministic pseudo-embedding for testing / fallback
        val = float(hash(text) % 1000) / 1000.0
        vec = [val] * self.dimension
        self._cache[text] = vec
        return vec

    def embed_chunks(self, chunks: List[str]) -> List[List[float]]:
        return [self.generate_embedding(c) for c in chunks]
