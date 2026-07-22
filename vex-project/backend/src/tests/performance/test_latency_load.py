"""Performance & Load Latency Tests."""

import time
import pytest
from src.embeddings.batch_embedder import BatchEmbedder


@pytest.mark.performance
def test_embedding_batch_performance():
    embedder = BatchEmbedder()
    texts = [f"Text chunk number {i}" for i in range(100)]

    start = time.time()
    vectors = embedder.embed_batch(texts)
    elapsed_ms = (time.time() - start) * 1000.0

    assert len(vectors) == 100
    assert elapsed_ms < 5000.0  # Latency threshold: 100 embeddings under 5 seconds
