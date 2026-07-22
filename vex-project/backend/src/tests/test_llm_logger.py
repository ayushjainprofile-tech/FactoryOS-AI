"""Tests for LLM Logger."""

import json
import pytest
from src.logging.llm_logger import LLMLogger


def test_llm_logger():
    logger = LLMLogger()
    raw = logger.log_call(
        model_name="gpt-4o",
        prompt_version="v2.1",
        latency_ms=340.5,
        prompt_tokens=512,
        completion_tokens=128,
    )

    data = json.loads(raw)
    assert data["event_type"] == "llm_call"
    assert data["payload"]["model_name"] == "gpt-4o"
    assert data["payload"]["prompt_tokens"] == 512
    assert data["payload"]["completion_tokens"] == 128
