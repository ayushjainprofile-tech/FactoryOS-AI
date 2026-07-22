"""Tests for Vector Indexer & Vector Store."""

import pytest
from src.models.document_chunk import DocumentChunkModel
from src.rag.vector_indexer import VectorIndexer
from src.rag.vector_store import MemoryVectorStore


@pytest.mark.asyncio
async def test_vector_indexing_and_search():
    store = MemoryVectorStore()
    indexer = VectorIndexer(store=store)

    chunks = [
        DocumentChunkModel(
            id="c1",
            document_id="doc_1",
            tenant_id="tenant_1",
            chunk_index=0,
            content="Turbine speed 3000 RPM",
            token_count=4,
        ),
        DocumentChunkModel(
            id="c2",
            document_id="doc_1",
            tenant_id="tenant_1",
            chunk_index=1,
            content="Boiler pressure 120 PSI",
            token_count=4,
        ),
    ]

    records = await indexer.index_chunks("tenant_1", "doc_1", chunks, plant_id="plant_A")
    assert len(records) == 2
    assert records[0].plant_id == "plant_A"

    # Search with matching tenant & plant filter
    matches = await store.query("tenant_1", records[0].vector, top_k=5, filters={"plant_id": "plant_A"})
    assert len(matches) == 2

    # Cross-tenant search returns empty
    tenant_b_matches = await store.query("tenant_B", records[0].vector)
    assert len(tenant_b_matches) == 0
