"""Feature Toggles configuration."""

from typing import Dict, Any


def get_feature_flags(env: str) -> Dict[str, bool]:
    """Returns toggle settings for engines, providers, and experimental features."""
    return {
        "enable_ocr_docling": True,
        "enable_ocr_gemini_vision": env == "production",
        "enable_graphrag_fusion": True,
        "enable_llm_cache": env != "testing",
    }
