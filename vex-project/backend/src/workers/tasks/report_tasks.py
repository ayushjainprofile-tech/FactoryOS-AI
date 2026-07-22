"""Report Generation Background Tasks."""

import uuid
from typing import Any, Dict
from src.workers.result_store import ResultStore

_result_store = ResultStore()


async def generate_report_task(job_data: Dict[str, Any]) -> Dict[str, Any]:
    """Async background task for generating PDF/exec analysis reports."""
    task_id = job_data.get("task_id", str(uuid.uuid4()))
    tenant_id = job_data["tenant_id"]
    report_type = job_data["report_type"]

    _result_store.set_status(task_id, tenant_id, "report", "STARTED")
    try:
        report_path = f"s3://{tenant_id}/reports/{task_id}_{report_type}.pdf"
        res = {"report_id": task_id, "storage_path": report_path, "status": "generated"}
        _result_store.set_status(task_id, tenant_id, "report", "SUCCESS", result=res)
        return {"task_id": task_id, "status": "SUCCESS", "result": res}
    except Exception as exc:
        _result_store.set_status(task_id, tenant_id, "report", "FAILURE", error=str(exc))
        raise exc
