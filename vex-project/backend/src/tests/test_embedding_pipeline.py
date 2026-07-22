"""Tests for Embedding Pipeline (Model Registry, Batch Embedder, Cache)."""

import pytest
from src.embeddings.batch_embedder import BatchEmbedder
from src.embeddings.cache import EmbeddingCache
from src.embeddings.model_registry import ModelRegistry


def test_model_registry():
    reg = ModelRegistry()
    spec = reg.get_spec("text-embedding-3-small")
    assert spec.dimension == 1536
    assert spec.version == "v1.0"


def test_embedding_cache():
    cache = EmbeddingCache()
    vec = [0.1, 0.2, 0.3]
    cache.set("sample chunk", "model_a", vec)
    assert cache.get("sample chunk", "model_a") == vec
    assert cache.get("different chunk", "model_a") is None


def test_batch_embedder():
    embedder = BatchEmbedder(batch_size=2)
    texts = ["chunk 1", "chunk 2", "chunk 3"]
    vectors = embedder.embed_batch(texts)
    assert len(vectors) == 3
    assert len(vectors[0]) == 1536
