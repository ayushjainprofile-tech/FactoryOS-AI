"""Security package exports."""

from src.security.jwt import TokenClaims, create_jwt_token, decode_and_verify_jwt, is_token_revoked, revoke_token
from src.security.oauth import OAuth2ProviderClient, SSOUserInfo
from src.security.password import hash_password, verify_password
from src.security.permissions import ROLE_PERMISSIONS, get_permissions_for_roles
from src.security.rbac import PermissionDenied, check_has_any_role, check_has_permission
from src.security.tenant import ScopeAccessViolation, TenantScopeViolation, validate_department_access, validate_plant_access, validate_tenant_access

__all__ = [
    "hash_password",
    "verify_password",
    "create_jwt_token",
    "decode_and_verify_jwt",
    "revoke_token",
    "is_token_revoked",
    "TokenClaims",
    "ROLE_PERMISSIONS",
    "get_permissions_for_roles",
    "PermissionDenied",
    "check_has_permission",
    "check_has_any_role",
    "TenantScopeViolation",
    "ScopeAccessViolation",
    "validate_tenant_access",
    "validate_plant_access",
    "validate_department_access",
    "OAuth2ProviderClient",
    "SSOUserInfo",
]
