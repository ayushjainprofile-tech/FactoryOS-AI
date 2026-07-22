"""OpenAPI Documented Examples."""

from typing import Dict, Any

REQUEST_EXAMPLES: Dict[str, Any] = {
    "vector_search": {
        "summary": "Example Semantic Query",
        "value": {
            "query": "centrifugal pump vibration threshold",
            "top_k": 3,
        },
    }
}

RESPONSE_EXAMPLES: Dict[str, Any] = {
    "vector_search_success": {
        "summary": "Successful Vector Search Response",
        "value": {
            "chunks": [
                {
                    "content": "ISO-10816 vibration limit for Class II pumps is 2.8 mm/s velocity.",
                    "score": 0.96,
                }
            ],
            "tenant_id": "tenant_123",
        },
    }
}
