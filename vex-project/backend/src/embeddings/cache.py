"""Embedding Cache — in-memory content hash embedding cache."""

import hashlib
from typing import Dict, List, Optional


class EmbeddingCache:
    """Caches generated vectors by content hash to prevent redundant LLM embedding calls."""

    def __init__(self) -> None:
        self._cache: Dict[str, List[float]] = {}

    def _hash(self, text: str, model_name: str) -> str:
        return hashlib.sha256(f"{model_name}:{text}".encode("utf-8")).hexdigest()

    def get(self, text: str, model_name: str) -> Optional[List[float]]:
        key = self._hash(text, model_name)
        return self._cache.get(key)

    def set(self, text: str, model_name: str, vector: List[float]) -> None:
        key = self._hash(text, model_name)
        self._cache[key] = vector
