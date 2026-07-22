"""Swagger UI Configuration."""

from typing import Dict, Any

SWAGGER_UI_CONFIG: Dict[str, Any] = {
    "docs_url": "/docs",
    "swagger_ui_parameters": {
        "deepLinking": True,
        "displayRequestDuration": True,
        "defaultModelsExpandDepth": 2,
    },
}
