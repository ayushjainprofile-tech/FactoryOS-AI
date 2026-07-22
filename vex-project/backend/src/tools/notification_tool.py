"""Notification Tool."""

from typing import Any, Dict
from src.tools.base_tool import BaseTool
from src.tools.schemas import ToolParameterSpec, ToolSchemaDefinition


class NotificationTool(BaseTool):
    @property
    def schema(self) -> ToolSchemaDefinition:
        return ToolSchemaDefinition(
            name="notification_delivery",
            description="Delivers in-app system notifications to specified users.",
            parameters=[
                ToolParameterSpec(name="user_id", type="string", description="User ID"),
                ToolParameterSpec(name="message", type="string", description="Notification text"),
            ],
            is_side_effecting=True,
        )

    async def execute(self, tenant_id: str, arguments: Dict[str, Any]) -> Any:
        return {"user_id": arguments["user_id"], "delivered": True}
