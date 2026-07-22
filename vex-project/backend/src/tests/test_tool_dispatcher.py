"""Tests for Tool Dispatcher."""

import pytest
from src.tools.dispatcher import ToolDispatcher
from src.tools.schemas import ToolExecutionRequest


@pytest.mark.asyncio
async def test_tool_dispatcher_success():
    dispatcher = ToolDispatcher()
    req = ToolExecutionRequest(
        tool_name="vector_search",
        tenant_id="tenant_01",
        arguments={"query": "pump vibration limits"},
        user_roles=["Engineer"],
    )

    res = await dispatcher.dispatch(req)
    assert res.success is True
    assert res.tool_name == "vector_search"
    assert "chunks" in res.result


@pytest.mark.asyncio
async def test_tool_dispatcher_missing_tool():
    dispatcher = ToolDispatcher()
    req = ToolExecutionRequest(
        tool_name="nonexistent_tool",
        tenant_id="tenant_01",
    )

    res = await dispatcher.dispatch(req)
    assert res.success is False
    assert "not found" in res.error
