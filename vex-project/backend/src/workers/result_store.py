"""Result Store — status tracking and polling for async jobs."""

from datetime import datetime
from typing import Any, Dict, Optional
from pydantic import BaseModel, Field


class JobResultModel(BaseModel):
    """Job status tracking container."""

    task_id: str
    tenant_id: str
    task_type: str
    status: str = "PENDING"  # PENDING, STARTED, SUCCESS, FAILURE, RETRY
    result: Optional[Dict[str, Any]] = None
    error: Optional[str] = None
    updated_at: datetime = Field(default_factory=datetime.utcnow)


class ResultStore:
    """Store for tracking async job execution status and output payloads."""

    def __init__(self) -> None:
        self._store: Dict[str, JobResultModel] = {}

    def set_status(self, task_id: str, tenant_id: str, task_type: str, status: str, result: Optional[Dict] = None, error: Optional[str] = None) -> JobResultModel:
        res = JobResultModel(task_id=task_id, tenant_id=tenant_id, task_type=task_type, status=status, result=result, error=error)
        self._store[task_id] = res
        return res

    def get_status(self, task_id: str) -> Optional[JobResultModel]:
        return self._store.get(task_id)
