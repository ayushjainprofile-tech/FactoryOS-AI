"""Tests for Candidate Re-ranker."""

import pytest
from src.rag.reranker import Reranker
from src.rag.retriever import RetrievedChunk


def test_reranker_relevance_scoring():
    reranker = Reranker()
    chunks = [
        RetrievedChunk(chunk_id="c1", content="Unrelated document content", score=0.9),
        RetrievedChunk(chunk_id="c2", content="High vibration detected on bearing 2", score=0.7),
    ]

    res = reranker.rerank("vibration bearing", chunks)
    assert len(res) == 2
    # c2 contains terms 'vibration' and 'bearing', so its score should be boosted above c1
    assert res[0].chunk_id == "c2"
