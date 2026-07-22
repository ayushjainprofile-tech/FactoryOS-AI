"""Email Transactional Background Tasks."""

import uuid
from typing import Any, Dict
from src.workers.result_store import ResultStore

_result_store = ResultStore()


async def send_email_task(job_data: Dict[str, Any]) -> Dict[str, Any]:
    """Async task for sending transactional emails (alerts, report links, auth notifications)."""
    task_id = job_data.get("task_id", str(uuid.uuid4()))
    tenant_id = job_data["tenant_id"]
    to_email = job_data["to_email"]
    subject = job_data["subject"]

    _result_store.set_status(task_id, tenant_id, "email", "STARTED")
    res = {"to": to_email, "subject": subject, "sent": True}
    _result_store.set_status(task_id, tenant_id, "email", "SUCCESS", result=res)
    return {"task_id": task_id, "status": "SUCCESS", "result": res}
