"""Memory Store — pluggable persistence backing for all memory types."""

from typing import Dict, List, Optional
from src.memory.memory_schema import MemoryEntryModel


class MemoryStore:
    """Store managing memory entries under tenant and scope isolation."""

    def __init__(self) -> None:
        self._store: Dict[str, MemoryEntryModel] = {}

    async def save(self, entry: MemoryEntryModel) -> MemoryEntryModel:
        key = f"{entry.tenant_id}:{entry.memory_type}:{entry.scope_id}:{entry.id}"
        self._store[key] = entry
        return entry

    async def get_by_scope(
        self, tenant_id: str, memory_type: str, scope_id: str
    ) -> List[MemoryEntryModel]:
        results = []
        for entry in self._store.values():
            if (
                entry.tenant_id == tenant_id
                and entry.memory_type == memory_type
                and entry.scope_id == scope_id
            ):
                results.append(entry)
        return results

    async def delete_by_scope(
        self, tenant_id: str, memory_type: str, scope_id: str
    ) -> int:
        deleted = 0
        to_delete = [
            k
            for k, v in self._store.items()
            if v.tenant_id == tenant_id
            and v.memory_type == memory_type
            and v.scope_id == scope_id
        ]
        for k in to_delete:
            del self._store[k]
            deleted += 1
        return deleted
