"""Tests for Tesseract Adapter."""

import pytest
from src.ocr.tesseract_adapter import TesseractAdapter


@pytest.mark.asyncio
async def test_tesseract_process():
    adapter = TesseractAdapter()
    res = await adapter.process(b"text bytes", "note.txt")
    assert res.engine_used == "tesseract"
    assert res.confidence == 0.85
