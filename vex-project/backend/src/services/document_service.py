"""Document Domain Service for business rule handling and workflow dispatch."""

from typing import Any, Dict, Optional
from src.api.schemas.documents import DocumentUploadResponse
from src.orchestrator.document_orchestrator import DocumentOrchestrator


class DocumentService:
    """Service handling technical document ingestion workflows."""

    def __init__(self, orchestrator: Optional[DocumentOrchestrator] = None):
        self.orchestrator = orchestrator or DocumentOrchestrator()

    async def upload_and_process(
        self,
        filename: str,
        content: bytes,
        tenant_id: str,
        uploaded_by: Optional[str] = None,
        plant_id: Optional[str] = None,
        department_id: Optional[str] = None,
        user_metadata_overrides: Optional[Dict[str, Any]] = None,
    ) -> DocumentUploadResponse:
        """Validates payload and triggers ingestion workflow via DocumentOrchestrator."""
        return await self.orchestrator.ingest_document(
            filename=filename,
            content=content,
            tenant_id=tenant_id,
            uploaded_by=uploaded_by,
            plant_id=plant_id,
            department_id=department_id,
            user_metadata_overrides=user_metadata_overrides,
        )
