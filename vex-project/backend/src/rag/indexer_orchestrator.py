"""Indexer Orchestrator — coordinates full reindexing, incremental indexing, and index versioning."""

from typing import List, Optional
from src.models.document_chunk import DocumentChunkModel
from src.models.index_record import IndexRecordModel
from src.rag.vector_indexer import VectorIndexer
from src.repositories.document_index_repository import DocumentIndexRepository


class IndexerOrchestrator:
    """Orchestrates index version management and re-embedding workflows."""

    def __init__(
        self,
        indexer: Optional[VectorIndexer] = None,
        index_repo: Optional[DocumentIndexRepository] = None,
    ) -> None:
        self.indexer = indexer or VectorIndexer()
        self.index_repo = index_repo or DocumentIndexRepository()

    async def run_indexing_job(
        self,
        tenant_id: str,
        document_id: str,
        chunks: List[DocumentChunkModel],
        index_name: str = "default_index",
        plant_id: Optional[str] = None,
        department_id: Optional[str] = None,
        document_type: Optional[str] = None,
    ) -> IndexRecordModel:
        # Load or initialize index record
        record = await self.index_repo.get(tenant_id, index_name)
        if not record:
            record = IndexRecordModel(
                index_name=index_name,
                tenant_id=tenant_id,
                version=1,
                status="building",
                embedding_model=self.indexer.embedder.model_name,
            )
            await self.index_repo.save(record)

        # Index chunks
        indexed_vectors = await self.indexer.index_chunks(
            tenant_id=tenant_id,
            document_id=document_id,
            chunks=chunks,
            plant_id=plant_id,
            department_id=department_id,
            document_type=document_type,
        )

        record.vector_count += len(indexed_vectors)
        record.status = "active"
        await self.index_repo.save(record)
        return record
