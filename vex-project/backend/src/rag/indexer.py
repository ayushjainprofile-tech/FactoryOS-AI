"""Vector Database Indexer for document chunks."""

from typing import List
from src.embeddings.embedding_service import EmbeddingService
from src.models.document_chunk import DocumentChunkModel
from src.repositories.document_chunk_repository import DocumentChunkRepository


class Indexer:
    """Indexes document chunks into vector and relational repositories."""

    def __init__(
        self,
        chunk_repo: DocumentChunkRepository,
        embedding_service: EmbeddingService,
    ) -> None:
        self.chunk_repo = chunk_repo
        self.embedding_service = embedding_service

    async def index_chunks(
        self, tenant_id: str, document_id: str, chunks: List[DocumentChunkModel]
    ) -> List[DocumentChunkModel]:
        """Embeds each chunk and persists to the chunk repository."""
        for chunk in chunks:
            vector = self.embedding_service.generate_embedding(chunk.content)
            chunk.embedding = vector
            chunk.embedding_model = self.embedding_service.model_name

        return await self.chunk_repo.save_chunks(tenant_id, document_id, chunks)
