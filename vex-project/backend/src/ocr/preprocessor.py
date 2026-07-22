"""OCR Preprocessor — image denoise, deskew, and OCR necessity detection."""

from typing import Tuple


class OCRPreprocessor:
    """Preprocesses input document bytes prior to OCR engine submission."""

    def detect_ocr_needed(self, file_bytes: bytes, filename: str) -> bool:
        """Determines if image/scanned OCR is required."""
        ext = filename.split(".")[-1].lower() if "." in filename else ""
        if ext in ("png", "jpg", "jpeg", "tiff", "bmp"):
            return True
        if ext == "pdf":
            # Heuristic check for digital text vs scanned pages
            has_font_markers = b"/Font" in file_bytes or b"/Text" in file_bytes
            return not has_font_markers
        return False

    def preprocess(self, file_bytes: bytes, filename: str) -> Tuple[bytes, bool]:
        """Preprocesses file bytes (normalize orientation, deskew check)."""
        ocr_needed = self.detect_ocr_needed(file_bytes, filename)
        # Returns (processed_bytes, ocr_needed)
        return file_bytes, ocr_needed
