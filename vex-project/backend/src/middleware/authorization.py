"""Authorization middleware & FastAPI security guards for JWT, RBAC, and scope enforcement."""

from typing import Callable, List, Optional
from fastapi import Depends, Header, HTTPException, status
from src.security.jwt import TokenClaims, decode_and_verify_jwt
from src.security.rbac import PermissionDenied, check_has_any_role, check_has_permission
from src.security.tenant import ScopeAccessViolation, TenantScopeViolation, validate_department_access, validate_plant_access, validate_tenant_access


async def get_current_user_claims(authorization: Optional[str] = Header(None)) -> TokenClaims:
    """Extracts and verifies JWT claims from the Authorization header."""
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing or malformed Authorization header.",
            headers={"WWW-Authenticate": "Bearer"},
        )
    token = authorization.split(" ")[1]
    try:
        claims = decode_and_verify_jwt(token)
        if claims.token_type != "access":
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token type.")
        return claims
    except ValueError as err:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(err)) from err


def require_permission(required_permission: str) -> Callable:
    """Factory dependency enforcing explicit permission code."""

    async def permission_guard(claims: TokenClaims = Depends(get_current_user_claims)) -> TokenClaims:
        try:
            check_has_permission(claims, required_permission)
            return claims
        except PermissionDenied as err:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=str(err)) from err

    return permission_guard


def require_roles(allowed_roles: List[str]) -> Callable:
    """Factory dependency enforcing explicit role membership."""

    async def role_guard(claims: TokenClaims = Depends(get_current_user_claims)) -> TokenClaims:
        try:
            check_has_any_role(claims, allowed_roles)
            return claims
        except PermissionDenied as err:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=str(err)) from err

    return role_guard


def enforce_tenant_and_scope(
    target_tenant_id: str,
    target_plant_id: Optional[str] = None,
    target_department_id: Optional[str] = None,
) -> Callable:
    """Factory dependency enforcing tenant, plant, and department scope boundaries."""

    async def scope_guard(claims: TokenClaims = Depends(get_current_user_claims)) -> TokenClaims:
        try:
            validate_tenant_access(claims, target_tenant_id)
            validate_plant_access(claims, target_plant_id)
            validate_department_access(claims, target_department_id)
            return claims
        except TenantScopeViolation as err:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=str(err)) from err
        except ScopeAccessViolation as err:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=str(err)) from err

    return scope_guard
