"""Tests for OCR Confidence Engine."""

import pytest
from src.ocr.confidence import OCRConfidenceEngine
from src.ocr.models import OCRPageResult, OCRResult


def test_calculate_document_confidence():
    engine = OCRConfidenceEngine()
    pages = [
        OCRPageResult(page_number=1, text="p1", confidence=0.90),
        OCRPageResult(page_number=2, text="p2", confidence=0.80),
    ]
    avg = engine.calculate_document_confidence(pages)
    assert avg == 0.85


def test_is_confidence_acceptable():
    engine = OCRConfidenceEngine(min_threshold=0.80)
    res_high = OCRResult(text="t", confidence=0.85, engine_used="docling")
    res_low = OCRResult(text="t", confidence=0.75, engine_used="tesseract")

    assert engine.is_confidence_acceptable(res_high) is True
    assert engine.is_confidence_acceptable(res_low) is False
