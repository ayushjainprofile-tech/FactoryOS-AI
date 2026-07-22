"""Tests for Investigation Memory."""

import pytest
from src.memory.investigation_memory import InvestigationMemory


@pytest.mark.asyncio
async def test_investigation_memory_findings():
    mem = InvestigationMemory()
    await mem.add_finding("t1", "case_001", "Initial hypothesis: bearing wear due to lack of lubrication.")
    await mem.add_finding("t1", "case_001", "Sensor data confirmed peak velocity exceedance.")

    findings = await mem.get_findings("t1", "case_001")
    assert len(findings) == 2
    assert "lubrication" in findings[0].content
