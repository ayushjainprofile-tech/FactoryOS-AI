"""OCR Confidence Engine — computes page and document-level confidence metrics."""

from typing import List
from src.ocr.models import OCRPageResult, OCRResult


class OCRConfidenceEngine:
    """Evaluates OCR extraction quality and computes threshold metrics."""

    def __init__(self, min_threshold: float = 0.70) -> None:
        self.min_threshold = min_threshold

    def calculate_document_confidence(self, pages: List[OCRPageResult]) -> float:
        if not pages:
            return 0.0
        scores = [p.confidence for p in pages]
        return sum(scores) / len(scores)

    def is_confidence_acceptable(self, result: OCRResult) -> bool:
        return result.confidence >= self.min_threshold
