"""Structured Log Event Types."""

from enum import Enum


class LogEventType(str, Enum):
    API_REQUEST = "api_request"
    API_RESPONSE = "api_response"
    SECURITY_AUTH = "security_auth"
    SECURITY_POLICY = "security_policy"
    AGENT_DECISION = "agent_decision"
    LLM_CALL = "llm_call"
    TOOL_EXECUTION = "tool_execution"
    WORKFLOW_TRANSITION = "workflow_transition"
    ERROR = "error"
    AUDIT = "audit"
