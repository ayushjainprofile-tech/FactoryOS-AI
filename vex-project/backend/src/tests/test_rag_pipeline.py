"""Tests for complete RAG Pipeline Execution."""

import pytest
from src.rag.filters import RAGFilters
from src.rag.llm_chain import RAGPipeline


@pytest.mark.asyncio
async def test_full_rag_pipeline():
    pipeline = RAGPipeline()
    filters = RAGFilters(tenant_id="tenant_01", plant_id="plant_A")

    response = await pipeline.execute(
        query="What is the operating pressure limit?",
        tenant_id="tenant_01",
        filters=filters,
    )

    assert response.answer
    assert len(response.attributions) > 0
    assert response.confidence > 0.8
    assert len(response.execution_trace) == 7
