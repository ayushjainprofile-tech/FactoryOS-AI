"""Image OCR Adapter for png, jpg, jpeg, tiff."""

from typing import Dict, Any


class ImageOCRAdapter:
    """OCR engine adapter for image files (PNG, JPG, TIFF)."""

    def extract_text(self, file_bytes: bytes, filename: str) -> Dict[str, Any]:
        """Extract text from raw image file content."""
        # Simulated/Deterministic extraction
        text = f"[OCR extracted text from image file {filename}]\nSample telemetry visual reading: 124.5 PSI."
        return {
            "text": text,
            "ocr_used": True,
            "confidence": 0.95,
            "pages": 1,
            "metadata": {"image_format": filename.split(".")[-1].lower()},
        }
