"""Tests for IndustrialGPTAgent end-to-end pipeline."""

import pytest

from src.agents.industrial_gpt import IndustrialGPTAgent
from src.memory.conversation_memory import ConversationMemory
from src.memory.document_memory import DocumentMemory
from src.memory.equipment_memory import EquipmentMemory
from src.rag.citation_engine import CitationEngine
from src.rag.confidence_engine import ConfidenceEngine
from src.rag.retriever import Retriever


def _make_agent() -> IndustrialGPTAgent:
    return IndustrialGPTAgent(
        retriever=Retriever(),
        citation_engine=CitationEngine(),
        confidence_engine=ConfidenceEngine(),
        conversation_memory=ConversationMemory(),
        equipment_memory=EquipmentMemory(),
        document_memory=DocumentMemory(),
    )


@pytest.mark.asyncio
async def test_basic_pipeline():
    agent = _make_agent()
    result = await agent.process(
        query="What is the vibration status of PUMP-21?",
        tenant_id="t1",
        user_id="user_01",
        roles=["Engineer"],
        equipment_id="PUMP-21",
    )
    assert result.conversation_id
    assert result.response_text
    assert len(result.citations) > 0
    assert result.confidence.level in ("high", "medium", "low")
    assert len(result.execution_trace) > 0


@pytest.mark.asyncio
async def test_response_includes_citations():
    agent = _make_agent()
    result = await agent.process(
        query="Explain bearing wear on PUMP-21",
        tenant_id="t1",
        user_id="user_01",
        roles=["Technician"],
    )
    assert any(c.source_type for c in result.citations)


@pytest.mark.asyncio
async def test_conversation_persisted():
    conv_mem = ConversationMemory()
    agent = IndustrialGPTAgent(
        retriever=Retriever(),
        citation_engine=CitationEngine(),
        confidence_engine=ConfidenceEngine(),
        conversation_memory=conv_mem,
        equipment_memory=EquipmentMemory(),
        document_memory=DocumentMemory(),
    )
    result = await agent.process(
        query="First question",
        tenant_id="t1",
        user_id="user_01",
        roles=["Admin"],
        conversation_id="conv_42",
    )
    entries = await conv_mem.read("t1", "conv_42")
    assert len(entries) == 2  # user + assistant turn


@pytest.mark.asyncio
async def test_to_dict_format():
    agent = _make_agent()
    result = await agent.process(
        query="Status check",
        tenant_id="t1",
        user_id="user_01",
        roles=["Executive"],
    )
    d = result.to_dict()
    assert "conversation_id" in d
    assert "response" in d
    assert "citations" in d
    assert "confidence" in d
