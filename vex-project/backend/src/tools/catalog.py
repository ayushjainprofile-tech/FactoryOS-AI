"""Tool Catalog — exports OpenAI function calling tool schemas."""

from typing import Any, Dict, List
from src.tools.schemas import ToolSchemaDefinition


class ToolCatalog:
    """Exports registered tools to OpenAI/Gemini function declaration formats."""

    @staticmethod
    def export_openai_tools(schemas: List[ToolSchemaDefinition]) -> List[Dict[str, Any]]:
        tools = []
        for s in schemas:
            properties = {}
            required = []
            for p in s.parameters:
                properties[p.name] = {"type": p.type, "description": p.description}
                if p.required:
                    required.append(p.name)

            tools.append({
                "type": "function",
                "function": {
                    "name": s.name,
                    "description": s.description,
                    "parameters": {
                        "type": "object",
                        "properties": properties,
                        "required": required,
                    },
                },
            })
        return tools
