"""Tests for complete GraphRAG Pipeline Execution."""

import pytest
from src.graphrag.graph_rag_orchestrator import GraphRAGOrchestrator


@pytest.mark.asyncio
async def test_full_graphrag_pipeline():
    orchestrator = GraphRAGOrchestrator()
    res = await orchestrator.execute_query(
        query="What failure mode affects P-101?",
        tenant_id="tenant_01",
    )

    assert res["answer"]
    assert "fused_evidence" in res
    assert len(res["trace"]) == 5
    assert res["tenant_id"] == "tenant_01"
