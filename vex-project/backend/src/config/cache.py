"""Cache Settings configuration."""

from typing import Dict, Any


def get_cache_config(env: str) -> Dict[str, Any]:
    return {"default_ttl": 300 if env != "production" else 3600, "namespace": env}
