"""Development Environment Settings Overrides."""

from src.config.base import BaseSettings


class DevelopmentSettings(BaseSettings):
    env: str = "development"
    debug: bool = True
