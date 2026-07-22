"""Document Index Repository — manages index metadata and version tracking."""

from typing import Dict, Optional
from src.models.index_record import IndexRecordModel


class DocumentIndexRepository:
    """Repository managing vector index version states and metadata."""

    def __init__(self) -> None:
        self._store: Dict[str, IndexRecordModel] = {}

    async def save(self, index_record: IndexRecordModel) -> IndexRecordModel:
        key = f"{index_record.tenant_id}:{index_record.index_name}"
        self._store[key] = index_record
        return index_record

    async def get(self, tenant_id: str, index_name: str) -> Optional[IndexRecordModel]:
        key = f"{tenant_id}:{index_name}"
        return self._store.get(key)
