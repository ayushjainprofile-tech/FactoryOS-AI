"""Worker Signals & Tracing Hooks."""

from typing import Any, Dict


class WorkerSignals:
    """Hooks for Celery task start, success, failure, and retry events."""

    @staticmethod
    def on_task_start(task_id: str, task_name: str, tenant_id: str) -> None:
        pass

    @staticmethod
    def on_task_success(task_id: str, task_name: str, retval: Any) -> None:
        pass

    @staticmethod
    def on_task_failure(task_id: str, task_name: str, exc: Exception) -> None:
        pass
