"""Centralized Configuration Router — Fail-fast environment settings resolver."""

import os
from typing import Union
from src.config.base import BaseSettings
from src.config.development import DevelopmentSettings
from src.config.production import ProductionSettings
from src.config.testing import TestingSettings


def load_settings() -> Union[DevelopmentSettings, TestingSettings, ProductionSettings]:
    """Loads and returns settings instance matching active environment variable 'ENV'."""
    env = os.getenv("ENV", "development").lower()

    # Load base configuration args from env
    config_args = {
        "database_url": os.getenv("DATABASE_URL", "postgres://postgres:postgres_password@localhost:5432/vex_db"),
        "redis_url": os.getenv("REDIS_URL", "redis://localhost:6379/0"),
        "neo4j_url": os.getenv("NEO4J_URL", "bolt://localhost:7687"),
        "chroma_host": os.getenv("CHROMA_HOST", "localhost"),
        "chroma_port": int(os.getenv("CHROMA_PORT", "8000")),
        "gemini_api_key": os.getenv("GEMINI_API_KEY", ""),
    }

    if env == "production":
        settings = ProductionSettings(**config_args)
        settings.validate_production()  # Fail fast check
        return settings
    elif env == "testing":
        # Force testing overrides to prevent accidental DB truncation
        config_args["database_url"] = "sqlite:///:memory:"
        config_args["redis_url"] = "redis://localhost:6379/15"
        return TestingSettings(**config_args)
    else:
        return DevelopmentSettings(**config_args)


# Global settings singleton resolved at startup
global_settings = load_settings()
