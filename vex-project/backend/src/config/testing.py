"""Testing Environment Settings Overrides."""

from src.config.base import BaseSettings


class TestingSettings(BaseSettings):
    env: str = "testing"
    debug: bool = True
    database_url: str = "sqlite:///:memory:"
    redis_url: str = "redis://localhost:6379/15"
