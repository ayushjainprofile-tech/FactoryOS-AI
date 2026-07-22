"""Intent Detection Graph Node."""

from src.graph.state import GraphState


async def intent_detection_node(state: GraphState) -> GraphState:
    """Classifies user query intent into predefined categories."""
    query_lower = state.query.lower()

    if any(k in query_lower for k in ["diagnose", "investigate", "anomaly", "vibration", "fault", "failure"]):
        state.detected_intent = "investigation"
        state.intent_confidence = 0.95
        state.intent_rationale = "Query requests diagnostic analysis for physical anomaly."
    elif any(k in query_lower for k in ["report", "export", "pdf", "generate report"]):
        state.detected_intent = "report"
        state.intent_confidence = 0.92
        state.intent_rationale = "Query requests report generation."
    elif any(k in query_lower for k in ["iso", "osha", "compliance", "audit", "policy"]):
        state.detected_intent = "compliance"
        state.intent_confidence = 0.90
        state.intent_rationale = "Query asks about regulatory compliance rules."
    elif any(k in query_lower for k in ["graph", "topology", "p&id", "cad", "relationship"]):
        state.detected_intent = "knowledge"
        state.intent_confidence = 0.88
        state.intent_rationale = "Query requests knowledge graph or topological relationships."
    else:
        state.detected_intent = "chat"
        state.intent_confidence = 0.85
        state.intent_rationale = "General operational assistance query."

    state.execution_trace.append(f"Intent classified: {state.detected_intent} ({state.intent_confidence:.2f})")
    state.status = "intent_classified"
    return state
