"""Vector Repository interface and implementation for vector storage."""

from typing import Dict, List, Optional
from src.models.vector_record import VectorRecordModel


class VectorRepository:
    """Backend-agnostic vector repository with tenant isolation and metadata filtering."""

    def __init__(self) -> None:
        self._store: Dict[str, VectorRecordModel] = {}

    async def upsert(self, record: VectorRecordModel) -> VectorRecordModel:
        key = f"{record.tenant_id}:{record.id}"
        self._store[key] = record
        return record

    async def upsert_batch(self, records: List[VectorRecordModel]) -> List[VectorRecordModel]:
        for r in records:
            await self.upsert(r)
        return records

    async def search(
        self,
        tenant_id: str,
        query_vector: List[float],
        top_k: int = 5,
        plant_id: Optional[str] = None,
        department_id: Optional[str] = None,
        document_type: Optional[str] = None,
    ) -> List[VectorRecordModel]:
        results = []
        for rec in self._store.values():
            if rec.tenant_id != tenant_id:
                continue
            if plant_id and rec.plant_id != plant_id:
                continue
            if department_id and rec.department_id != department_id:
                continue
            if document_type and rec.document_type != document_type:
                continue
            results.append(rec)
        return results[:top_k]

    async def delete_by_document(self, tenant_id: str, document_id: str) -> int:
        deleted = 0
        to_delete = [
            k for k, v in self._store.items() if v.tenant_id == tenant_id and v.document_id == document_id
        ]
        for k in to_delete:
            del self._store[k]
            deleted += 1
        return deleted
