"""Tests for ConversationMemory."""

import pytest
from src.memory.conversation_memory import ConversationMemory


@pytest.mark.asyncio
async def test_write_and_read_turns():
    mem = ConversationMemory()
    await mem.write("t1", "conv_01", "User: What is PUMP-21 status?")
    await mem.write("t1", "conv_01", "Assistant: PUMP-21 is operational.")
    entries = await mem.read("t1", "conv_01")
    assert len(entries) == 2
    assert entries[0].content == "User: What is PUMP-21 status?"
    assert entries[1].version == 2


@pytest.mark.asyncio
async def test_tenant_isolation():
    mem = ConversationMemory()
    await mem.write("tenant_a", "conv_01", "Tenant A data")
    await mem.write("tenant_b", "conv_01", "Tenant B data")
    entries_a = await mem.read("tenant_a", "conv_01")
    entries_b = await mem.read("tenant_b", "conv_01")
    assert len(entries_a) == 1
    assert entries_a[0].content == "Tenant A data"
    assert len(entries_b) == 1
    assert entries_b[0].content == "Tenant B data"


@pytest.mark.asyncio
async def test_max_turns_enforced():
    mem = ConversationMemory(max_turns=3)
    for i in range(5):
        await mem.write("t1", "conv_01", f"Turn {i}")
    entries = await mem.read("t1", "conv_01")
    assert len(entries) == 3
    assert entries[0].content == "Turn 2"  # Oldest two trimmed


@pytest.mark.asyncio
async def test_summary_generation():
    mem = ConversationMemory()
    await mem.write("t1", "conv_01", "User: Hello")
    await mem.write("t1", "conv_01", "Assistant: Hi there")
    summary = await mem.get_summary("t1", "conv_01")
    assert "Turn 1" in summary
    assert "Hello" in summary


@pytest.mark.asyncio
async def test_empty_history():
    mem = ConversationMemory()
    entries = await mem.read("t1", "nonexistent_conv")
    assert entries == []
    summary = await mem.get_summary("t1", "nonexistent_conv")
    assert summary == ""


@pytest.mark.asyncio
async def test_clear():
    mem = ConversationMemory()
    await mem.write("t1", "conv_01", "Some data")
    count = await mem.clear("t1", "conv_01")
    assert count == 1
    entries = await mem.read("t1", "conv_01")
    assert entries == []
