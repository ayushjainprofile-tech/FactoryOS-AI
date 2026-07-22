"""Investigation Memory — case timelines, evidence hypotheses, and findings."""

import uuid
from typing import List, Optional
from src.memory.memory_schema import MemoryEntryModel
from src.memory.memory_store import MemoryStore


class InvestigationMemory:
    """Memory manager for failure mode investigation context."""

    def __init__(self, store: Optional[MemoryStore] = None) -> None:
        self.store = store or MemoryStore()

    async def add_finding(self, tenant_id: str, case_id: str, finding: str) -> MemoryEntryModel:
        entry = MemoryEntryModel(
            id=str(uuid.uuid4()),
            tenant_id=tenant_id,
            memory_type="investigation",
            scope_id=case_id,
            content=finding,
            confidence=0.88,
        )
        return await self.store.save(entry)

    async def get_findings(self, tenant_id: str, case_id: str) -> List[MemoryEntryModel]:
        return await self.store.get_by_scope(tenant_id, "investigation", case_id)
