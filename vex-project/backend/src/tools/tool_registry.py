"""Tool Registry registering domain tools."""

from typing import Any, Callable, Dict


class ToolRegistry:
    """Central registry of executable agent tools."""

    def __init__(self) -> None:
        self._tools: Dict[str, Callable[..., Any]] = {}

    def register_tool(self, name: str, func: Callable[..., Any]) -> None:
        """Registers a named tool function."""
        self._tools[name] = func

    def get_tool(self, name: str) -> Callable[..., Any]:
        """Retrieves a registered tool."""
        if name not in self._tools:
            raise KeyError(f"Tool '{name}' is not registered.")
        return self._tools[name]

    def list_tools(self) -> Dict[str, Callable[..., Any]]:
        return self._tools
