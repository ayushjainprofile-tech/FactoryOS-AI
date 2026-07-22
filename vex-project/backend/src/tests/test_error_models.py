"""Tests for API Error Models and Status Code bindings."""

import pytest
from src.api.schemas.errors import APIErrorDetail, APIErrorResponse
from src.openapi.error_codes import APIErrorCode
from src.openapi.responses import get_standard_error_responses


def test_standard_error_response_serialization():
    detail = APIErrorDetail(
        code=APIErrorCode.INVALID_PARAMETER,
        message="The query parameter was not formatted correctly.",
        details={"parameter": "top_k"},
        trace_id="trace_123",
    )
    resp = APIErrorResponse(error=detail)

    assert resp.error.code == "INVALID_PARAMETER"
    assert resp.error.trace_id == "trace_123"


def test_openapi_error_responses_mapping():
    mapping = get_standard_error_responses()
    assert 400 in mapping
    assert 403 in mapping
    assert 500 in mapping
    assert mapping[400]["model"] == APIErrorResponse
