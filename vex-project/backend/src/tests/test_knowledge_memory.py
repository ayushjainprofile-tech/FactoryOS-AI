"""Tests for Knowledge Memory."""

import pytest
from src.memory.knowledge_memory import KnowledgeMemory


@pytest.mark.asyncio
async def test_knowledge_memory_write_and_read():
    mem = KnowledgeMemory()
    await mem.write_fact("t1", "ISO-10816", "Vibration threshold limit is 2.5 mm/s")
    await mem.write_fact("t1", "ISO-10816", "Class II machinery details")

    facts = await mem.read_facts("t1", "ISO-10816")
    assert len(facts) == 2
    assert "2.5 mm/s" in facts[0].content


@pytest.mark.asyncio
async def test_knowledge_memory_tenant_isolation():
    mem = KnowledgeMemory()
    await mem.write_fact("t1", "standards", "Tenant A standard")
    await mem.write_fact("t2", "standards", "Tenant B standard")

    facts_a = await mem.read_facts("t1", "standards")
    assert len(facts_a) == 1
    assert facts_a[0].content == "Tenant A standard"
