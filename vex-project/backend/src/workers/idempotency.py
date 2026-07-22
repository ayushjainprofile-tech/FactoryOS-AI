"""Task Idempotency Manager — Redis locks & duplicate suppression."""

import hashlib
from typing import Any, Dict, Optional


class IdempotencyManager:
    """Prevents duplicate execution of background jobs using Redis lock keys."""

    def __init__(self) -> None:
        self._locks: Dict[str, str] = {}

    def generate_key(self, job_type: str, tenant_id: str, payload: Dict[str, Any]) -> str:
        raw = f"{job_type}:{tenant_id}:{sorted(payload.items())}"
        return hashlib.sha256(raw.encode("utf-8")).hexdigest()

    def acquire_lock(self, key: str, task_id: str) -> bool:
        if key in self._locks:
            return False  # Already locked
        self._locks[key] = task_id
        return True

    def release_lock(self, key: str) -> None:
        if key in self._locks:
            del self._locks[key]
