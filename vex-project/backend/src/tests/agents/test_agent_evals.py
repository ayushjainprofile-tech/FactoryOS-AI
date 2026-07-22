"""Agent Trajectory & Routing Tests."""

import pytest
from src.agents.orchestrator import MasterAgentOrchestrator


@pytest.mark.agent
@pytest.mark.asyncio
async def test_agent_routing_trajectory():
    orchestrator = MasterAgentOrchestrator()
    res = await orchestrator.execute_agent_flow(
        user_query="Run SQL query on vibration logs",
        tenant_id="tenant_01",
    )
    assert res.success is True
    assert res.selected_route == "SQL"
