"""Workflow Logger — logs state transitions, step latencies, & execution outcomes."""

from typing import Any, Dict, Optional
from src.logging.event_types import LogEventType
from src.logging.logger import StructuredLogger


class WorkflowLogger:
    """Logger for orchestrator state graph workflow execution."""

    def __init__(self) -> None:
        self.logger = StructuredLogger("workflow")

    def log_transition(
        self,
        workflow_name: str,
        run_id: str,
        current_step: str,
        next_step: str,
        duration_ms: float = 0.0,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> str:
        payload = {
            "workflow_name": workflow_name,
            "run_id": run_id,
            "current_step": current_step,
            "next_step": next_step,
            "duration_ms": duration_ms,
            "metadata": metadata or {},
        }
        return self.logger.info(
            message=f"Workflow '{workflow_name}' step transition: {current_step} -> {next_step}",
            event_type=LogEventType.WORKFLOW_TRANSITION.value,
            payload=payload,
        )
