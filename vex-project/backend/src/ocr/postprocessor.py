"""OCR Postprocessor — cleans OCR noise, normalizes lines, and merges blocks."""

import re
from src.ocr.models import OCRResult


class OCRPostprocessor:
    """Postprocesses raw OCR output, removing artifacts and normalizing formatting."""

    def process(self, result: OCRResult) -> OCRResult:
        if not result.text:
            return result

        # Clean noise characters
        text = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]", "", result.text)

        # Merge hyphenated split words at line ends
        text = re.sub(r"(\w+)-\n(\w+)", r"\1\2", text)

        # Normalize multiple spaces
        text = re.sub(r"[ \t]+", " ", text)

        result.text = text.strip()
        return result
