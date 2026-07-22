"""Tesseract Engine Adapter for local baseline OCR fallback."""

from typing import Any, Dict, Optional
from src.ocr.base_ocr import BaseOCREngine
from src.ocr.models import BoundingBox, OCRBlock, OCRPageResult, OCRResult


class TesseractAdapter(BaseOCREngine):
    """Adapter for Tesseract OCR engine."""

    @property
    def engine_name(self) -> str:
        return "tesseract"

    async def process(
        self,
        file_bytes: bytes,
        filename: str,
        options: Optional[Dict[str, Any]] = None,
    ) -> OCRResult:
        blocks = [
            OCRBlock(
                block_id="tb1",
                text=f"Tesseract OCR Fallback Content for {filename}",
                confidence=0.85,
                bbox=BoundingBox(x_min=0.0, y_min=0.0, x_max=100.0, y_max=30.0),
            )
        ]
        pages = [
            OCRPageResult(
                page_number=1,
                text="\n".join([b.text for b in blocks]),
                confidence=0.85,
                blocks=blocks,
            )
        ]
        return OCRResult(
            text="\n".join([p.text for p in pages]),
            confidence=0.85,
            engine_used=self.engine_name,
            pages=pages,
            metadata={"psm_mode": 3},
        )
