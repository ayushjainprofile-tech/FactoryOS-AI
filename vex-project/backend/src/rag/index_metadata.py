"""Index Metadata manager — constructs vector record metadata payloads."""

import hashlib
from typing import Any, Dict, Optional
from src.models.document_chunk import DocumentChunkModel


class IndexMetadataBuilder:
    """Constructs vector provenance metadata attached to every vector entry."""

    def build_metadata(
        self,
        chunk: DocumentChunkModel,
        embedding_model: str,
        embedding_version: str = "v1.0",
        plant_id: Optional[str] = None,
        department_id: Optional[str] = None,
        document_type: Optional[str] = None,
    ) -> Dict[str, Any]:
        content_hash = hashlib.sha256(chunk.content.encode("utf-8")).hexdigest()
        return {
            "source_id": chunk.document_id,
            "chunk_id": chunk.id,
            "tenant_id": chunk.tenant_id,
            "plant_id": plant_id,
            "department_id": department_id,
            "document_type": document_type,
            "embedding_model": embedding_model,
            "embedding_version": embedding_version,
            "content_hash": content_hash,
            "token_count": chunk.token_count,
            "start_char_offset": chunk.start_char_offset,
            "end_char_offset": chunk.end_char_offset,
        }
