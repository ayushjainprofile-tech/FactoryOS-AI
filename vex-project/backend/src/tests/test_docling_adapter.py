"""Tests for Docling Adapter."""

import pytest
from src.ocr.docling_adapter import DoclingAdapter


@pytest.mark.asyncio
async def test_docling_process():
    adapter = DoclingAdapter()
    res = await adapter.process(b"%PDF content", "spec.pdf")
    assert res.engine_used == "docling"
    assert len(res.pages) == 1
    assert res.pages[0].blocks[0].block_type == "heading"
