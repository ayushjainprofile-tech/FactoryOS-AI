"""Tests for Memory Router & Authorization Context Fusion."""

import pytest
from src.memory.executive_memory import ExecutiveMemory
from src.memory.investigation_memory import InvestigationMemory
from src.memory.memory_router import MemoryRouter


@pytest.mark.asyncio
async def test_memory_router_fusion_authorized():
    exec_mem = ExecutiveMemory()
    await exec_mem.log_decision("t1", "u_admin", "Approve budget for plant maintenance")

    router = MemoryRouter(executive_mem=exec_mem)

    # Admin user gets executive memory fused
    fused_admin = await router.fuse_memory_context(
        tenant_id="t1",
        user_id="u_admin",
        user_role="Admin",
    )
    assert "executive" in fused_admin
    assert "budget" in fused_admin["executive"]

    # Technician user does NOT get executive memory fused
    fused_tech = await router.fuse_memory_context(
        tenant_id="t1",
        user_id="u_tech",
        user_role="Technician",
    )
    assert "executive" not in fused_tech
