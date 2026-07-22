"""Graph Search Tool."""

from typing import Any, Dict
from src.tools.base_tool import BaseTool
from src.tools.schemas import ToolParameterSpec, ToolSchemaDefinition


class GraphSearchTool(BaseTool):
    @property
    def schema(self) -> ToolSchemaDefinition:
        return ToolSchemaDefinition(
            name="graph_search",
            description="Queries Knowledge Graph relationships and multi-hop entity paths.",
            parameters=[
                ToolParameterSpec(name="node_id", type="string", description="Seed node ID"),
                ToolParameterSpec(name="depth", type="integer", description="Traversal depth", required=False, default=2),
            ],
            required_permission="KNOWLEDGE_READ",
        )

    async def execute(self, tenant_id: str, arguments: Dict[str, Any]) -> Any:
        node_id = arguments["node_id"]
        return {"nodes": [{"id": node_id}], "edges": [], "tenant_id": tenant_id}
