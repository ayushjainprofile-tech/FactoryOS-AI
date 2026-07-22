"""Context memory — stores durable task, user, and session context."""

from collections import defaultdict
from typing import Any, Dict, List, Optional

from src.memory.base_memory import BaseMemory, MemoryEntry


class ContextMemory(BaseMemory):
    """Persistent context store keyed by tenant + user/task scope."""

    def __init__(self) -> None:
        self._store: Dict[str, List[MemoryEntry]] = defaultdict(list)

    def _key(self, tenant_id: str, scope_key: str) -> str:
        return f"{tenant_id}::ctx::{scope_key}"

    async def read(
        self,
        tenant_id: str,
        scope_key: str,
        limit: int = 20,
        filters: Optional[Dict[str, Any]] = None,
    ) -> List[MemoryEntry]:
        return self._store.get(self._key(tenant_id, scope_key), [])[-limit:]

    async def write(
        self,
        tenant_id: str,
        scope_key: str,
        content: str,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> MemoryEntry:
        key = self._key(tenant_id, scope_key)
        version = len(self._store[key]) + 1
        entry = MemoryEntry(
            key=scope_key,
            content=content,
            source="context",
            tenant_id=tenant_id,
            version=version,
            metadata=metadata or {},
        )
        self._store[key].append(entry)
        return entry

    async def clear(self, tenant_id: str, scope_key: str) -> int:
        key = self._key(tenant_id, scope_key)
        count = len(self._store.get(key, []))
        self._store.pop(key, None)
        return count
