"""Tests for OCR Router engine selection and fallback."""

import pytest
from src.ocr.ocr_router import OCRRouter


@pytest.mark.asyncio
async def test_engine_selection_pdf():
    router = OCRRouter()
    engine = router.select_engine("manual.pdf")
    assert engine.engine_name == "docling"


@pytest.mark.asyncio
async def test_engine_selection_image():
    router = OCRRouter()
    engine = router.select_engine("dial.png")
    assert engine.engine_name == "paddleocr"


@pytest.mark.asyncio
async def test_engine_override():
    router = OCRRouter()
    engine = router.select_engine("manual.pdf", {"engine_override": "tesseract"})
    assert engine.engine_name == "tesseract"


@pytest.mark.asyncio
async def test_route_and_process():
    router = OCRRouter()
    res = await router.route_and_process(b"%PDF content", "doc.pdf")
    assert res.engine_used == "docling"
    assert res.confidence > 0.9
