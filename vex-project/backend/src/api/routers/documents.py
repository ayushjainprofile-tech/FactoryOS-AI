"""Documents API Router (POST /documents/upload)."""

from fastapi import APIRouter, Depends, File, UploadFile, status
from src.api.schemas.documents import DocumentUploadResponse
from src.middleware.authorization import require_permission
from src.orchestrator.document_orchestrator import DocumentOrchestrator
from src.security.jwt import TokenClaims
from src.security.permissions import DOCUMENTS_UPLOAD
from src.services.document_service import DocumentService

router = APIRouter(prefix="/documents", tags=["Document Management"])

_doc_orchestrator = DocumentOrchestrator()
_doc_service = DocumentService(_doc_orchestrator)


@router.post("/upload", response_model=DocumentUploadResponse, status_code=status.HTTP_201_CREATED)
async def upload_document(
    file: UploadFile = File(...),
    claims: TokenClaims = Depends(require_permission(DOCUMENTS_UPLOAD)),
    doc_service: DocumentService = Depends(lambda: _doc_service),
) -> DocumentUploadResponse:
    """Uploads technical documents, running OCR, chunking, and pgvector embedding ingestion."""
    content = await file.read()
    return await doc_service.upload_and_process(filename=file.filename or "upload.pdf", content=content, tenant_id=claims.tenant_id)
