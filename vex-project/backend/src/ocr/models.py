"""OCR Data Models — structured OCR output representations."""

from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field


class BoundingBox(BaseModel):
    """Bounding box coordinates for detected text element."""

    x_min: float
    y_min: float
    x_max: float
    y_max: float


class OCRBlock(BaseModel):
    """Extracted text block representation."""

    block_id: str
    text: str
    confidence: float
    bbox: Optional[BoundingBox] = None
    block_type: str = "paragraph"  # paragraph, heading, table, list_item


class OCRPageResult(BaseModel):
    """Extracted text and structural blocks for a single page."""

    page_number: int
    text: str
    confidence: float
    blocks: List[OCRBlock] = Field(default_factory=list)
    width: Optional[float] = None
    height: Optional[float] = None


class OCRResult(BaseModel):
    """Unified structured OCR engine response."""

    text: str
    confidence: float
    engine_used: str
    pages: List[OCRPageResult] = Field(default_factory=list)
    language_hint: Optional[str] = None
    metadata: Dict[str, Any] = Field(default_factory=dict)
    ocr_needed: bool = True
    remote_vision_used: bool = False
