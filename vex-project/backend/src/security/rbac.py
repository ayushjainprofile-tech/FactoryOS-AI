"""Role-based access control (RBAC) verification module."""

from typing import List
from src.security.jwt import TokenClaims
from src.security.permissions import get_permissions_for_roles


class PermissionDenied(Exception):
    """Raised when a user lacks required permission."""

    pass


def check_has_permission(claims: TokenClaims, required_permission: str) -> None:
    """Verifies user's active permissions contain required_permission code."""
    user_permissions = get_permissions_for_roles(claims.roles)
    if required_permission not in user_permissions:
        raise PermissionDenied(
            f"Permission Denied: Required permission '{required_permission}' not granted to roles {claims.roles}."
        )


def check_has_any_role(claims: TokenClaims, allowed_roles: List[str]) -> None:
    """Verifies user has at least one of the specified allowed roles."""
    if not any(role in claims.roles for role in allowed_roles):
        raise PermissionDenied(
            f"Permission Denied: User roles {claims.roles} do not contain required roles {allowed_roles}."
        )
