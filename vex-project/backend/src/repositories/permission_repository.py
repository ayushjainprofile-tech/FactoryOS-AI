"""Permission repository."""

from typing import Dict, List, Optional
from src.models.permission import Permission


class PermissionRepository:
    """Repository for permissions."""

    def __init__(self) -> None:
        self._permissions: Dict[str, Permission] = {}

    async def save(self, permission: Permission) -> Permission:
        self._permissions[permission.code] = permission
        return permission

    async def get_by_code(self, code: str) -> Optional[Permission]:
        return self._permissions.get(code)

    async def list_all(self) -> List[Permission]:
        return list(self._permissions.values())
