"""Tests for OpenAPI Documentation Configurations."""

import pytest
from src.api.docs.openapi_metadata import get_openapi_metadata
from src.api.docs.swagger_config import SWAGGER_UI_CONFIG
from src.api.docs.redoc_config import REDOC_UI_CONFIG


def test_openapi_app_metadata():
    meta = get_openapi_metadata()
    assert "Vex Analytics" in meta["title"]
    assert meta["version"] == "1.0.0"


def test_swagger_and_redoc_ui_paths():
    assert SWAGGER_UI_CONFIG["docs_url"] == "/docs"
    assert REDOC_UI_CONFIG["redoc_url"] == "/redoc"
