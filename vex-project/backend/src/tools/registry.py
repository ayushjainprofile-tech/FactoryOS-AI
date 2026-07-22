"""Centralized Tool Registry — single authority for tool metadata, schemas, and instances."""

from typing import Dict, List, Optional
from src.tools.base_tool import BaseTool
from src.tools.catalog import ToolCatalog
from src.tools.drawing_parser_tool import DrawingParserTool
from src.tools.email_tool import EmailTool
from src.tools.graph_search import GraphSearchTool
from src.tools.notification_tool import NotificationTool
from src.tools.ocr_tool import OCRTool
from src.tools.pdf_tool import PDFTool
from src.tools.report_generator_tool import ReportGeneratorTool
from src.tools.schemas import ToolSchemaDefinition
from src.tools.sql_tool import SQLTool
from src.tools.vector_search import VectorSearchTool


class ToolRegistry:
    """Centralized tool registry managing tool discovery, schemas, and metadata."""

    def __init__(self) -> None:
        self._tools: Dict[str, BaseTool] = {}
        self._register_default_tools()

    def _register_default_tools() -> None:
        defaults = [
            VectorSearchTool(),
            GraphSearchTool(),
            OCRTool(),
            SQLTool(),
            PDFTool(),
            DrawingParserTool(),
            ReportGeneratorTool(),
            NotificationTool(),
            EmailTool(),
        ]
        for t in defaults:
            self.register_tool(t)

    def register_tool(self, tool: BaseTool) -> None:
        self._tools[tool.schema.name] = tool

    def get_tool(self, tool_name: str) -> Optional[BaseTool]:
        return self._tools.get(tool_name)

    def list_schemas(self) -> List[ToolSchemaDefinition]:
        return [t.schema for t in self._tools.values()]

    def export_openai_function_schemas(self) -> List[dict]:
        return ToolCatalog.export_openai_tools(self.list_schemas())


# Global singleton registry instance
global_tool_registry = ToolRegistry()
