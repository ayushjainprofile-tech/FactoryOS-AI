"""Document Graph Repository interface and implementation."""

from typing import Dict, Optional
from src.models.document_graph import DocumentGraphModel


class DocumentGraphRepository:
    """Repository for document graph entity and relationship persistence."""

    def __init__(self) -> None:
        self._store: Dict[str, DocumentGraphModel] = {}

    async def save(self, graph_data: DocumentGraphModel) -> DocumentGraphModel:
        key = f"{graph_data.tenant_id}:{graph_data.document_id}"
        self._store[key] = graph_data
        return graph_data

    async def get_by_document(self, tenant_id: str, document_id: str) -> Optional[DocumentGraphModel]:
        key = f"{tenant_id}:{document_id}"
        return self._store.get(key)
