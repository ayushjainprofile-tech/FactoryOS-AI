"""Embedding Repository."""

from typing import Dict, List, Optional
from src.models.embedding import EmbeddingModel


class EmbeddingRepository:
    """Repository managing vector embedding metadata records."""

    def __init__(self) -> None:
        self._store: Dict[str, EmbeddingModel] = {}

    async def save(self, embedding: EmbeddingModel) -> EmbeddingModel:
        key = f"{embedding.tenant_id}:{embedding.id}"
        self._store[key] = embedding
        return embedding

    async def get_by_chunk(self, tenant_id: str, chunk_id: str) -> Optional[EmbeddingModel]:
        for emb in self._store.values():
            if emb.tenant_id == tenant_id and emb.chunk_id == chunk_id:
                return emb
        return None
