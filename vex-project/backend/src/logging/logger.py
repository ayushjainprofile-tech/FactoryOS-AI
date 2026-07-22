"""Structured App Logger — primary logging engine."""

from typing import Any, Dict, Optional
from src.logging.event_types import LogEventType
from src.logging.formatters import JSONFormatter


class StructuredLogger:
    """Primary application structured logger."""

    def __init__(self, component_name: str = "backend") -> None:
        self.component_name = component_name
        self.formatter = JSONFormatter()

    def _log(
        self,
        severity: str,
        event_type: str,
        message: str,
        payload: Optional[Dict[str, Any]] = None,
    ) -> str:
        payload = payload or {}
        payload["component"] = self.component_name
        formatted_json = self.formatter.format_log(
            severity, event_type, message, payload
        )
        # Writes formatted log to output stream
        return formatted_json

    def info(
        self,
        message: str,
        event_type: str = LogEventType.API_REQUEST.value,
        payload: Optional[Dict[str, Any]] = None,
    ) -> str:
        return self._log("INFO", event_type, message, payload)

    def warning(
        self,
        message: str,
        event_type: str = LogEventType.ERROR.value,
        payload: Optional[Dict[str, Any]] = None,
    ) -> str:
        return self._log("WARNING", event_type, message, payload)

    def error(
        self,
        message: str,
        event_type: str = LogEventType.ERROR.value,
        payload: Optional[Dict[str, Any]] = None,
    ) -> str:
        return self._log("ERROR", event_type, message, payload)
