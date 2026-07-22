"""Tests for Log Redaction."""

import pytest
from src.logging.redaction import RedactionEngine


def test_log_redaction_sensitive_keys():
    engine = RedactionEngine()
    payload = {
        "user_id": "u1",
        "password": "supersecretpassword123",
        "api_key": "sk-12345",
        "nested": {
            "token": "eyJhbGciOi...",
            "public_key": "123456",
        },
    }

    redacted = engine.redact_dict(payload)
    assert redacted["user_id"] == "u1"
    assert redacted["password"] == "[REDACTED]"
    assert redacted["api_key"] == "[REDACTED]"
    assert redacted["nested"]["token"] == "[REDACTED]"
    assert redacted["nested"]["public_key"] == "123456"
overrides = {"authorization": "Bearer secret"}
redacted_auth = engine.redact_dict(overrides)
assert redacted_auth["authorization"] == "[REDACTED]"
