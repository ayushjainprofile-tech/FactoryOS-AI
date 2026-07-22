"""Typed Shared Graph State object for LangGraph agent orchestration."""

from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field


class EvidenceItem(BaseModel):
    """Normalized evidence item for provenance tracing."""

    source_type: str  # "vector_rag", "graph_rag", "telemetry", "ocr"
    source_id: str
    title: str
    content: str
    score: float = 1.0
    metadata: Dict[str, Any] = Field(default_factory=dict)


class GraphState(BaseModel):
    """Typed shared state container passed across nodes in the LangGraph workflow."""

    # User & Scope Context
    user_id: str = ""
    tenant_id: str = ""
    plant_id: Optional[str] = None
    department_id: Optional[str] = None
    roles: List[str] = Field(default_factory=list)

    # Input Payload
    query: str = ""
    conversation_id: str = ""
    equipment_id: Optional[str] = None

    # Step 1: Intent Detection Outputs
    detected_intent: str = "general_chat"  # "chat", "investigation", "report", "compliance", "knowledge"
    intent_confidence: float = 1.0
    intent_rationale: str = ""
    fallback_suggested: bool = False

    # Step 2: Agent Routing Outputs
    selected_agent: str = "ChatAgent"
    agent_parameters: Dict[str, Any] = Field(default_factory=dict)

    # Step 3 & 4: Tool Execution & Evidence Collection
    tool_calls: List[Dict[str, Any]] = Field(default_factory=list)
    raw_tool_outputs: List[Dict[str, Any]] = Field(default_factory=list)
    evidence: List[EvidenceItem] = Field(default_factory=list)

    # Step 5: Final Response Generation
    response_text: str = ""
    confidence_score: float = 1.0
    execution_trace: List[str] = Field(default_factory=list)
    status: str = "initialized"  # "initialized", "intent_classified", "routed", "executed", "evidence_collected", "completed", "failed"
