"""Storage Settings configuration."""

from typing import Dict, Any


def get_storage_config(env: str) -> Dict[str, Any]:
    return {
        "bucket_documents": f"vex-{env}-documents",
        "bucket_reports": f"vex-{env}-reports",
    }
