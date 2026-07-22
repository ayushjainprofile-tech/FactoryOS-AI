"""Tests for Executive Memory."""

import pytest
from src.memory.executive_memory import ExecutiveMemory


@pytest.mark.asyncio
async def test_executive_decision_logging():
    mem = ExecutiveMemory()
    await mem.log_decision("t1", "exec_01", "Approved immediate bearing replacement for PUMP-101", priority_level="critical")

    decisions = await mem.get_decisions("t1", "exec_01")
    assert len(decisions) == 1
    assert decisions[0].metadata["priority_level"] == "critical"
    assert "replacement" in decisions[0].content
