"""Centralized Permission Codes and Role-to-Permission Mapping."""

from typing import Dict, List, Set

# Permission Codes
EQUIPMENT_READ = "equipment:read"
EQUIPMENT_WRITE = "equipment:write"
EQUIPMENT_DELETE = "equipment:delete"

WORKORDER_READ = "workorder:read"
WORKORDER_CREATE = "workorder:create"
WORKORDER_UPDATE = "workorder:update"
WORKORDER_EXECUTE = "workorder:execute"
WORKORDER_DELETE = "workorder:delete"

DOCUMENTS_READ = "documents:read"
DOCUMENTS_UPLOAD = "documents:upload"
DOCUMENTS_DELETE = "documents:delete"

INVESTIGATIONS_READ = "investigations:read"
INVESTIGATIONS_TRIGGER = "investigations:trigger"

AUDIT_READ = "audit:read"
REPORTS_READ = "reports:read"
TENANT_ADMIN = "tenant:admin"

# Centralized Role -> Permission Map
ROLE_PERMISSIONS: Dict[str, Set[str]] = {
    "Admin": {
        TENANT_ADMIN,
        EQUIPMENT_READ,
        EQUIPMENT_WRITE,
        EQUIPMENT_DELETE,
        WORKORDER_READ,
        WORKORDER_CREATE,
        WORKORDER_UPDATE,
        WORKORDER_EXECUTE,
        WORKORDER_DELETE,
        DOCUMENTS_READ,
        DOCUMENTS_UPLOAD,
        DOCUMENTS_DELETE,
        INVESTIGATIONS_READ,
        INVESTIGATIONS_TRIGGER,
        AUDIT_READ,
        REPORTS_READ,
    },
    "Plant Manager": {
        EQUIPMENT_READ,
        EQUIPMENT_WRITE,
        WORKORDER_READ,
        WORKORDER_CREATE,
        WORKORDER_UPDATE,
        WORKORDER_EXECUTE,
        DOCUMENTS_READ,
        DOCUMENTS_UPLOAD,
        INVESTIGATIONS_READ,
        INVESTIGATIONS_TRIGGER,
        REPORTS_READ,
        AUDIT_READ,
    },
    "Engineer": {
        EQUIPMENT_READ,
        EQUIPMENT_WRITE,
        WORKORDER_READ,
        WORKORDER_CREATE,
        WORKORDER_UPDATE,
        DOCUMENTS_READ,
        DOCUMENTS_UPLOAD,
        INVESTIGATIONS_READ,
        INVESTIGATIONS_TRIGGER,
        REPORTS_READ,
    },
    "Technician": {
        EQUIPMENT_READ,
        WORKORDER_READ,
        WORKORDER_EXECUTE,
        DOCUMENTS_READ,
    },
    "Auditor": {
        EQUIPMENT_READ,
        WORKORDER_READ,
        DOCUMENTS_READ,
        INVESTIGATIONS_READ,
        AUDIT_READ,
        REPORTS_READ,
    },
    "Executive": {
        EQUIPMENT_READ,
        WORKORDER_READ,
        INVESTIGATIONS_READ,
        REPORTS_READ,
    },
}


def get_permissions_for_roles(roles: List[str]) -> Set[str]:
    """Resolves union of all permissions granted across user's assigned roles."""
    permissions: Set[str] = set()
    for role in roles:
        if role in ROLE_PERMISSIONS:
            permissions.update(ROLE_PERMISSIONS[role])
    return permissions
