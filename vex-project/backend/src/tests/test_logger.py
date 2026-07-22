"""Tests for Structured Logger & Context Propagation."""

import json
import pytest
from src.logging.context import clear_log_context, update_log_context
from src.logging.logger import StructuredLogger


def test_structured_json_logging():
    clear_log_context()
    update_log_context({"trace_id": "tr_100", "tenant_id": "tenant_A"})

    logger = StructuredLogger("test_component")
    raw_json = logger.info("API endpoint hit", payload={"route": "/health"})

    data = json.loads(raw_json)
    assert data["severity"] == "INFO"
    assert data["message"] == "API endpoint hit"
    assert data["payload"]["trace_id"] == "tr_100"
    assert data["payload"]["tenant_id"] == "tenant_A"
    assert data["payload"]["route"] == "/health"
