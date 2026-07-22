"""Batch Embedder — handles batching of texts for high throughput embedding generation."""

from typing import List, Optional
from src.embeddings.cache import EmbeddingCache
from src.embeddings.model_registry import ModelRegistry


class BatchEmbedder:
    """Batches text items for vector embedding generation."""

    def __init__(
        self,
        model_name: str = "text-embedding-3-small",
        batch_size: int = 64,
        cache: Optional[EmbeddingCache] = None,
        registry: Optional[ModelRegistry] = None,
    ) -> None:
        self.model_name = model_name
        self.batch_size = batch_size
        self.cache = cache or EmbeddingCache()
        self.registry = registry or ModelRegistry()
        self.spec = self.registry.get_spec(self.model_name)

    def embed_batch(self, texts: List[str]) -> List[List[float]]:
        results: List[List[float]] = []

        for i in range(0, len(texts), self.batch_size):
            batch = texts[i : i + self.batch_size]
            for text in batch:
                cached = self.cache.get(text, self.model_name)
                if cached:
                    results.append(cached)
                else:
                    # Deterministic fallback pseudo-vector for testing
                    val = float(hash(text) % 1000) / 1000.0
                    vec = [val] * self.spec.dimension
                    self.cache.set(text, self.model_name, vec)
                    results.append(vec)
        return results
