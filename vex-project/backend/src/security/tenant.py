"""Multi-tenant, Plant, and Department scope validation helpers."""

from typing import Optional
from src.security.jwt import TokenClaims


class TenantScopeViolation(Exception):
    """Raised when cross-tenant access attempt is detected."""

    pass


class ScopeAccessViolation(Exception):
    """Raised when plant or department level scope constraint fails."""

    pass


def validate_tenant_access(claims: TokenClaims, target_tenant_id: str) -> None:
    """Enforces strict tenant isolation boundary."""
    if claims.tenant_id != target_tenant_id:
        raise TenantScopeViolation(
            f"Tenant Isolation Violation: Token tenant '{claims.tenant_id}' cannot access target tenant '{target_tenant_id}'."
        )


def validate_plant_access(claims: TokenClaims, target_plant_id: Optional[str]) -> None:
    """Enforces plant scope boundaries (Admins and Executives bypass plant-specific constraints)."""
    if "Admin" in claims.roles or "Executive" in claims.roles:
        return
    if target_plant_id and claims.plant_id and claims.plant_id != target_plant_id:
        raise ScopeAccessViolation(
            f"Plant Scope Violation: User plant '{claims.plant_id}' is unauthorized to access plant '{target_plant_id}'."
        )


def validate_department_access(claims: TokenClaims, target_department_id: Optional[str]) -> None:
    """Enforces department scope boundaries."""
    if "Admin" in claims.roles or "Plant Manager" in claims.roles or "Executive" in claims.roles:
        return
    if target_department_id and claims.department_id and claims.department_id != target_department_id:
        raise ScopeAccessViolation(
            f"Department Scope Violation: User department '{claims.department_id}' cannot access target department '{target_department_id}'."
        )
