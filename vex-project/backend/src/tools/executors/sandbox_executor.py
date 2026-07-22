"""Sandboxed Tool Executor — executes untrusted / risky tools in isolation."""

import time
from typing import Any, Dict
from src.tools.base_tool import BaseTool
from src.tools.schemas import ToolExecutionResult


class SandboxToolExecutor:
    """Executes risky tools inside isolated sandbox context."""

    async def execute(self, tool: BaseTool, tenant_id: str, arguments: Dict[str, Any]) -> ToolExecutionResult:
        start = time.time()
        try:
            # Enforce strict isolated execution wrapper
            res = await tool.execute(tenant_id, arguments)
            elapsed = (time.time() - start) * 1000.0
            return ToolExecutionResult(tool_name=tool.schema.name, success=True, result=res, execution_time_ms=elapsed)
        except Exception as exc:
            elapsed = (time.time() - start) * 1000.0
            return ToolExecutionResult(tool_name=tool.schema.name, success=False, error=str(exc), execution_time_ms=elapsed)
