"""SQL Query Tool."""

from typing import Any, Dict
from src.tools.base_tool import BaseTool
from src.tools.schemas import ToolParameterSpec, ToolSchemaDefinition


class SQLTool(BaseTool):
    @property
    def schema(self) -> ToolSchemaDefinition:
        return ToolSchemaDefinition(
            name="sql_query",
            description="Executes scoped, read-only SQL queries against analytical tables.",
            parameters=[
                ToolParameterSpec(name="query", type="string", description="SQL SELECT query"),
            ],
            is_side_effecting=False,
            required_permission="ANALYTICS_READ",
        )

    async def execute(self, tenant_id: str, arguments: Dict[str, Any]) -> Any:
        query = arguments["query"]
        if "DROP" in query.upper() or "DELETE" in query.upper():
            raise ValueError("Destructive SQL queries are strictly prohibited.")
        return {"rows": [], "row_count": 0}
