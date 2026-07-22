"""Main LangGraph Agent Workflow Definition."""

from langgraph.graph import END, StateGraph
from src.graph.nodes.agent_execution import agent_execution_node
from src.graph.nodes.agent_router import agent_router_node
from src.graph.nodes.evidence_collection import evidence_collection_node, response_builder_node
from src.graph.nodes.intent_detection import intent_detection_node
from src.graph.state import GraphState


def build_industrial_agent_graph() -> StateGraph:
    """Builds and compiles the industrial agent orchestrator LangGraph."""
    workflow = StateGraph(GraphState)

    # 1. Add Graph Nodes
    workflow.add_node("intent_detection", intent_detection_node)
    workflow.add_node("agent_router", agent_router_node)
    workflow.add_node("agent_execution", agent_execution_node)
    workflow.add_node("evidence_collection", evidence_collection_node)
    workflow.add_node("response_builder", response_builder_node)

    # 2. Define Entry Point
    workflow.set_entry_point("intent_detection")

    # 3. Connect Edges
    workflow.add_edge("intent_detection", "agent_router")
    workflow.add_edge("agent_router", "agent_execution")
    workflow.add_edge("agent_execution", "evidence_collection")
    workflow.add_edge("evidence_collection", "response_builder")
    workflow.add_edge("response_builder", END)

    return workflow.compile()
