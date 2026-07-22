"""Unit tests for multi-tenant, plant, and department scope boundary enforcement."""

import pytest
from src.security.jwt import TokenClaims
from src.security.tenant import (
    ScopeAccessViolation,
    TenantScopeViolation,
    validate_department_access,
    validate_plant_access,
    validate_tenant_access,
)


def _make_claims(tenant_id, plant_id=None, department_id=None, roles=None):
    return TokenClaims(
        sub="u1",
        tenant_id=tenant_id,
        plant_id=plant_id,
        department_id=department_id,
        roles=roles or ["Engineer"],
        exp=9999999999,
        iat=1000000000,
        jti="j1",
    )


def test_tenant_isolation_boundary():
    claims = _make_claims("tenant_alpha")
    # Same tenant passes
    validate_tenant_access(claims, "tenant_alpha")

    # Cross tenant raises violation
    with pytest.raises(TenantScopeViolation):
        validate_tenant_access(claims, "tenant_beta")


def test_plant_scope_enforcement():
    claims = _make_claims("tenant_alpha", plant_id="plant_01", roles=["Engineer"])
    validate_plant_access(claims, "plant_01")

    with pytest.raises(ScopeAccessViolation):
        validate_plant_access(claims, "plant_02")


def test_admin_bypasses_plant_scope():
    admin_claims = _make_claims("tenant_alpha", plant_id="plant_01", roles=["Admin"])
    # Admin can access any plant within their tenant boundary
    validate_plant_access(admin_claims, "plant_02")
