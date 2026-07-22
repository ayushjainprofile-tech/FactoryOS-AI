"""Conversation memory — stores recent turns and summarized context per conversation."""

from collections import defaultdict
from typing import Any, Dict, List, Optional

from src.memory.base_memory import BaseMemory, MemoryEntry


class ConversationMemory(BaseMemory):
    """In-memory conversation turn store scoped by tenant + conversation_id."""

    def __init__(self, max_turns: int = 50) -> None:
        self._store: Dict[str, List[MemoryEntry]] = defaultdict(list)
        self.max_turns = max_turns

    def _key(self, tenant_id: str, scope_key: str) -> str:
        return f"{tenant_id}::{scope_key}"

    async def read(
        self,
        tenant_id: str,
        scope_key: str,
        limit: int = 20,
        filters: Optional[Dict[str, Any]] = None,
    ) -> List[MemoryEntry]:
        entries = self._store.get(self._key(tenant_id, scope_key), [])
        return entries[-limit:]

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
            source="conversation",
            tenant_id=tenant_id,
            version=version,
            metadata=metadata or {},
        )
        self._store[key].append(entry)
        # Enforce max turns — trim oldest when exceeded
        if len(self._store[key]) > self.max_turns:
            self._store[key] = self._store[key][-self.max_turns :]
        return entry

    async def clear(self, tenant_id: str, scope_key: str) -> int:
        key = self._key(tenant_id, scope_key)
        count = len(self._store.get(key, []))
        self._store.pop(key, None)
        return count

    async def get_summary(self, tenant_id: str, scope_key: str, max_chars: int = 2000) -> str:
        """Returns a compact summary string of the conversation history for prompt injection."""
        entries = await self.read(tenant_id, scope_key, limit=10)
        lines = [f"[Turn {e.version}] {e.content}" for e in entries]
        combined = "\n".join(lines)
        return combined[:max_chars]
