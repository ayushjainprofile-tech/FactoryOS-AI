"""Tests for Multi-hop Graph Traversal & Repository Search."""

import pytest
from src.models.graph_edge import GraphEdgeModel
from src.models.graph_node import GraphNodeModel
from src.repositories.graph_repository import GraphRepository


@pytest.mark.asyncio
async def test_graph_neighborhood_search():
    repo = GraphRepository()
    n1 = GraphNodeModel(id="P-101", tenant_id="t1", name="P-101", entity_type="equipment")
    n2 = GraphNodeModel(id="Vibration", tenant_id="t1", name="Vibration", entity_type="failure")
    edge = GraphEdgeModel(id="e1", tenant_id="t1", source_node_id="P-101", target_node_id="Vibration", relation_type="EXHIBITS_FAILURE")

    await repo.upsert_node(n1)
    await repo.upsert_node(n2)
    await repo.upsert_edge(edge)

    nh = await repo.get_neighborhood("t1", "P-101", depth=2)
    assert len(nh["nodes"]) == 2
    assert len(nh["edges"]) == 1

    # Cross-tenant check
    nh_t2 = await repo.get_neighborhood("t2", "P-101", depth=2)
    assert len(nh_t2["nodes"]) == 0
