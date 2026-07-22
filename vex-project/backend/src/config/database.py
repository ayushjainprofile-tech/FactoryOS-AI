"""Database Settings configuration."""

from typing import Dict, Any


def get_db_pool_settings(env: str) -> Dict[str, Any]:
    if env == "production":
        return {"pool_size": 20, "max_overflow": 10, "timeout": 30}
    return {"pool_size": 5, "max_overflow": 2, "timeout": 10}
