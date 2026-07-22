"""Workflow API Schemas."""

from typing import Any, Dict, Optional
from pydantic import BaseModel, Field


class StartWorkflowRequest(BaseModel):
    workflow_type: str  # "maintenance_dispatch", "alert_escalation"
    trigger_entity_id: str
    parameters: Dict[str, Any] = Field(default_factory=dict)


class WorkflowExecutionResponse(BaseModel):
    execution_id: str
    workflow_type: str
    status: str  # "running", "completed", "failed"
    step: str
