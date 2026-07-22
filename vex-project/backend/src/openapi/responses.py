"""Common API Error Responses mapping dictionary."""

from typing import Dict, Any
from src.api.schemas.errors import APIErrorResponse


def get_standard_error_responses() -> Dict[int, Dict[str, Any]]:
    """Returns standard OpenAPI schema bindings for typical status codes."""
    return {
        400: {"model": APIErrorResponse, "description": "Invalid parameter request payload"},
        401: {"model": APIErrorResponse, "description": "Authentication token missing or invalid"},
        403: {"model": APIErrorResponse, "description": "RBAC permission authorization denied"},
        404: {"model": APIErrorResponse, "description": "Requested resource not found"},
        429: {"model": APIErrorResponse, "description": "Rate limit quota exceeded"},
        500: {"model": APIErrorResponse, "description": "Internal server processing exception"},
    }
