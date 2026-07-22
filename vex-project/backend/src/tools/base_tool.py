"""Base Abstract Tool Interface."""

from abc import ABC, abstractmethod
from typing import Any, Dict
from src.tools.schemas import ToolSchemaDefinition


class BaseTool(ABC):
    """Abstract interface for all system tools."""

    @property
    @abstractmethod
    def schema(self) -> ToolSchemaDefinition:
        """Returns tool schema definition."""
        pass

    @abstractmethod
    async def execute(self, tenant_id: str, arguments: Dict[str, Any]) -> Any:
        """Executes tool logic."""
        pass
