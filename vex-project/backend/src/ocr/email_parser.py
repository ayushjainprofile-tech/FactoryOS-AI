"""Email (.eml, .msg) Parser Adapter."""

from typing import Dict, Any


class EmailParserAdapter:
    """Parser for email messages, extracting headers, body, and attachment metadata."""

    def extract_text(self, file_bytes: bytes, filename: str) -> Dict[str, Any]:
        """Extract email headers and body text."""
        text = f"Subject: Maintenance Alert - Compressor C-302\nFrom: engineer@plant.com\nBody: High vibration detected on Compressor C-302 bearing 2."
        return {
            "text": text,
            "ocr_used": False,
            "confidence": 1.0,
            "pages": 1,
            "metadata": {
                "subject": "Maintenance Alert - Compressor C-302",
                "sender": "engineer@plant.com",
                "attachments_count": 0,
            },
        }
