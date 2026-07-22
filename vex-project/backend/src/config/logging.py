"""Logging Configuration Adapter."""

from typing import Dict, Any


def get_logging_config(env: str) -> Dict[str, Any]:
    """Returns environment-tailored logging options."""
    if env == "development":
        return {"level": "DEBUG", "format": "human_readable", "show_tracebacks": True}
    elif env == "testing":
        return {"level": "WARNING", "format": "json", "show_tracebacks": False}
    else:  # production
        return {"level": "INFO", "format": "json", "show_tracebacks": False}
