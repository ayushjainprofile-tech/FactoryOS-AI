"""Document Ingestion Flow — functional step-by-step pipeline execution."""

import uuid
from typing import Any, Dict, Optional
from src.embeddings.embedding_service import EmbeddingService
from src.graphrag.document_graph_linker import DocumentGraphLinker
from src.knowledge_graph.extractor import KnowledgeGraphExtractor
from src.models.document import DocumentModel
from src.models.document_metadata import DocumentMetadataModel
from src.ocr.ocr_service import OCRService
from src.rag.chunking import chunk_document
from src.rag.cleaning import clean_text
from src.rag.indexer import Indexer
from src.repositories.document_chunk_repository import DocumentChunkRepository
from src.repositories.document_graph_repository import DocumentGraphRepository
from src.repositories.document_metadata_repository import DocumentMetadataRepository
from src.repositories.document_repository import DocumentRepository


class DocumentIngestionFlow:
    """Executes deterministic document processing stages from Upload -> Graph."""

    def __init__(
        self,
        doc_repo: Optional[DocumentRepository] = None,
        chunk_repo: Optional[DocumentChunkRepository] = None,
        meta_repo: Optional[DocumentMetadataRepository] = None,
        graph_repo: Optional[DocumentGraphRepository] = None,
    ) -> None:
        self.doc_repo = doc_repo or DocumentRepository()
        self.chunk_repo = chunk_repo or DocumentChunkRepository()
        self.meta_repo = meta_repo or DocumentMetadataRepository()
        self.graph_repo = graph_repo or DocumentGraphRepository()

        self.ocr_service = OCRService()
        self.embedding_service = EmbeddingService()
        self.indexer = Indexer(self.chunk_repo, self.embedding_service)
        self.graph_extractor = KnowledgeGraphExtractor()
        self.graph_linker = DocumentGraphLinker()

    async def run(
        self,
        filename: str,
        content: bytes,
        tenant_id: str,
        uploaded_by: Optional[str] = None,
        plant_id: Optional[str] = None,
        department_id: Optional[str] = None,
        user_metadata_overrides: Optional[Dict[str, Any]] = None,
    ) -> DocumentModel:
        doc_id = str(uuid.uuid4())
        file_ext = filename.split(".")[-1].lower() if "." in filename else "raw"

        # Stage 1: Upload & Record Registration
        doc = DocumentModel(
            id=doc_id,
            tenant_id=tenant_id,
            filename=filename,
            file_type=file_ext,
            file_size_bytes=len(content),
            storage_path=f"s3://{tenant_id}/docs/{doc_id}/{filename}",
            status="processing",
            uploaded_by=uploaded_by,
            plant_id=plant_id,
            department_id=department_id,
        )
        await self.doc_repo.save(doc)

        try:
            # Stage 2: OCR / Parsing
            extraction = self.ocr_service.process_document(content, filename)
            raw_text = extraction.get("text", "")
            doc.ocr_extracted = extraction.get("ocr_used", False)

            # Stage 3: Cleaning & Normalization
            cleaned = clean_text(raw_text)

            # Stage 4: Metadata Extraction & Merging
            extracted_meta = extraction.get("metadata", {})
            metadata_model = DocumentMetadataModel(
                document_id=doc_id,
                tenant_id=tenant_id,
                title=filename,
                document_type=file_ext,
                plant_id=plant_id,
                department_id=department_id,
                confidence_score=extraction.get("confidence", 1.0),
                extracted_fields=extracted_meta,
                user_overrides=user_metadata_overrides or {},
            )
            await self.meta_repo.save(metadata_model)

            # Stage 5: Chunking
            chunks = chunk_document(cleaned, doc_id, tenant_id)

            # Stage 6 & 7: Embedding Generation & Indexing
            indexed_chunks = await self.indexer.index_chunks(tenant_id, doc_id, chunks)

            # Stage 8: Knowledge Graph Extraction & Linking
            graph_data = self.graph_extractor.extract_graph(tenant_id, doc_id, indexed_chunks)
            linked_graph = self.graph_linker.link_graph_to_sources(graph_data, indexed_chunks)
            await self.graph_repo.save(linked_graph)

            # Stage 9: Finalize Status
            doc.status = "completed"
            await self.doc_repo.save(doc)
            return doc

        except Exception as exc:
            doc.status = "failed"
            doc.error_message = str(exc)
            await self.doc_repo.save(doc)
            raise exc
