"""Logging Thread/Coro Context — propagates request_id, trace_id, and tenant_id."""

import contextvars
from typing import Any, Dict, Optional

# Context variable to hold context dictionary
_context: contextvars.ContextVar[Dict[str, Any]] = contextvars.ContextVar(
    "log_context", default={}
)


def get_log_context() -> Dict[str, Any]:
    return _context.get()


def set_log_context(ctx: Dict[str, Any]) -> None:
    _context.set(ctx)


def update_log_context(updates: Dict[str, Any]) -> None:
    current = _context.get().copy()
    current.update(updates)
    _context.set(current)


def clear_log_context() -> None:
    _context.set({})
