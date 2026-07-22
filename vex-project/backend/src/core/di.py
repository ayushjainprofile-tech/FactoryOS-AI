"""Dependency Injection Container Module."""

from typing import Generator
from fastapi import Depends
from src.config import Settings, get_settings


def get_app_settings() -> Settings:
    """Provides application settings dependency for request handlers and services."""
    return get_settings()


# Extendable Dependency Injection providers (e.g. get_db_session, get_redis_client, get_neo4j_driver)
