"""Tests for Security Logger."""

import json
import pytest
from src.logging.security_logger import SecurityLogger


def test_security_logger_auth_failure():
    logger = SecurityLogger()
    raw = logger.log_auth(
        tenant_id="t1",
        actor_id="hacker@bad.com",
        success=False,
        message="Invalid password attempt",
    )

    data = json.loads(raw)
    assert data["severity"] == "WARNING"
    assert data["event_type"] == "security_auth"
    assert data["payload"]["success"] is False
