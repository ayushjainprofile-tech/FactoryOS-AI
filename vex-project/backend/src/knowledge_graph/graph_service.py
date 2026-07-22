"""Knowledge Graph Core Domain Service."""

from typing import Any, Dict, List, Optional
from src.knowledge_graph.entity_mapper import EntityMapper
from src.knowledge_graph.relation_mapper import RelationMapper
from src.models.graph_edge import GraphEdgeModel
from src.models.graph_node import GraphNodeModel
from src.repositories.graph_repository import GraphRepository


class GraphService:
    """Core domain service for creating, updating, querying, and linking graph nodes and edges."""

    def __init__(self, repo: Optional[GraphRepository] = None) -> None:
        self.repo = repo or GraphRepository()
        self.entity_mapper = EntityMapper()
        self.relation_mapper = RelationMapper()

    async def create_node(
        self,
        node_id: str,
        name: str,
        entity_type: str,
        tenant_id: str,
        plant_id: Optional[str] = None,
        department_id: Optional[str] = None,
        properties: Optional[Dict[str, Any]] = None,
    ) -> GraphNodeModel:
        node = self.entity_mapper.map_to_node(
            node_id=node_id,
            name=name,
            entity_type=entity_type,
            tenant_id=tenant_id,
            plant_id=plant_id,
            department_id=department_id,
            properties=properties,
        )
        return await self.repo.upsert_node(node)

    async def create_edge(
        self,
        edge_id: str,
        source_id: str,
        target_id: str,
        relation_type: str,
        tenant_id: str,
        confidence: float = 1.0,
        properties: Optional[Dict[str, Any]] = None,
    ) -> GraphEdgeModel:
        edge = self.relation_mapper.map_to_edge(
            edge_id=edge_id,
            source_id=source_id,
            target_id=target_id,
            relation_type=relation_type,
            tenant_id=tenant_id,
            confidence=confidence,
            properties=properties,
        )
        return await self.repo.upsert_edge(edge)

    async def get_subgraph(self, tenant_id: str, node_id: str, depth: int = 2) -> Dict[str, Any]:
        return await self.repo.get_neighborhood(tenant_id, node_id, depth=depth)
