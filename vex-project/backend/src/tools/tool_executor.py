"""Tool Executor for safe tool execution and logging."""

import logging
from typing import Any, Dict
from src.tools.tool_registry import ToolRegistry

logger = logging.getLogger(__name__)


class ToolExecutor:
    """Executes registered tools safely and records execution metadata."""

    def __init__(self, registry: ToolRegistry):
        self.registry = registry

    async def execute(self, tool_name: str, **kwargs: Any) -> Dict[str, Any]:
        logger.info(f"Executing tool '{tool_name}' with args: {kwargs}")
        try:
            tool_fn = self.registry.get_tool(tool_name)
            result = await tool_fn(**kwargs) if callable(tool_fn) else tool_fn(**kwargs)
            return {"tool": tool_name, "status": "success", "output": result}
        except Exception as exc:
            logger.error(f"Tool execution failed for '{tool_name}': {str(exc)}")
            return {"tool": tool_name, "status": "error", "error": str(exc)}
