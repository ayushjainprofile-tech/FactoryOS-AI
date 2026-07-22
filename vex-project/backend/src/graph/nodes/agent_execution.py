"""Agent Execution Graph Node."""

from src.agents.chat_agent import ChatAgent, ComplianceAgent, InvestigationAgent, KnowledgeAgent, ReportAgent
from src.graph.state import GraphState


async def agent_execution_node(state: GraphState) -> GraphState:
    """Instantiates and executes the selected agent."""
    agents = {
        "ChatAgent": ChatAgent(),
        "InvestigationAgent": InvestigationAgent(),
        "ReportAgent": ReportAgent(),
        "ComplianceAgent": ComplianceAgent(),
        "KnowledgeAgent": KnowledgeAgent(),
    }

    agent = agents.get(state.selected_agent, ChatAgent())
    updated_state = await agent.execute(state)
    updated_state.status = "executed"
    return updated_state
