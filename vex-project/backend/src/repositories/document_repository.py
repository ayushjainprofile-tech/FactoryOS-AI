"""Document Repository interface and in-memory implementation."""

from typing import Dict, List, Optional
from src.models.document import DocumentModel


class DocumentRepository:
    """Repository for document persistence with tenant boundary enforcement."""

    def __init__(self) -> None:
        self._store: Dict[str, DocumentModel] = {}

    async def save(self, doc: DocumentModel) -> DocumentModel:
        key = f"{doc.tenant_id}:{doc.id}"
        self._store[key] = doc
        return doc

    async def get_by_id(self, tenant_id: str, document_id: str) -> Optional[DocumentModel]:
        key = f"{tenant_id}:{document_id}"
        return self._store.get(key)

    async def list_by_tenant(
        self,
        tenant_id: str,
        plant_id: Optional[str] = None,
        department_id: Optional[str] = None,
    ) -> List[DocumentModel]:
        results = []
        for doc in self._store.values():
            if doc.tenant_id != tenant_id:
                continue
            if plant_id and doc.plant_id != plant_id:
                continue
            if department_id and doc.department_id != department_id:
                continue
            results.append(doc)
        return results

    async def delete(self, tenant_id: str, document_id: str) -> bool:
        key = f"{tenant_id}:{document_id}"
        if key in self._store:
            del self._store[key]
            return True
        return False
