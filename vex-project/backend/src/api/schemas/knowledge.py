"""Knowledge Graph API Schemas."""

from typing import Any, Dict, List
from pydantic import BaseModel, Field


class KnowledgeGraphNode(BaseModel):
    id: str
    label: str
    properties: Dict[str, Any] = Field(default_factory=dict)


class KnowledgeGraphRelationship(BaseModel):
    source_id: str
    target_id: str
    type: str


class KnowledgeGraphResponse(BaseModel):
    nodes: List[KnowledgeGraphNode]
    relationships: List[KnowledgeGraphRelationship]
