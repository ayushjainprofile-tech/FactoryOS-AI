"""Executive Memory — decisions, priorities, and leadership approvals."""

import uuid
from typing import List, Optional
from src.memory.memory_schema import MemoryEntryModel
from src.memory.memory_store import MemoryStore


class ExecutiveMemory:
    """Memory manager for leadership decisions, priorities, and escalations."""

    def __init__(self, store: Optional[MemoryStore] = None) -> None:
        self.store = store or MemoryStore()

    async def log_decision(
        self, tenant_id: str, user_id: str, decision: str, priority_level: str = "high"
    ) -> MemoryEntryModel:
        entry = MemoryEntryModel(
            id=str(uuid.uuid4()),
            tenant_id=tenant_id,
            memory_type="executive",
            scope_id=user_id,
            content=decision,
            confidence=0.95,
            metadata={"priority_level": priority_level},
        )
        return await self.store.save(entry)

    async def get_decisions(self, tenant_id: str, user_id: str) -> List[MemoryEntryModel]:
        return await self.store.get_by_scope(tenant_id, "executive", user_id)
