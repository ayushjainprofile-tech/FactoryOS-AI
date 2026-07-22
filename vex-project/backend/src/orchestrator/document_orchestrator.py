"""Document Orchestrator for coordinating synchronous & asynchronous document ingestion flows."""

from typing import Any, Dict, Optional
from src.api.schemas.documents import DocumentUploadResponse
from src.orchestrator.document_ingestion_flow import DocumentIngestionFlow


class DocumentOrchestrator:
    """Orchestrates document parsing, OCR extraction, token chunking, and vector database indexing."""

    def __init__(self, flow: Optional[DocumentIngestionFlow] = None) -> None:
        self.flow = flow or DocumentIngestionFlow()

    async def ingest_document(
        self,
        filename: str,
        content: bytes,
        tenant_id: str,
        uploaded_by: Optional[str] = None,
        plant_id: Optional[str] = None,
        department_id: Optional[str] = None,
        user_metadata_overrides: Optional[Dict[str, Any]] = None,
    ) -> DocumentUploadResponse:
        doc = await self.flow.run(
            filename=filename,
            content=content,
            tenant_id=tenant_id,
            uploaded_by=uploaded_by,
            plant_id=plant_id,
            department_id=department_id,
            user_metadata_overrides=user_metadata_overrides,
        )

        chunks = await self.flow.chunk_repo.get_by_document(tenant_id, doc.id)

        return DocumentUploadResponse(
            document_id=doc.id,
            filename=filename,
            status=doc.status,
            chunks_indexed=len(chunks),
            ocr_extracted=doc.ocr_extracted,
        )
