"""Document Data Models."""

from datetime import datetime
from typing import Any, Dict, Optional
from pydantic import BaseModel, Field


class DocumentModel(BaseModel):
    """Document entity model."""

    id: str
    tenant_id: str
    filename: str
    file_type: str  # pdf, docx, excel, image, email, pid, cad
    file_size_bytes: int
    storage_path: str
    status: str = "uploaded"  # uploaded, processing, completed, failed
    ocr_extracted: bool = False
    plant_id: Optional[str] = None
    department_id: Optional[str] = None
    uploaded_by: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    version: int = 1
    error_message: Optional[str] = None
