"""Base OCR Engine Abstract Interface."""

from abc import ABC, abstractmethod
from typing import Any, Dict, Optional
from src.ocr.models import OCRResult


class BaseOCREngine(ABC):
    """Abstract interface for all OCR engines (Docling, PaddleOCR, Tesseract, Gemini Vision)."""

    @property
    @abstractmethod
    def engine_name(self) -> str:
        """Name of the OCR engine."""
        pass

    @abstractmethod
    async def process(
        self,
        file_bytes: bytes,
        filename: str,
        options: Optional[Dict[str, Any]] = None,
    ) -> OCRResult:
        """Process document/image bytes and return structured OCR result."""
        pass
