"""Document memory — stores document summaries, key facts, and document IDs."""

from collections import defaultdict
from typing import Any, Dict, List, Optional

from src.memory.base_memory import BaseMemory, MemoryEntry


class DocumentMemory(BaseMemory):
    """Document-level memory scoped by tenant + document_id."""

    def __init__(self) -> None:
        self._store: Dict[str, List[MemoryEntry]] = defaultdict(list)

    def _key(self, tenant_id: str, scope_key: str) -> str:
        return f"{tenant_id}::doc::{scope_key}"

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
            source="document",
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

    async def load_document_context(self, tenant_id: str, document_ids: List[str]) -> str:
        """Returns fused document context string for prompt injection."""
        all_lines: List[str] = []
        for doc_id in document_ids:
            entries = await self.read(tenant_id, doc_id, limit=5)
            for e in entries:
                all_lines.append(f"- [{doc_id}] {e.content}")
        if not all_lines:
            return "No document memory loaded."
        return "Document memory:\n" + "\n".join(all_lines)
