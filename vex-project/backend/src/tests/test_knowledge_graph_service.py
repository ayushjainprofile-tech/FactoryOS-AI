"""Tests for KnowledgeGraphService domain logic and entity normalization."""

import pytest
from src.services.knowledge_graph_service import KnowledgeGraphService


@pytest.mark.asyncio
async def test_knowledge_graph_service_add_node_and_edge():
    service = KnowledgeGraphService()

    # Test node creation with alias normalization ("PUMP-101" -> "P-101")
    node = await service.add_entity(
        node_id="n1",
        name="PUMP-101",
        entity_type="equipment",
        tenant_id="tenant_01",
        plant_id="plant_A",
    )
    assert node["name"] == "P-101"
    assert node["entity_type"] == "equipment"

    # Test edge creation
    edge = await service.add_relation(
        edge_id="e1",
        source_id="n1",
        target_id="n2",
        relation_type="LOCATED_IN",
        tenant_id="tenant_01",
    )
    assert edge["relation_type"] == "LOCATED_IN"


@pytest.mark.asyncio
async def test_knowledge_graph_service_subgraph_query():
    service = KnowledgeGraphService()
    await service.add_entity("n1", "P-101", "equipment", "tenant_01")
    await service.add_entity("n2", "Plant Alpha", "location", "tenant_01")
    await service.add_relation("e1", "n1", "n2", "LOCATED_IN", "tenant_01")

    subgraph = await service.query_subgraph("tenant_01", "n1", depth=2)
    assert len(subgraph["nodes"]) == 2
    assert len(subgraph["edges"]) == 1
