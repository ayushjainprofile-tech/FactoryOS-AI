"""Tests for PaddleOCR Adapter."""

import pytest
from src.ocr.paddleocr_adapter import PaddleOCRAdapter


@pytest.mark.asyncio
async def test_paddleocr_process():
    adapter = PaddleOCRAdapter()
    res = await adapter.process(b"image bytes", "scan.jpg")
    assert res.engine_used == "paddleocr"
    assert res.confidence >= 0.90
