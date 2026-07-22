"""Agent Router Graph Node."""

from src.graph.state import GraphState


async def agent_router_node(state: GraphState) -> GraphState:
    """Maps intent to concrete agent, applying fallback rules when confidence is low."""
    if state.intent_confidence < 0.60 or state.fallback_suggested:
        state.selected_agent = "ChatAgent"
        state.execution_trace.append("Low confidence: routed to ChatAgent fallback.")
    else:
        mapping = {
            "investigation": "InvestigationAgent",
            "report": "ReportAgent",
            "compliance": "ComplianceAgent",
            "knowledge": "KnowledgeAgent",
            "chat": "ChatAgent",
        }
        state.selected_agent = mapping.get(state.detected_intent, "ChatAgent")
        state.execution_trace.append(f"Routed to agent: {state.selected_agent}")

    state.status = "routed"
    return state
