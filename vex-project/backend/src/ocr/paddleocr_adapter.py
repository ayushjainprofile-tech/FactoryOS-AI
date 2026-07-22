"""PaddleOCR Adapter for image-heavy or scanned inputs."""

from typing import Any, Dict, Optional
from src.ocr.base_ocr import BaseOCREngine
from src.ocr.models import BoundingBox, OCRBlock, OCRPageResult, OCRResult


class PaddleOCRAdapter(BaseOCREngine):
    """Adapter for PaddleOCR engine (optimized for scanned pages & images)."""

    @property
    def engine_name(self) -> str:
        return "paddleocr"

    async def process(
        self,
        file_bytes: bytes,
        filename: str,
        options: Optional[Dict[str, Any]] = None,
    ) -> OCRResult:
        blocks = [
            OCRBlock(
                block_id="pb1",
                text=f"PaddleOCR Text Extracted from {filename}",
                confidence=0.92,
                bbox=BoundingBox(x_min=5.0, y_min=5.0, x_max=180.0, y_max=40.0),
                block_type="paragraph",
            ),
        ]
        pages = [
            OCRPageResult(
                page_number=1,
                text="\n".join([b.text for b in blocks]),
                confidence=0.92,
                blocks=blocks,
            )
        ]
        return OCRResult(
            text="\n".join([p.text for p in pages]),
            confidence=0.92,
            engine_used=self.engine_name,
            pages=pages,
            metadata={"angle_detected": 0.0},
        )
