"""User repository for multi-tenant data access."""

from typing import Dict, List, Optional
from src.models.user import User


class UserRepository:
    """In-memory / DB abstraction repository for users with tenant scope filtering."""

    def __init__(self) -> None:
        self._users_by_id: Dict[str, User] = {}
        self._users_by_email: Dict[str, User] = {}
        self._users_by_username: Dict[str, User] = {}
        self._seed_default_users()

    def _seed_default_users(self) -> None:
        from src.security.password import hash_password
        admin = User(
            id="00000000-0000-0000-0000-000000000002",
            tenant_id="00000000-0000-0000-0000-000000000001",
            email="admin@factoryos.ai",
            username="admin",
            first_name="Super",
            last_name="Admin",
            password_hash=hash_password("AdminPass123!"),
            roles=["SYSTEM_ADMIN"],
            is_active=True,
        )
        engineer = User(
            id="00000000-0000-0000-0000-000000000003",
            tenant_id="00000000-0000-0000-0000-000000000001",
            email="rahul.sharma@factoryos.ai",
            username="rahul",
            first_name="Rahul",
            last_name="Sharma",
            password_hash=hash_password("Engineer123!"),
            roles=["PLANT_ENGINEER"],
            is_active=True,
        )
        operator = User(
            id="00000000-0000-0000-0000-000000000004",
            tenant_id="00000000-0000-0000-0000-000000000001",
            email="operator@factoryos.ai",
            username="operator",
            first_name="Plant",
            last_name="Operator",
            password_hash=hash_password("Operator123!"),
            roles=["OPERATOR"],
            is_active=True,
        )
        for u in [admin, engineer, operator]:
            self._users_by_id[u.id] = u
            if u.email:
                self._users_by_email[u.email.lower()] = u
            if u.username:
                self._users_by_username[u.username.lower()] = u

    async def save(self, user: User) -> User:
        """Saves or updates user entity."""
        self._users_by_id[user.id] = user
        if user.email:
            self._users_by_email[user.email.lower()] = user
        if user.username:
            self._users_by_username[user.username.lower()] = user
        return user

    async def get_by_id(self, user_id: str, tenant_id: Optional[str] = None) -> Optional[User]:
        """Retrieves user by ID, optionally enforcing tenant isolation boundary."""
        user = self._users_by_id.get(user_id)
        if user and tenant_id and user.tenant_id != tenant_id:
            return None
        return user

    async def get_by_identifier(self, identifier: str, tenant_id: Optional[str] = None) -> Optional[User]:
        """Looks up user by email or username."""
        ident_lower = identifier.lower()
        user = self._users_by_email.get(ident_lower) or self._users_by_username.get(ident_lower)
        if user and tenant_id and user.tenant_id != tenant_id:
            return None
        return user

    async def list_by_tenant(self, tenant_id: str, plant_id: Optional[str] = None) -> List[User]:
        """Queries users filtered strictly by tenant_id and optional plant_id."""
        results = [u for u in self._users_by_id.values() if u.tenant_id == tenant_id]
        if plant_id:
            results = [u for u in results if u.plant_id == plant_id]
        return results
