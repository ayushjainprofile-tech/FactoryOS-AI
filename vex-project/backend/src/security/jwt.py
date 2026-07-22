"""JWT access and refresh token management module."""

import base64
import hashlib
import hmac
import json
import time
from typing import Any, Dict, List, Optional, Set
from pydantic import BaseModel, Field

from src.config import get_settings


class TokenClaims(BaseModel):
    """Claims embedded within signed JWT tokens."""

    sub: str  # User ID
    tenant_id: str
    plant_id: Optional[str] = None
    department_id: Optional[str] = None
    roles: List[str] = Field(default_factory=list)
    token_type: str = "access"  # "access" or "refresh"
    exp: int
    iat: int
    jti: str  # Unique token ID


# Simple in-memory revocation blacklist for invalidation testing/revocation
_REVOKED_JTIS: Set[str] = set()


def revoke_token(jti: str) -> None:
    """Blacklist a token ID to invalidate it before expiration."""
    _REVOKED_JTIS.add(jti)


def is_token_revoked(jti: str) -> bool:
    """Check if token ID is blacklisted."""
    return jti in _REVOKED_JTIS


def _b64encode(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).rstrip(b"=").decode("utf-8")


def _b64decode(data: str) -> bytes:
    padding = 4 - (len(data) % 4)
    if padding != 4:
        data += "=" * padding
    return base64.urlsafe_b64decode(data.encode("utf-8"))


def create_jwt_token(
    user_id: str,
    tenant_id: str,
    roles: List[str],
    plant_id: Optional[str] = None,
    department_id: Optional[str] = None,
    token_type: str = "access",
    expires_delta_seconds: Optional[int] = None,
) -> str:
    """Generates a signed JWT token containing multi-tenant and scope claims."""
    settings = get_settings()
    now = int(time.time())

    if expires_delta_seconds is None:
        if token_type == "refresh":
            expires_delta_seconds = settings.jwt.refresh_token_expire_days * 86400
        else:
            expires_delta_seconds = settings.jwt.access_token_expire_minutes * 60

    exp = now + expires_delta_seconds
    jti = f"{user_id}:{now}:{hashlib.md5(str(now).encode()).hexdigest()[:8]}"

    header = {"alg": settings.jwt.algorithm, "typ": "JWT"}
    payload = {
        "sub": user_id,
        "tenant_id": tenant_id,
        "plant_id": plant_id,
        "department_id": department_id,
        "roles": roles,
        "token_type": token_type,
        "exp": exp,
        "iat": now,
        "jti": jti,
    }

    header_b64 = _b64encode(json.dumps(header).encode("utf-8"))
    payload_b64 = _b64encode(json.dumps(payload).encode("utf-8"))
    signing_input = f"{header_b64}.{payload_b64}"

    secret = settings.jwt.secret_key.get_secret_value().encode("utf-8")
    signature = hmac.new(secret, signing_input.encode("utf-8"), hashlib.sha256).digest()
    signature_b64 = _b64encode(signature)

    return f"{signing_input}.{signature_b64}"


def decode_and_verify_jwt(token: str) -> TokenClaims:
    """Verifies signature, expiration, and revocation status of a JWT token."""
    settings = get_settings()
    try:
        parts = token.split(".")
        if len(parts) != 3:
            raise ValueError("Invalid token format")

        header_b64, payload_b64, signature_b64 = parts
        signing_input = f"{header_b64}.{payload_b64}"

        secret = settings.jwt.secret_key.get_secret_value().encode("utf-8")
        expected_sig = hmac.new(secret, signing_input.encode("utf-8"), hashlib.sha256).digest()
        actual_sig = _b64decode(signature_b64)

        if not hmac.compare_digest(expected_sig, actual_sig):
            raise ValueError("Invalid token signature")

        payload = json.loads(_b64decode(payload_b64).decode("utf-8"))
        claims = TokenClaims(**payload)

        # Expiration check
        if claims.exp < int(time.time()):
            raise ValueError("Token has expired")

        # Revocation check
        if is_token_revoked(claims.jti):
            raise ValueError("Token has been revoked")

        return claims
    except Exception as exc:
        raise ValueError(f"JWT Verification Failed: {str(exc)}") from exc
