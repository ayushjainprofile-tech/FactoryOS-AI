"""Network Configuration Settings."""

from typing import List


def get_allowed_hosts(env: str) -> List[str]:
    if env == "production":
        return ["api.vex-backend.com"]
    return ["*"]
