"""Agent Logger — logs AI Agent decisions, tool selection, confidence, & outcomes."""

from typing import Any, Dict, Optional
from src.logging.event_types import LogEventType
from src.logging.logger import StructuredLogger


class AgentLogger:
    """Logger for AI Agent decision trajectories."""

    def __init__(self) -> None:
        self.logger = StructuredLogger("agent")

    def log_decision(
        self,
        agent_name: str,
        selected_route: str,
        confidence: float,
        tool_invoked: Optional[str] = None,
        outcome: str = "success",
        metadata: Optional[Dict[str, Any]] = None,
    ) -> str:
        payload = {
            "agent_name": agent_name,
            "selected_route": selected_route,
            "confidence": confidence,
            "tool_invoked": tool_invoked,
            "outcome": outcome,
            "metadata": metadata or {},
        }
        return self.logger.info(
            message=f"Agent '{agent_name}' routed to '{selected_route}' (conf={confidence})",
            event_type=LogEventType.AGENT_DECISION.value,
            payload=payload,
        )
