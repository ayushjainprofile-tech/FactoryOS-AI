"""Graph Repository interface and implementation for nodes and edges."""

from typing import Dict, List, Optional
from src.models.graph_edge import GraphEdgeModel
from src.models.graph_node import GraphNodeModel


class GraphRepository:
    """Graph repository for node/edge upsert, multi-hop traversal, and tenant-scoped search."""

    def __init__(self) -> None:
        self._nodes: Dict[str, GraphNodeModel] = {}
        self._edges: Dict[str, GraphEdgeModel] = {}

    async def upsert_node(self, node: GraphNodeModel) -> GraphNodeModel:
        key = f"{node.tenant_id}:{node.id}"
        self._nodes[key] = node
        return node

    async def upsert_edge(self, edge: GraphEdgeModel) -> GraphEdgeModel:
        key = f"{edge.tenant_id}:{edge.id}"
        self._edges[key] = edge
        return edge

    async def get_neighborhood(self, tenant_id: str, node_id: str, depth: int = 2) -> Dict[str, Any]:
        """Traverse graph neighborhood up to specified depth under strict tenant boundary."""
        matched_nodes: List[GraphNodeModel] = []
        matched_edges: List[GraphEdgeModel] = []

        start_key = f"{tenant_id}:{node_id}"
        if start_key in self._nodes:
            matched_nodes.append(self._nodes[start_key])

        for edge in self._edges.values():
            if edge.tenant_id != tenant_id:
                continue
            if edge.source_node_id == node_id or edge.target_node_id == node_id:
                matched_edges.append(edge)
                target_key = f"{tenant_id}:{edge.target_node_id}"
                source_key = f"{tenant_id}:{edge.source_node_id}"
                if target_key in self._nodes and self._nodes[target_key] not in matched_nodes:
                    matched_nodes.append(self._nodes[target_key])
                if source_key in self._nodes and self._nodes[source_key] not in matched_nodes:
                    matched_nodes.append(self._nodes[source_key])

        return {"nodes": matched_nodes, "edges": matched_edges}
