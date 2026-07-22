"""Vector Store Abstraction Interface & Adapter."""

from abc import ABC, abstractmethod
from typing import List, Optional
from src.models.vector_record import VectorRecordModel


class BaseVectorStore(ABC):
    """Abstract interface for pluggable vector database backends (pgvector, Qdrant, Milvus)."""

    @abstractmethod
    async def upsert(self, records: List[VectorRecordModel]) -> None:
        pass

    @abstractmethod
    async def query(
        self,
        tenant_id: str,
        vector: List[float],
        top_k: int = 5,
        filters: Optional[dict] = None,
    ) -> List[VectorRecordModel]:
        pass


class MemoryVectorStore(BaseVectorStore):
    """In-memory reference implementation of VectorStore."""

    def __init__(self) -> None:
        self.records: List[VectorRecordModel] = []

    async def upsert(self, records: List[VectorRecordModel]) -> None:
        record_map = {r.id: r for r in self.records}
        for r in records:
            record_map[r.id] = r
        self.records = list(record_map.values())

    async def query(
        self,
        tenant_id: str,
        vector: List[float],
        top_k: int = 5,
        filters: Optional[dict] = None,
    ) -> List[VectorRecordModel]:
        filters = filters or {}
        matches = []
        for r in self.records:
            if r.tenant_id != tenant_id:
                continue
            if "plant_id" in filters and r.plant_id != filters["plant_id"]:
                continue
            matches.append(r)
        return matches[:top_k]
