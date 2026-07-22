"""Tests for Tool Policy Engine & Permission Checks."""

import pytest
from src.tools.policies import ToolPolicyEngine
from src.tools.schemas import ToolExecutionRequest, ToolSchemaDefinition


def test_tool_policy_engine_authorization():
    engine = ToolPolicyEngine()
    schema = ToolSchemaDefinition(
        name="secure_tool",
        description="Secure tool",
        required_permission="REPORTS_CREATE",
    )

    # Valid role
    req_valid = ToolExecutionRequest(
        tool_name="secure_tool",
        tenant_id="t1",
        user_roles=["Engineer"],
    )
    assert engine.authorize_execution(schema, req_valid) is True

    # Missing tenant id
    req_no_tenant = ToolExecutionRequest(
        tool_name="secure_tool",
        tenant_id="",
        user_roles=["Engineer"],
    )
    assert engine.authorize_execution(schema, req_no_tenant) is False

    # Unauthorized role
    req_unauth = ToolExecutionRequest(
        tool_name="secure_tool",
        tenant_id="t1",
        user_roles=["Viewer"],
    )
    assert engine.authorize_execution(schema, req_unauth) is False
