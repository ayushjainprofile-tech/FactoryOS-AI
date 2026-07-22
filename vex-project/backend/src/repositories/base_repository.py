"""Base Repository Interface & Generic InMemory Pattern."""

from typing import Dict, Generic, List, Optional, TypeVar

T = TypeVar("T")


class BaseRepository(Generic[T]):
    """Generic tenant-aware base repository offering CRUD helper patterns."""

    def __init__(self) -> None:
        self._store: Dict[str, T] = {}

    def _make_key(self, tenant_id: str, item_id: str) -> str:
        return f"{tenant_id}:{item_id}"

    async def save(self, tenant_id: str, item_id: str, item: T) -> T:
        key = self._make_key(tenant_id, item_id)
        self._store[key] = item
        return item

    async def get_by_id(self, tenant_id: str, item_id: str) -> Optional[T]:
        key = self._make_key(tenant_id, item_id)
        return self._store.get(key)

    async def delete(self, tenant_id: str, item_id: str) -> bool:
        key = self._make_key(tenant_id, item_id)
        if key in self._store:
            del self._store[key]
            return True
        return False
