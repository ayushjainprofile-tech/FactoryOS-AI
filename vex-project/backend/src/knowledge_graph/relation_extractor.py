"""Relation Extractor — detects semantic relationships between entities."""

import uuid
from typing import List, Optional
from src.knowledge_graph.schema import RelationType
from src.models.graph_edge import GraphEdgeModel
from src.models.graph_node import GraphNodeModel
from src.models.graph_provenance import GraphProvenanceModel


class RelationExtractor:
    """Extracts directed relations between extracted nodes based on co-occurrence and rules."""

    def extract_relations(
        self,
        nodes: List[GraphNodeModel],
        text: str,
        tenant_id: str,
        document_id: Optional[str] = None,
        chunk_id: Optional[str] = None,
    ) -> List[GraphEdgeModel]:
        edges: List[GraphEdgeModel] = []
        if len(nodes) < 2:
            return edges

        prov = GraphProvenanceModel(tenant_id=tenant_id, document_id=document_id, chunk_id=chunk_id)

        # Link equipment nodes to failure nodes if present in same chunk
        eq_nodes = [n for n in nodes if n.entity_type == "equipment"]
        fail_nodes = [n for n in nodes if n.entity_type == "failure"]

        for eq in eq_nodes:
            for f in fail_nodes:
                edge = GraphEdgeModel(
                    id=f"edge_{uuid.uuid4().hex[:8]}",
                    tenant_id=tenant_id,
                    source_node_id=eq.id,
                    target_node_id=f.id,
                    relation_type=RelationType.EXHIBITS_FAILURE.value,
                    confidence=0.88,
                    provenance=prov,
                )
                edges.append(edge)

        return edges
