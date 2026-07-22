"""Redaction Engine — masks sensitive tokens, passwords, and PII."""

import re
from typing import Any, Dict


class RedactionEngine:
    """Redacts sensitive values (passwords, tokens, API keys) from log payloads."""

    REDACTED_TEXT = "[REDACTED]"
    SENSITIVE_KEYS = {
        "password",
        "token",
        "access_token",
        "api_key",
        "secret",
        "authorization",
        "jwt",
    }

    def redact_dict(self, data: Dict[str, Any]) -> Dict[str, Any]:
        redacted = {}
        for key, val in data.items():
            if key.lower() in self.SENSITIVE_KEYS:
                redacted[key] = self.REDACTED_TEXT
            elif isinstance(val, dict):
                redacted[key] = self.redact_dict(val)
            elif isinstance(val, str) and ("bearer " in val.lower() or "eyJ" in val):
                redacted[key] = self.REDACTED_TEXT
            else:
                redacted[key] = val
        return redacted
