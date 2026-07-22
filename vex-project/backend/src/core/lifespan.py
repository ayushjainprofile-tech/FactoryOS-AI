"""Application Lifespan Context Manager."""

from contextlib import asynccontextmanager
from typing import AsyncGenerator
from fastapi import FastAPI
import logging

from src.config import get_settings

logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    """Manages application startup and shutdown lifespan events."""
    settings = get_settings()
    logger.info(f"Starting {settings.app_name} v{settings.app_version} [{settings.app_env.value}]")

    # 1. Startup Logic: Database pools, Redis connections, Neo4j drivers
    try:
        logger.info("Initializing infrastructure connection pools...")
        # Connection pools setup can be triggered here
        yield
    finally:
        # 2. Shutdown Logic: Drain pools & disconnect drivers safely
        logger.info("Closing infrastructure connection pools...")
        logger.info("Application shutdown complete.")
