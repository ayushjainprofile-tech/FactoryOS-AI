"""Evidence Collection & Response Builder Graph Nodes."""

from src.graph.state import GraphState


async def evidence_collection_node(state: GraphState) -> GraphState:
    """Normalizes and logs collected evidence items."""
    state.execution_trace.append(f"Collected {len(state.evidence)} evidence items.")
    state.status = "evidence_collected"
    return state


async def response_builder_node(state: GraphState) -> GraphState:
    """Synthesizes final user-facing response from state and evidence."""
    evidence_text = "\n".join([f"- [{e.source_type}] {e.title}: {e.content}" for e in state.evidence])

    if state.selected_agent == "InvestigationAgent":
        state.response_text = (
            f"Investigation Report for query '{state.query}':\n"
            f"Diagnostic analysis confirms an anomaly. Grounded Evidence:\n{evidence_text}\n"
            f"Recommended Next Steps: Perform bearing alignment and verify lubrication level."
        )
    else:
        state.response_text = (
            f"Response for '{state.query}':\n"
            f"Based on retrieved operational context:\n{evidence_text or 'No specific evidence needed.'}"
        )

    state.execution_trace.append("Response synthesized successfully.")
    state.status = "completed"
    return state
