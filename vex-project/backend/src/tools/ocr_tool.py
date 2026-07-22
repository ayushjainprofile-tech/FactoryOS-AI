"""OCR Extraction Tool."""

from typing import Any, Dict
from src.tools.base_tool import BaseTool
from src.tools.schemas import ToolParameterSpec, ToolSchemaDefinition


class OCRTool(BaseTool):
    @property
    def schema(self) -> ToolSchemaDefinition:
        return ToolSchemaDefinition(
            name="ocr_extraction",
            description="Extracts text from scanned documents and images via multi-engine OCR.",
            parameters=[
                ToolParameterSpec(name="filename", type="string", description="File name"),
            ],
        )

    async def execute(self, tenant_id: str, arguments: Dict[str, Any]) -> Any:
        return {"text": f"Extracted text for {arguments['filename']}", "confidence": 0.95}
