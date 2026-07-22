"""Entity Mapper — maps raw payloads to validated GraphNodeModels."""

from typing import Any, Dict, Optional
from src.knowledge_graph.normalizer import EntityNormalizer
from src.models.graph_node import GraphNodeModel
from src.models.graph_provenance import GraphProvenanceModel


class EntityMapper:
    """Maps raw dict payloads to GraphNodeModel instances with normalized names."""

    def __init__(self) -> None:
        self.normalizer = EntityNormalizer()

    def map_to_node(
        self,
        node_id: str,
        name: str,
        entity_type: str,
        tenant_id: str,
        plant_id: Optional[str] = None,
        department_id: Optional[str] = None,
        properties: Optional[Dict[str, Any]] = None,
    ) -> GraphNodeModel:
        normalized_name = self.normalizer.normalize(name)
        prov = GraphProvenanceModel(tenant_id=tenant_id, extraction_method="api_mapper")

        return GraphNodeModel(
            id=node_id,
            tenant_id=tenant_id,
            name=normalized_name,
            entity_type=entity_type,
            plant_id=plant_id,
            department_id=department_id,
            properties=properties or {},
            provenance=prov,
        )
