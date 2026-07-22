"""Document Chunk Repository interface and implementation."""

from typing import Dict, List, Optional
from src.models.document_chunk import DocumentChunkModel


class DocumentChunkRepository:
    """Repository for document chunks with vector and text retrieval capability."""

    def __init__(self) -> None:
        self._store: Dict[str, List[DocumentChunkModel]] = {}

    async def save_chunks(self, tenant_id: str, document_id: str, chunks: List[DocumentChunkModel]) -> List[DocumentChunkModel]:
        key = f"{tenant_id}:{document_id}"
        self._store[key] = chunks
        return chunks

    async def get_by_document(self, tenant_id: str, document_id: str) -> List[DocumentChunkModel]:
        key = f"{tenant_id}:{document_id}"
        return self._store.get(key, [])

    async def delete_by_document(self, tenant_id: str, document_id: str) -> bool:
        key = f"{tenant_id}:{document_id}"
        if key in self._store:
            del self._store[key]
            return True
        return False
