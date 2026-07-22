"""Document Metadata Repository interface and implementation."""

from typing import Dict, Optional
from src.models.document_metadata import DocumentMetadataModel


class DocumentMetadataRepository:
    """Repository for document metadata persistence and override merging."""

    def __init__(self) -> None:
        self._store: Dict[str, DocumentMetadataModel] = {}

    async def save(self, metadata: DocumentMetadataModel) -> DocumentMetadataModel:
        key = f"{metadata.tenant_id}:{metadata.document_id}"
        self._store[key] = metadata
        return metadata

    async def get_by_document(self, tenant_id: str, document_id: str) -> Optional[DocumentMetadataModel]:
        key = f"{tenant_id}:{document_id}"
        return self._store.get(key)

    async def apply_user_overrides(self, tenant_id: str, document_id: str, overrides: Dict) -> Optional[DocumentMetadataModel]:
        meta = await self.get_by_document(tenant_id, document_id)
        if not meta:
            return None
        meta.user_overrides.update(overrides)
        meta.version += 1
        return await self.save(meta)
