"""Structured JSON Formatter."""

import json
from datetime import datetime
from typing import Any, Dict
from src.logging.context import get_log_context
from src.logging.redaction import RedactionEngine


class JSONFormatter:
    """Formats log payload into a standardized structured JSON format."""

    def __init__(self) -> None:
        self.redaction_engine = RedactionEngine()

    def format_log(
        self,
        severity: str,
        event_type: str,
        message: str,
        payload: Dict[str, Any],
    ) -> str:
        ctx = get_log_context()
        combined_payload = {**ctx, **payload}
        redacted_payload = self.redaction_engine.redact_dict(combined_payload)

        log_record = {
            "timestamp": datetime.utcnow().isoformat(),
            "severity": severity.upper(),
            "event_type": event_type,
            "message": message,
            "payload": redacted_payload,
        }
        return json.dumps(log_record)
