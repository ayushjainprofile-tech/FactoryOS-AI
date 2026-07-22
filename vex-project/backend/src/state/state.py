from typing import TypedDict, List, Dict, Any, Optional
from langchain_core.messages import BaseMessage

class IndustrialAgentState(TypedDict):
    """
    Core state object passed through the LangGraph execution.
    Acts as the central memory for all agents during a transaction.
    """
    
    # Core Context
    messages: List[BaseMessage]
    current_user: Dict[str, Any]       # {id, role, department, plant_id, permissions}
    plant_id: str                      # Current facility context (isolated tenant)
    equipment_tag: Optional[str]       # Active asset context (e.g., "P-101")
    
    # Retrieval & Evidence (RAG & GraphRAG)
    active_documents: List[str]        # Doc IDs currently under review
    retrieved_chunks: List[Dict]       # Vector DB results
    graph_nodes: List[Dict]            # Neo4j Entities
    graph_edges: List[Dict]            # Neo4j Relationships
    
    # Industrial Data
    maintenance_history: List[Dict]    # CMMS Work Orders
    alerts: List[Dict]                 # Active SCADA / IoT alerts
    recommendations: List[str]         # Generated action items
    
    # Governance & Output
    citations: List[Dict]              # Grounded evidence links for UI
    confidence_score: float            # 0.0 to 1.0 (threshold for action)
    execution_trace: List[str]         # Audit trail of agents called
    workflow_status: str               # "routing" | "retrieving" | "generating" | "complete"
