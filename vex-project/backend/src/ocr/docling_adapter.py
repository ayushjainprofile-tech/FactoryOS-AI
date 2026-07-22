"""Docling Engine Adapter for structured PDF and complex layout extraction."""

from typing import Any, Dict, Optional
from src.ocr.base_ocr import BaseOCREngine
from src.ocr.models import BoundingBox, OCRBlock, OCRPageResult, OCRResult


class DoclingAdapter(BaseOCREngine):
    """Adapter for Docling structured document extraction engine."""

    @property
    def engine_name(self) -> str:
        return "docling"

    async def process(
        self,
        file_bytes: bytes,
        filename: str,
        options: Optional[Dict[str, Any]] = None,
    ) -> OCRResult:
        # Simulated Docling extraction logic
        page_1_blocks = [
            OCRBlock(
                block_id="b1",
                text=f"Docling Extracted Header: {filename}",
                confidence=0.98,
                bbox=BoundingBox(x_min=10.0, y_min=10.0, x_max=200.0, y_max=50.0),
                block_type="heading",
            ),
            OCRBlock(
                block_id="b2",
                text="Operating pressure range: 100 - 150 PSI.",
                confidence=0.95,
                bbox=BoundingBox(x_min=10.0, y_min=60.0, x_max=400.0, y_max=120.0),
                block_type="paragraph",
            ),
        ]

        pages = [
            OCRPageResult(
                page_number=1,
                text="\n".join([b.text for b in page_1_blocks]),
                confidence=0.965,
                blocks=page_1_blocks,
                width=612.0,
                height=792.0,
            )
        ]

        return OCRResult(
            text="\n".join([p.text for p in pages]),
            confidence=0.965,
            engine_used=self.engine_name,
            pages=pages,
            language_hint="en",
            metadata={"extracted_tables": 1, "layout_preserved": True},
        )
