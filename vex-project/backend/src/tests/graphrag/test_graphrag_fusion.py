"""GraphRAG & Knowledge Graph Traversal Tests."""

import pytest
from src.graphrag.graph_retriever import GraphRetriever


@pytest.mark.graphrag
@pytest.mark.asyncio
async def test_graphrag_traversal():
    retriever = GraphRetriever()
    nodes, edges = await retriever.retrieve_neighborhood("P-101", tenant_id="tenant_01")
    assert len(nodes) > 0
