"""Tests for Graph + Vector RAG Fusion."""

import pytest
from src.graphrag.graph_fuser import GraphFuser
from src.graphrag.graph_retriever import GraphSubGraphResult
from src.rag.retriever import RetrievedChunk


def test_graph_vector_fusion():
    fuser = GraphFuser()
    subgraph = GraphSubGraphResult(
        nodes=[{"name": "P-101", "entity_type": "equipment"}],
        edges=[{"source_node_id": "P-101", "relation_type": "EXHIBITS_FAILURE", "target_node_id": "Vibration"}],
        seed_entities=["P-101"],
        score=0.90,
    )
    chunks = [
        RetrievedChunk(chunk_id="c1", content="P-101 vibration limit 2.5 mm/s", score=0.88),
    ]

    bundle = fuser.fuse(subgraph, chunks)
    assert bundle["total_nodes"] == 1
    assert bundle["total_chunks"] == 1
    assert len(bundle["graph_facts"]) == 2
    assert len(bundle["text_evidence"]) == 1
