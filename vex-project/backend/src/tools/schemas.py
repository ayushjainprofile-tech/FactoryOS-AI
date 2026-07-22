"""Tool Input and Output Schemas."""

from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field


class ToolParameterSpec(BaseModel):
    """Parameter specification for LLM function calling schema generation."""

    name: str
    type: str  # string, integer, float, boolean, object, array
    description: str
    required: bool = True
    default: Optional[Any] = None


class ToolSchemaDefinition(BaseModel):
    """Complete tool metadata schema representation."""

    name: str
    version: str = "1.0.0"
    description: str
    parameters: List[ToolParameterSpec] = Field(default_factory=list)
    returns: str = "object"
    is_side_effecting: bool = False
    required_permission: Optional[str] = None


class ToolExecutionRequest(BaseModel):
    """Execution request container."""

    tool_name: str
    tenant_id: str
    arguments: Dict[str, Any] = Field(default_factory=dict)
    user_roles: List[str] = Field(default_factory=list)


class ToolExecutionResult(BaseModel):
    """Normalized tool execution response container."""

    tool_name: str
    success: bool
    result: Optional[Any] = None
    error: Optional[str] = None
    execution_time_ms: float = 0.0
