"""Secrets Accessor & Rotation Isolation Layer."""

import os
from typing import Optional


class SecretManager:
    """Accesses secrets strictly from environment context without leaking into code."""

    @staticmethod
    def get_secret(key: str, default: Optional[str] = None) -> Optional[str]:
        val = os.getenv(key, default)
        if not val and not default:
            return None
        return val

    @staticmethod
    def mask_secret(secret: Optional[str]) -> str:
        if not secret:
            return ""
        if len(secret) <= 4:
            return "****"
        return f"{secret[:2]}...{secret[-2:]}"
