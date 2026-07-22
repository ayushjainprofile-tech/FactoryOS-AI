"""Graph Orchestrator managing execution of the LangGraph agent graph."""

from typing import Any, Dict
from src.graph.state import GraphState
from src.graph.workflows.main_graph import build_industrial_agent_graph


class GraphOrchestrator:
    """Facade orchestrator running the LangGraph agent graph."""

    def __init__(self):
        self.app = build_industrial_agent_graph()

    async def run(self, initial_state: GraphState) -> GraphState:
        """Executes the state graph workflow asynchronously."""
        # Convert state object to dict for langgraph invocation
        result_dict = await self.app.ainvoke(initial_state.model_dump())
        return GraphState(**result_dict)
