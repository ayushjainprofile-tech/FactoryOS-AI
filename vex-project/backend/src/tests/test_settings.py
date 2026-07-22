"""Tests for Environment Settings Resolution."""

import os
import pytest
from src.config.settings import load_settings


def test_development_environment_resolution(monkeypatch):
    monkeypatch.setenv("ENV", "development")
    settings = load_settings()
    assert settings.env == "development"
    assert settings.debug is True


def test_testing_environment_isolation(monkeypatch):
    monkeypatch.setenv("ENV", "testing")
    settings = load_settings()
    assert settings.env == "testing"
    assert "memory" in settings.database_url
