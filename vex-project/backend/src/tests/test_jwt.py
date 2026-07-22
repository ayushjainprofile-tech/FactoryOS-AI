"""Unit tests for JWT creation, claims verification, expiration, and revocation."""

import pytest
import time
from src.security.jwt import (
    create_jwt_token,
    decode_and_verify_jwt,
    is_token_revoked,
    revoke_token,
)


def test_jwt_creation_and_verification():
    token = create_jwt_token(
        user_id="user_123",
        tenant_id="tenant_abc",
        roles=["Engineer"],
        plant_id="plant_01",
        department_id="dept_maint",
    )
    claims = decode_and_verify_jwt(token)
    assert claims.sub == "user_123"
    assert claims.tenant_id == "tenant_abc"
    assert claims.plant_id == "plant_01"
    assert claims.department_id == "dept_maint"
    assert "Engineer" in claims.roles


def test_jwt_expiration():
    token = create_jwt_token(
        user_id="user_123",
        tenant_id="tenant_abc",
        roles=["Technician"],
        expires_delta_seconds=-10,  # Expired 10 seconds ago
    )
    with pytest.raises(ValueError, match="Token has expired"):
        decode_and_verify_jwt(token)


def test_jwt_revocation():
    token = create_jwt_token(
        user_id="user_123",
        tenant_id="tenant_abc",
        roles=["Technician"],
    )
    claims = decode_and_verify_jwt(token)
    revoke_token(claims.jti)
    assert is_token_revoked(claims.jti) is True

    with pytest.raises(ValueError, match="Token has been revoked"):
        decode_and_verify_jwt(token)
