"""Graph Edge Data Model."""

from typing import Any, Dict, Optional
from pydantic import BaseModel, Field
from src.models.graph_provenance import GraphProvenanceModel


class GraphEdgeModel(BaseModel):
    """Knowledge graph directed edge model representing relationships."""

    id: str
    tenant_id: str
    source_node_id: str
    target_node_id: str
    relation_type: str  # CONNECTED_TO, PART_OF, LOCATED_IN, CAUSES, DEPENDS_ON, REFERENCES, OWNED_BY, MAINTAINED_BY
    confidence: float = 1.0
    properties: Dict[str, Any] = Field(default_factory=dict)
    provenance: Optional[GraphProvenanceModel] = None
