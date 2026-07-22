"""API Endpoint Tests."""

import pytest
from src.tools.dispatcher import ToolDispatcher
from src.tools.schemas import ToolExecutionRequest


@pytest.mark.api
@pytest.mark.asyncio
async def test_api_tool_dispatch_contract():
    dispatcher = ToolDispatcher()
    req = ToolExecutionRequest(
        tool_name="vector_search",
        tenant_id="tenant_api",
        arguments={"query": "pump pressure"},
    )
    res = await dispatcher.dispatch(req)
    assert res.success is True
    assert res.tool_name == "vector_search"
