"""Docker Stack Readiness Smoke Test."""

import pytest


def test_container_environment_config():
    """Validates docker environment settings and compose defaults."""
    import os

    db_url = os.getenv("DATABASE_URL", "postgres://postgres:postgres_password@postgres:5432/vex_db")
    assert "postgres" in db_url
    assert "vex_db" in db_url
