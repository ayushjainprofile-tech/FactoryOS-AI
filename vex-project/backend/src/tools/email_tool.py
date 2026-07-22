"""Email Tool."""

from typing import Any, Dict
from src.tools.base_tool import BaseTool
from src.tools.schemas import ToolParameterSpec, ToolSchemaDefinition


class EmailTool(BaseTool):
    @property
    def schema(self) -> ToolSchemaDefinition:
        return ToolSchemaDefinition(
            name="email_sender",
            description="Sends transactional email notifications.",
            parameters=[
                ToolParameterSpec(name="to_email", type="string", description="Recipient email"),
                ToolParameterSpec(name="subject", type="string", description="Email subject"),
            ],
            is_side_effecting=True,
        )

    async def execute(self, tenant_id: str, arguments: Dict[str, Any]) -> Any:
        return {"to": arguments["to_email"], "sent": True}
