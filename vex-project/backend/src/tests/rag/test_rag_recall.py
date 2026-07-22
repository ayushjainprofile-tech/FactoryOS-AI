"""RAG Engine & Hybrid Search Recall Tests."""

import pytest
from src.rag.hybrid_search import HybridSearcher


@pytest.mark.rag
@pytest.mark.asyncio
async def test_rag_hybrid_search_fusion():
    searcher = HybridSearcher()
    results = await searcher.search("bearing vibration threshold", tenant_id="tenant_01")
    assert len(results) > 0
    assert "content" in results[0]
