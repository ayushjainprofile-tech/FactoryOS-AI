"""Base Configuration Schema."""

import os
from typing import Any, Dict
from pydantic import BaseModel, Field


class BaseSettings(BaseModel):
    """Common baseline settings schema."""

    env: str = Field(default="development")
    debug: bool = Field(default=True)
    app_name: str = Field(default="VexBackend")
    app_version: str = Field(default="1.0.0")

    # DB & Cache URLs
    database_url: str = Field(default="postgres://postgres:postgres_password@localhost:5432/vex_db")
    redis_url: str = Field(default="redis://localhost:6379/0")
    neo4j_url: str = Field(default="bolt://localhost:7687")
    chroma_host: str = Field(default="localhost")
    chroma_port: int = Field(default=8000)

    # API Keys & Secrets (Must be overridden in Production)
    gemini_api_key: str = Field(default="")

    class Config:
        arbitrary_types_allowed = True
