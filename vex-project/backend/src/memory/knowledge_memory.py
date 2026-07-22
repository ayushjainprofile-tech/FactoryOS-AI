"""Knowledge Memory — curated facts, SOP rules, and terminology."""

import uuid
from typing import List, Optional
from src.memory.memory_schema import MemoryEntryModel
from src.memory.memory_store import MemoryStore


class KnowledgeMemory:
    """Memory manager for stable domain knowledge, rules, and SOP logic."""

    def __init__(self, store: Optional[MemoryStore] = None) -> None:
        self.store = store or MemoryStore()

    async def write_fact(self, tenant_id: str, topic: str, fact: str) -> MemoryEntryModel:
        entry = MemoryEntryModel(
            id=str(uuid.uuid4()),
            tenant_id=tenant_id,
            memory_type="knowledge",
            scope_id=topic,
            content=fact,
            confidence=0.95,
        )
        return await self.store.save(entry)

    async def read_facts(self, tenant_id: str, topic: str) -> List[MemoryEntryModel]:
        return await self.store.get_by_scope(tenant_id, "knowledge", topic)
