"""Knowledge Graph Ontology Manager — versioning and schema validation."""

from typing import Any, Dict, List
from src.knowledge_graph.schema import CanonicalEdgeType, CanonicalNodeType


class OntologyManager:
    """Manages ontology versions, node validation, and relation rules."""

    def __init__(self, version: str = "v1.0") -> None:
        self.version = version
        self.allowed_nodes = set(e.value for e in CanonicalNodeType)
        self.allowed_edges = set(e.value for e in CanonicalEdgeType)

    def validate_node_type(self, node_type: str) -> bool:
        return node_type.lower() in self.allowed_nodes

    def validate_edge_type(self, edge_type: str) -> bool:
        return edge_type.upper() in self.allowed_edges
