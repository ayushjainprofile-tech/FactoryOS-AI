"""Tests for Gemini Vision Adapter (remote opt-in guard)."""

import pytest
from src.ocr.exceptions import RemoteVisionDisabledError
from src.ocr.gemini_vision_adapter import GeminiVisionAdapter


@pytest.mark.asyncio
async def test_gemini_vision_disabled_by_default():
    adapter = GeminiVisionAdapter()
    with pytest.raises(RemoteVisionDisabledError):
        await adapter.process(b"image bytes", "photo.jpg")


@pytest.mark.asyncio
async def test_gemini_vision_enabled_opt_in():
    adapter = GeminiVisionAdapter()
    res = await adapter.process(b"image bytes", "photo.jpg", options={"allow_remote_vision": True})
    assert res.engine_used == "gemini_vision"
    assert res.remote_vision_used is True
    assert res.confidence == 0.99
