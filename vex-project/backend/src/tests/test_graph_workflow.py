"""Unit and integration tests for LangGraph agent orchestration pipeline."""

import pytest
from src.graph.nodes.agent_router import agent_router_node
from src.graph.nodes.intent_detection import intent_detection_node
from src.graph.state import GraphState
from src.orchestrator.graph_orchestrator import GraphOrchestrator


@pytest.mark.asyncio
async def test_intent_detection_investigation():
    state = GraphState(
        query="Diagnose elevated vibration anomaly on PUMP-21 motor",
        tenant_id="tenant_01",
        equipment_id="eq_pump_21",
    )
    result_state = await intent_detection_node(state)
    assert result_state.detected_intent == "investigation"
    assert result_state.intent_confidence >= 0.90


@pytest.mark.asyncio
async def test_agent_router_fallback():
    state = GraphState(
        query="Random greeting or unknown query",
        tenant_id="tenant_01",
        intent_confidence=0.40,  # Low confidence triggers fallback
        fallback_suggested=True,
    )
    result_state = await agent_router_node(state)
    assert result_state.selected_agent == "ChatAgent"


@pytest.mark.asyncio
async def test_full_graph_orchestration_flow():
    orchestrator = GraphOrchestrator()
    initial_state = GraphState(
        query="Investigate bearing failure on PUMP-21",
        user_id="usr_01",
        tenant_id="tenant_alpha",
        plant_id="plant_01",
        equipment_id="eq_pump_21",
    )
    final_state = await orchestrator.run(initial_state)

    assert final_state.status == "completed"
    assert final_state.detected_intent == "investigation"
    assert final_state.selected_agent == "InvestigationAgent"
    assert len(final_state.evidence) >= 1
    assert "Response for" in final_state.response_text or "Investigation Report" in final_state.response_text
    assert len(final_state.execution_trace) >= 4
