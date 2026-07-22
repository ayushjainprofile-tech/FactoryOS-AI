"""Chat API Schemas."""

from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field


class ChatMessageRequest(BaseModel):
    """Chat message request contract."""

    message: str = Field(..., description="User query or instruction")
    conversation_id: Optional[str] = Field(None, description="Optional conversation tracking ID")
    equipment_id: Optional[str] = Field(None, description="Optional equipment context ID")


class ChatCitation(BaseModel):
    """Citation metadata contract."""

    source_type: str  # "document", "knowledge_graph", "telemetry"
    title: str
    content: str
    score: float


class ChatMessageResponse(BaseModel):
    """Chat message response contract."""

    conversation_id: str
    response: str
    citations: List[ChatCitation] = Field(default_factory=list)
    metadata: Dict[str, Any] = Field(default_factory=dict)
