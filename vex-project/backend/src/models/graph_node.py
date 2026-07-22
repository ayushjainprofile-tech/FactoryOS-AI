"""Graph Node Data Model."""

from typing import Any, Dict, Optional
from pydantic import BaseModel, Field
from src.models.graph_provenance import GraphProvenanceModel


class GraphNodeModel(BaseModel):
    """Knowledge graph node model representing domain entities."""

    id: str
    tenant_id: str
    name: str
    entity_type: str  # equipment, process, failure, location, document, user, department, compliance
    plant_id: Optional[str] = None
    department_id: Optional[str] = None
    aliases: list[str] = Field(default_factory=list)
    properties: Dict[str, Any] = Field(default_factory=dict)
    provenance: Optional[GraphProvenanceModel] = None
