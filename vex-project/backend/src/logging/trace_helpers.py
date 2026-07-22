"""Correlation and Trace ID helpers."""

import uuid
from typing import Dict
from src.logging.context import update_log_context


def init_trace_context(tenant_id: str, user_id: str) -> Dict[str, str]:
    """Generates trace and correlation IDs for context propagation."""
    trace_id = str(uuid.uuid4())
    span_id = str(uuid.uuid4())
    ctx = {
        "trace_id": trace_id,
        "span_id": span_id,
        "tenant_id": tenant_id,
        "user_id": user_id,
    }
    update_log_context(ctx)
    return ctx
