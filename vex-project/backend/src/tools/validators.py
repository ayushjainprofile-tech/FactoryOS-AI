"""Tool Parameter Validator."""

from typing import Any, Dict
from src.tools.schemas import ToolSchemaDefinition


class ToolValidator:
    """Validates required input arguments against tool parameter specifications."""

    def validate_args(self, schema: ToolSchemaDefinition, arguments: Dict[str, Any]) -> bool:
        for param in schema.parameters:
            if param.required and param.name not in arguments:
                raise ValueError(f"Missing required parameter '{param.name}' for tool '{schema.name}'")
        return True
