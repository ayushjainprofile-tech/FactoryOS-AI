"""Document Knowledge Graph Link Data Model."""

from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field


class GraphEntityModel(BaseModel):
    """Knowledge graph entity representation."""

    id: str
    name: str
    entity_type: str  # equipment, tag, location, process, failure, action, compliance
    properties: Dict[str, Any] = Field(default_factory=dict)
    source_chunk_ids: List[str] = Field(default_factory=list)


class GraphRelationshipModel(BaseModel):
    """Knowledge graph relationship representation."""

    id: str
    source_entity_id: str
    target_entity_id: str
    relation_type: str
    properties: Dict[str, Any] = Field(default_factory=dict)
    confidence: float = 1.0
    source_chunk_ids: List[str] = Field(default_factory=list)


class DocumentGraphModel(BaseModel):
    """Document graph extraction record."""

    document_id: str
    tenant_id: str
    entities: List[GraphEntityModel] = Field(default_factory=list)
    relationships: List[GraphRelationshipModel] = Field(default_factory=list)
