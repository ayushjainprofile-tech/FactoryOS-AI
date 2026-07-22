"""Tests for ChatOrchestrator end-to-end."""

import pytest
from src.api.schemas.chat import ChatMessageRequest
from src.orchestrator.chat_orchestrator import ChatOrchestrator


@pytest.mark.asyncio
async def test_chat_orchestrator_end_to_end():
    orchestrator = ChatOrchestrator()
    request = ChatMessageRequest(
        message="Explain the vibration threshold for PUMP-21",
        conversation_id="conv_100",
        equipment_id="PUMP-21",
    )
    response = await orchestrator.process_chat(
        request=request,
        tenant_id="t1",
        user_id="user_01",
        roles=["Engineer"],
        plant_id="plant_A",
    )
    assert response.conversation_id == "conv_100"
    assert response.response
    assert isinstance(response.citations, list)
    assert "confidence" in response.metadata


@pytest.mark.asyncio
async def test_chat_orchestrator_without_equipment():
    orchestrator = ChatOrchestrator()
    request = ChatMessageRequest(
        message="General maintenance question",
    )
    response = await orchestrator.process_chat(
        request=request,
        tenant_id="t2",
    )
    assert response.conversation_id
    assert response.response
