"""Documents API Schemas."""

from typing import List, Optional
from pydantic import BaseModel, Field


class DocumentUploadResponse(BaseModel):
    """Document upload & pipeline ingestion response contract."""

    document_id: str
    filename: str
    status: str  # "processing", "completed", "failed"
    chunks_indexed: int
    ocr_extracted: bool
