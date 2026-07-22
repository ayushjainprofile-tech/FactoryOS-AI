"""Unit tests for Role-Based Access Control (RBAC) rules."""

import pytest
from src.security.jwt import TokenClaims
from src.security.permissions import (
    AUDIT_READ,
    EQUIPMENT_DELETE,
    EQUIPMENT_READ,
    EQUIPMENT_WRITE,
    WORKORDER_CREATE,
    WORKORDER_EXECUTE,
)
from src.security.rbac import PermissionDenied, check_has_permission


def _make_claims(roles):
    return TokenClaims(
        sub="u1",
        tenant_id="t1",
        roles=roles,
        exp=9999999999,
        iat=1000000000,
        jti="j1",
    )


def test_admin_has_all_permissions():
    claims = _make_claims(["Admin"])
    check_has_permission(claims, EQUIPMENT_DELETE)
    check_has_permission(claims, AUDIT_READ)


def test_technician_permission_limits():
    claims = _make_claims(["Technician"])
    check_has_permission(claims, EQUIPMENT_READ)
    check_has_permission(claims, WORKORDER_EXECUTE)

    # Technician cannot write equipment or create work orders
    with pytest.raises(PermissionDenied):
        check_has_permission(claims, EQUIPMENT_WRITE)
    with pytest.raises(PermissionDenied):
        check_has_permission(claims, WORKORDER_CREATE)


def test_auditor_permission_rules():
    claims = _make_claims(["Auditor"])
    check_has_permission(claims, AUDIT_READ)
    check_has_permission(claims, EQUIPMENT_READ)

    with pytest.raises(PermissionDenied):
        check_has_permission(claims, EQUIPMENT_WRITE)
