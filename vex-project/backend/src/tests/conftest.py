"""Pytest fixtures and configuration."""

import pytest
from src.logging.context import clear_log_context, update_log_context


@pytest.fixture(autouse=True)
def setup_log_context():
    clear_log_context()
    update_log_context({"trace_id": "test_trace_id", "tenant_id": "test_tenant_id"})
    yield
    clear_log_context()
