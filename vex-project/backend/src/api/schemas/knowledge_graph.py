"""Knowledge Graph API Schemas."""

from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field


class CreateNodeRequest(BaseModel):
    """Create graph node request."""

    node_id: str
    name: str
    entity_type: str
    plant_id: Optional[str] = None
    department_id: Optional[str] = None
    properties: Dict[str, Any] = Field(default_factory=dict)


class CreateEdgeRequest(BaseModel):
    """Create graph edge request."""

    edge_id: str
    source_id: str
    target_id: str
    relation_type: str
    confidence: float = 1.0
    properties: Dict[str, Any] = Field(default_factory=dict)


class GraphQueryResponse(BaseModel):
    """Graph neighborhood query response."""

    nodes: List[Dict[str, Any]] = Field(default_factory=list)
    edges: List[Dict[str, Any]] = Field(default_factory=list)
