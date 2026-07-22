"""Environment detection and normalization module."""

import os
from enum import Enum


class Environment(str, Enum):
    DEVELOPMENT = "development"
    TESTING = "testing"
    STAGING = "staging"
    PRODUCTION = "production"

    @property
    def is_development(self) -> bool:
        return self == Environment.DEVELOPMENT

    @property
    def is_testing(self) -> bool:
        return self == Environment.TESTING

    @property
    def is_staging(self) -> bool:
        return self == Environment.STAGING

    @property
    def is_production(self) -> bool:
        return self == Environment.PRODUCTION

    @property
    def is_debug(self) -> bool:
        return self in (Environment.DEVELOPMENT, Environment.TESTING)


def get_environment() -> Environment:
    """Detect and normalize environment name from APP_ENV or ENV environment variables."""
    raw_env = os.getenv("APP_ENV") or os.getenv("ENV") or "development"
    normalized = raw_env.strip().lower()

    mapping = {
        "dev": Environment.DEVELOPMENT,
        "development": Environment.DEVELOPMENT,
        "test": Environment.TESTING,
        "testing": Environment.TESTING,
        "stage": Environment.STAGING,
        "staging": Environment.STAGING,
        "prod": Environment.PRODUCTION,
        "production": Environment.PRODUCTION,
    }

    return mapping.get(normalized, Environment.DEVELOPMENT)
