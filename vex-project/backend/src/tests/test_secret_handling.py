"""Tests for Secret Handling and Validation."""

import pytest
from src.config.production import ProductionSettings
from src.config.secrets import SecretManager
from src.config.settings import load_settings


def test_production_strict_credential_validation():
    # Production with localhost target should fail validation
    prod_localhost = ProductionSettings(
        database_url="postgres://postgres:postgres_password@localhost:5432/vex_db",
        gemini_api_key="key",
    )
    with pytest.raises(ValueError) as exc:
        prod_localhost.validate_production()
    assert "localhost" in str(exc.value)

    # Production with default credentials should fail validation
    prod_default_creds = ProductionSettings(
        database_url="postgres://postgres:postgres_password@remote:5432/vex_db",
        gemini_api_key="key",
    )
    with pytest.raises(ValueError) as exc:
        prod_default_creds.validate_production()
    assert "default database credentials" in str(exc.value)

    # Production with missing API key should fail validation
    prod_no_key = ProductionSettings(
        database_url="postgres://postgres:new_password@remote:5432/vex_db",
        gemini_api_key="",
    )
    with pytest.raises(ValueError) as exc:
        prod_no_key.validate_production()
    assert "GEMINI_API_KEY" in str(exc.value)


def test_secret_masking_utility():
    assert SecretManager.mask_secret("sk-proj-123456789") == "sk...89"
    assert SecretManager.mask_secret("") == ""
    assert SecretManager.mask_secret("abc") == "****"
