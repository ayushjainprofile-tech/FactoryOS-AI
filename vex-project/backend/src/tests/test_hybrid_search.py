"""Tests for Hybrid Search RRF Fusion."""

import pytest
from src.rag.hybrid_search import HybridSearchEngine
from src.rag.retriever import RetrievedChunk


def test_hybrid_rrf_fusion():
    engine = HybridSearchEngine()
    dense = [
        RetrievedChunk(chunk_id="c1", content="Pump P-101 manual", score=0.9),
        RetrievedChunk(chunk_id="c2", content="Compressor C-302 status", score=0.8),
    ]
    sparse = [
        RetrievedChunk(chunk_id="c2", content="Compressor C-302 status", score=0.95),
        RetrievedChunk(chunk_id="c3", content="Valve V-501 guide", score=0.7),
    ]

    fused = engine.fuse_results(dense, sparse, top_k=3)
    assert len(fused) == 3
    # c2 appeared in both dense & sparse, so it should rank highest in RRF
    assert fused[0].chunk_id == "c2"
