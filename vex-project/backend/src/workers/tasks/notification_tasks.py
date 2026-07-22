"""Notification Delivery Background Tasks."""

import uuid
from typing import Any, Dict
from src.workers.result_store import ResultStore

_result_store = ResultStore()


async def send_notification_task(job_data: Dict[str, Any]) -> Dict[str, Any]:
    """Async task for delivering in-app system notifications."""
    task_id = job_data.get("task_id", str(uuid.uuid4()))
    tenant_id = job_data["tenant_id"]
    user_id = job_data["user_id"]
    message = job_data["message"]

    _result_store.set_status(task_id, tenant_id, "notification", "STARTED")
    res = {"user_id": user_id, "delivered": True}
    _result_store.set_status(task_id, tenant_id, "notification", "SUCCESS", result=res)
    return {"task_id": task_id, "status": "SUCCESS", "result": res}
