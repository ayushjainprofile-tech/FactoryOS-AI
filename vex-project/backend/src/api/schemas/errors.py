"""Unified API Error Schemas."""

from typing import Any, Dict, Optional
from pydantic import BaseModel, Field
from src.openapi.error_codes import APIErrorCode


class APIErrorDetail(BaseModel):
    """Structured Error Response payload model."""

    code: APIErrorCode = Field(..., description="Canonical machine-readable error code")
    message: str = Field(..., description="Human-readable error description")
    details: Optional[Dict[str, Any]] = Field(default=None, description="Optional diagnostic context")
    trace_id: Optional[str] = Field(default=None, description="Correlation trace ID")


class APIErrorResponse(BaseModel):
    """Standardized API Error Response wrapper."""

    error: APIErrorDetail
