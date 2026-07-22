"""Base Agent Abstract Interface."""

from abc import ABC, abstractmethod
from src.graph.state import GraphState


class BaseAgent(ABC):
    """Abstract base class for all specialized industrial agents."""

    def __init__(self, agent_id: str, agent_name: str):
        self.agent_id = agent_id
        self.agent_name = agent_name

    def pre_run_check(self, state: GraphState) -> bool:
        """Validates security boundaries before execution."""
        if not state.tenant_id:
            raise PermissionError("Tenant context missing.")
        return True

    @abstractmethod
    async def execute(self, state: GraphState) -> GraphState:
        """Core execution logic. Mutates and returns GraphState."""
        pass
