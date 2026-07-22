"""Tool Dispatcher — routes execution requests through policy checks and executors."""

from typing import Optional
from src.tools.executors.local_executor import LocalToolExecutor
from src.tools.executors.sandbox_executor import SandboxToolExecutor
from src.tools.policies import ToolPolicyEngine
from src.tools.registry import ToolRegistry, global_tool_registry
from src.tools.schemas import ToolExecutionRequest, ToolExecutionResult
from src.tools.validators import ToolValidator


class ToolDispatcher:
    """Dispatches tool execution after validating parameters and authorizing policy permissions."""

    def __init__(
        self,
        registry: Optional[ToolRegistry] = None,
        policy_engine: Optional[ToolPolicyEngine] = None,
        validator: Optional[ToolValidator] = None,
    ) -> None:
        self.registry = registry or global_tool_registry
        self.policy_engine = policy_engine or ToolPolicyEngine()
        self.validator = validator or ToolValidator()
        self.local_executor = LocalToolExecutor()
        self.sandbox_executor = SandboxToolExecutor()

    async def dispatch(self, request: ToolExecutionRequest) -> ToolExecutionResult:
        tool = self.registry.get_tool(request.tool_name)
        if not tool:
            return ToolExecutionResult(
                tool_name=request.tool_name,
                success=False,
                error=f"Tool '{request.tool_name}' not found in registry.",
            )

        # Policy & Permission Authorization
        if not self.policy_engine.authorize_execution(tool.schema, request):
            return ToolExecutionResult(
                tool_name=request.tool_name,
                success=False,
                error=f"Unauthorized to execute tool '{request.tool_name}'. Missing required permission.",
            )

        # Parameter Validation
        try:
            self.validator.validate_args(tool.schema, request.arguments)
        except ValueError as val_err:
            return ToolExecutionResult(
                tool_name=request.tool_name,
                success=False,
                error=str(val_err),
            )

        # Route to Local or Sandbox Executor based on tool sensitivity
        if tool.schema.is_side_effecting:
            return await self.sandbox_executor.execute(tool, request.tenant_id, request.arguments)
        else:
            return await self.local_executor.execute(tool, request.tenant_id, request.arguments)
