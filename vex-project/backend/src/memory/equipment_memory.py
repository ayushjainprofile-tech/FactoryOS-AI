"""Equipment memory — stores asset-specific facts, alerts, status, and maintenance history."""

from collections import defaultdict
from typing import Any, Dict, List, Optional

from src.memory.base_memory import BaseMemory, MemoryEntry


class EquipmentMemory(BaseMemory):
    """Equipment-specific memory scoped by tenant + equipment_id."""

    def __init__(self) -> None:
        self._store: Dict[str, List[MemoryEntry]] = defaultdict(list)

    def _key(self, tenant_id: str, scope_key: str) -> str:
        return f"{tenant_id}::eq::{scope_key}"

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
            source="equipment",
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

    async def load_equipment_context(self, tenant_id: str, equipment_id: str) -> str:
        """Returns fused equipment context string for prompt injection."""
        entries = await self.read(tenant_id, equipment_id, limit=10)
        if not entries:
            return f"No prior memory for equipment '{equipment_id}'."
        lines = [f"- {e.content}" for e in entries]
        return f"Equipment '{equipment_id}' context:\n" + "\n".join(lines)
