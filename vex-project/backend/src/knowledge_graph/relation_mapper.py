"""Relation Mapper — maps raw payloads to validated GraphEdgeModels."""

from typing import Any, Dict, Optional
from src.models.graph_edge import GraphEdgeModel
from src.models.graph_provenance import GraphProvenanceModel


class RelationMapper:
    """Maps raw payloads to GraphEdgeModel instances."""

    def map_to_edge(
        self,
        edge_id: str,
        source_id: str,
        target_id: str,
        relation_type: str,
        tenant_id: str,
        confidence: float = 1.0,
        properties: Optional[Dict[str, Any]] = None,
    ) -> GraphEdgeModel:
        prov = GraphProvenanceModel(tenant_id=tenant_id, confidence=confidence, extraction_method="api_mapper")

        return GraphEdgeModel(
            id=edge_id,
            tenant_id=tenant_id,
            source_node_id=source_id,
            target_node_id=target_id,
            relation_type=relation_type.upper(),
            confidence=confidence,
            properties=properties or {},
            provenance=prov,
        )
