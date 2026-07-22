"""Vector Search Tool."""

from typing import Any, Dict
from src.tools.base_tool import BaseTool
from src.tools.schemas import ToolParameterSpec, ToolSchemaDefinition


class VectorSearchTool(BaseTool):
    @property
    def schema(self) -> ToolSchemaDefinition:
        return ToolSchemaDefinition(
            name="vector_search",
            description="Searches technical documentation vectors by semantic similarity.",
            parameters=[
                ToolParameterSpec(name="query", type="string", description="User search query"),
                ToolParameterSpec(name="top_k", type="integer", description="Number of results", required=False, default=5),
            ],
            required_permission="DOCUMENTS_READ",
        )

    async def execute(self, tenant_id: str, arguments: Dict[str, Any]) -> Any:
        query = arguments["query"]
        return {"chunks": [{"content": f"Vector match for '{query}'", "score": 0.94}], "tenant_id": tenant_id}
