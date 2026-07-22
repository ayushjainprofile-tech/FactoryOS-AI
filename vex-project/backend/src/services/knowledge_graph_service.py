"""Application-level Knowledge Graph Service adapter."""

from typing import Any, Dict, Optional
from src.knowledge_graph.graph_service import GraphService


class KnowledgeGraphService:
    """Service wrapping core Knowledge Graph domain service."""

    def __init__(self, service: Optional[GraphService] = None) -> None:
        self.service = service or GraphService()

    async def add_entity(
        self,
        node_id: str,
        name: str,
        entity_type: str,
        tenant_id: str,
        plant_id: Optional[str] = None,
        department_id: Optional[str] = None,
        properties: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        node = await self.service.create_node(
            node_id=node_id,
            name=name,
            entity_type=entity_type,
            tenant_id=tenant_id,
            plant_id=plant_id,
            department_id=department_id,
            properties=properties,
        )
        return node.model_dump()

    async def add_relation(
        self,
        edge_id: str,
        source_id: str,
        target_id: str,
        relation_type: str,
        tenant_id: str,
        confidence: float = 1.0,
        properties: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        edge = await self.service.create_edge(
            edge_id=edge_id,
            source_id=source_id,
            target_id=target_id,
            relation_type=relation_type,
            tenant_id=tenant_id,
            confidence=confidence,
            properties=properties,
        )
        return edge.model_dump()

    async def query_subgraph(self, tenant_id: str, node_id: str, depth: int = 2) -> Dict[str, Any]:
        return await self.service.get_subgraph(tenant_id, node_id, depth)
