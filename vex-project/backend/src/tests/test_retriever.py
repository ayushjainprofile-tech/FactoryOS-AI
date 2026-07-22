"""Tests for Retriever & Filtering."""

import pytest
from src.rag.filters import RAGFilters
from src.rag.retriever import Retriever


@pytest.mark.asyncio
async def test_retriever_basic():
    retriever = Retriever()
    chunks = await retriever.retrieve("pump pressure", tenant_id="tenant_01", top_k=3)
    assert len(chunks) <= 3
    assert chunks[0].content


@pytest.mark.asyncio
async def test_retriever_scoped_filters():
    retriever = Retriever()
    filters = RAGFilters(tenant_id="t1", plant_id="plant_1")
    chunks = await retriever.retrieve("vibration threshold", tenant_id="t1", filters=filters)
    assert len(chunks) > 0
