"""Tests for GraphRepository persistence & tenant boundary enforcement."""

import pytest
from src.models.graph_edge import GraphEdgeModel
from src.models.graph_node import GraphNodeModel
from src.repositories.graph_repository import GraphRepository


@pytest.mark.asyncio
async def test_graph_repository_upsert_and_isolation():
    repo = GraphRepository()
    node_a = GraphNodeModel(id="n_a", tenant_id="tenant_A", name="Node A", entity_type="equipment")
    node_b = GraphNodeModel(id="n_b", tenant_id="tenant_B", name="Node B", entity_type="equipment")

    await repo.upsert_node(node_a)
    await repo.upsert_node(node_b)

    # Search for tenant A node
    res_a = await repo.get_neighborhood("tenant_A", "n_a")
    assert len(res_a["nodes"]) == 1
    assert res_a["nodes"][0].id == "n_a"

    # Search for tenant B node under tenant A scope returns empty
    res_cross = await repo.get_neighborhood("tenant_A", "n_b")
    assert len(res_cross["nodes"]) == 0
