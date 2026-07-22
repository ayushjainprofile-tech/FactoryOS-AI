"""OCR Router — engine selection, fallback execution, and pipeline integration."""

from typing import Any, Dict, Optional
from src.ocr.base_ocr import BaseOCREngine
from src.ocr.confidence import OCRConfidenceEngine
from src.ocr.docling_adapter import DoclingAdapter
from src.ocr.exceptions import OCRError, RemoteVisionDisabledError
from src.ocr.gemini_vision_adapter import GeminiVisionAdapter
from src.ocr.models import OCRResult
from src.ocr.paddleocr_adapter import PaddleOCRAdapter
from src.ocr.postprocessor import OCRPostprocessor
from src.ocr.preprocessor import OCRPreprocessor
from src.ocr.tesseract_adapter import TesseractAdapter


class OCRRouter:
    """Routes OCR tasks to appropriate engines with confidence evaluation and fallback."""

    def __init__(self) -> None:
        self.docling = DoclingAdapter()
        self.paddle = PaddleOCRAdapter()
        self.tesseract = TesseractAdapter()
        self.gemini = GeminiVisionAdapter()

        self.preprocessor = OCRPreprocessor()
        self.postprocessor = OCRPostprocessor()
        self.confidence_engine = OCRConfidenceEngine()

    def select_engine(self, filename: str, options: Optional[Dict[str, Any]] = None) -> BaseOCREngine:
        options = options or {}
        override_engine = options.get("engine_override")
        if override_engine:
            if override_engine == "docling":
                return self.docling
            elif override_engine == "paddleocr":
                return self.paddle
            elif override_engine == "tesseract":
                return self.tesseract
            elif override_engine == "gemini_vision":
                return self.gemini

        ext = filename.split(".")[-1].lower() if "." in filename else ""
        if ext == "pdf":
            return self.docling
        elif ext in ("png", "jpg", "jpeg", "tiff", "bmp"):
            return self.paddle
        else:
            return self.tesseract

    async def route_and_process(
        self,
        file_bytes: bytes,
        filename: str,
        options: Optional[Dict[str, Any]] = None,
    ) -> OCRResult:
        options = options or {}
        processed_bytes, ocr_needed = self.preprocessor.preprocess(file_bytes, filename)

        engine = self.select_engine(filename, options)
        result: Optional[OCRResult] = None

        try:
            result = await engine.process(processed_bytes, filename, options)
        except Exception:
            # Fallback to Tesseract local
            result = await self.tesseract.process(processed_bytes, filename, options)

        # Confidence check — if low and allow_remote_vision enabled, fallback to Gemini Vision
        if not self.confidence_engine.is_confidence_acceptable(result):
            if options.get("allow_remote_vision", False):
                try:
                    result = await self.gemini.process(processed_bytes, filename, options)
                except RemoteVisionDisabledError:
                    pass

        result = self.postprocessor.process(result)
        result.ocr_needed = ocr_needed
        return result
