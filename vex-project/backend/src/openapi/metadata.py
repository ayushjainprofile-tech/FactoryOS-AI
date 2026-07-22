"""OpenAPI Application Metadata Configuration."""

from typing import Dict, Any

OPENAPI_METADATA: Dict[str, Any] = {
    "title": "Vex Analytics Platform API",
    "version": "1.0.0",
    "description": (
        "Enterprise API driving RAG retrieval, multi-engine OCR extraction, "
        "and Knowledge Graph analytics for plant industrial operations."
    ),
    "contact": {
        "name": "Developer Support Team",
        "email": "dev-support@vex-backend.com",
    },
    "license_info": {
        "name": "Proprietary",
    },
}
