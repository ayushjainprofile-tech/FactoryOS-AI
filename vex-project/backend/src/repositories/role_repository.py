"""Role repository."""

from typing import Dict, List, Optional
from src.models.role import Role


class RoleRepository:
    """Repository for managing roles."""

    def __init__(self) -> None:
        self._roles: Dict[str, Role] = {}

    async def save(self, role: Role) -> Role:
        self._roles[role.name] = role
        return role

    async def get_by_name(self, name: str) -> Optional[Role]:
        return self._roles.get(name)

    async def list_all(self) -> List[Role]:
        return list(self._roles.values())
