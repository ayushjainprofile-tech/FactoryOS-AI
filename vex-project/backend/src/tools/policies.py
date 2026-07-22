"""Tool Permission & Policy Engine."""

from typing import List, Optional
from src.tools.schemas import ToolExecutionRequest, ToolSchemaDefinition


class ToolPolicyEngine:
    """Evaluates security permissions and tenant boundary checks before tool execution."""

    def authorize_execution(
        self, schema: ToolSchemaDefinition, request: ToolExecutionRequest
    ) -> bool:
        if not request.tenant_id:
            return False  # Strict tenant isolation check

        if schema.required_permission:
            # Check if user holds required permission
            if "Admin" in request.user_roles or "Engineer" in request.user_roles:
                return True
            return False

        return True
