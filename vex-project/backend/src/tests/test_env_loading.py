"""Tests for Environment Variable Loading."""

import pytest
from src.config.settings import load_settings


def test_custom_env_variable_loading(monkeypatch):
    monkeypatch.setenv("ENV", "development")
    monkeypatch.setenv("DATABASE_URL", "postgres://test_user:pass@remote:5432/test_db")

    settings = load_settings()
    assert settings.database_url == "postgres://test_user:pass@remote:5432/test_db"
