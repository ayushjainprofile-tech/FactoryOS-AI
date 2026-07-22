"""Vector Indexer — converts document chunks into VectorRecordModels and inserts to store."""

import hashlib
from typing import List, Optional
from src.embeddings.batch_embedder import BatchEmbedder
from src.models.document_chunk import DocumentChunkModel
from src.models.vector_record import VectorRecordModel
from src.rag.index_metadata import IndexMetadataBuilder
from src.rag.vector_store import BaseVectorStore, MemoryVectorStore


class VectorIndexer:
    """Transforms chunks to vectors and indexes into the target vector store."""

    def __init__(
        self,
        embedder: Optional[BatchEmbedder] = None,
        store: Optional[BaseVectorStore] = None,
    ) -> None:
        self.embedder = embedder or BatchEmbedder()
        self.store = store or MemoryVectorStore()
        self.metadata_builder = IndexMetadataBuilder()

    async def index_chunks(
        self,
        tenant_id: str,
        document_id: str,
        chunks: List[DocumentChunkModel],
        plant_id: Optional[str] = None,
        department_id: Optional[str] = None,
        document_type: Optional[str] = None,
    ) -> List[VectorRecordModel]:
        if not chunks:
            return []

        texts = [c.content for c in chunks]
        vectors = self.embedder.embed_batch(texts)

        records: List[VectorRecordModel] = []
        for chunk, vector in zip(chunks, vectors):
            meta = self.metadata_builder.build_metadata(
                chunk=chunk,
                embedding_model=self.embedder.model_name,
                plant_id=plant_id,
                department_id=department_id,
                document_type=document_type,
            )
            content_hash = hashlib.sha256(chunk.content.encode("utf-8")).hexdigest()

            rec = VectorRecordModel(
                id=f"{document_id}_{chunk.chunk_index}",
                tenant_id=tenant_id,
                document_id=document_id,
                chunk_id=chunk.id,
                vector=vector,
                content=chunk.content,
                embedding_model=self.embedder.model_name,
                content_hash=content_hash,
                plant_id=plant_id,
                department_id=department_id,
                document_type=document_type,
                metadata=meta,
            )
            records.append(rec)

        await self.store.upsert(records)
        return records
