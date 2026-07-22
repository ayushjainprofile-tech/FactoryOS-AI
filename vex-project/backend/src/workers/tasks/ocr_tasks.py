"""OCR Background Tasks."""

import uuid
from typing import Any, Dict
from src.ocr.ocr_service import OCRService
from src.workers.idempotency import IdempotencyManager
from src.workers.result_store import ResultStore

_ocr_service = OCRService()
_idempotency = IdempotencyManager()
_result_store = ResultStore()


async def process_ocr_task(job_data: Dict[str, Any]) -> Dict[str, Any]:
    """Async background task for OCR extraction."""
    task_id = job_data.get("task_id", str(uuid.uuid4()))
    tenant_id = job_data["tenant_id"]
    filename = job_data["filename"]
    file_bytes = job_data["content"]

    key = _idempotency.generate_key("ocr", tenant_id, {"filename": filename})
    if not _idempotency.acquire_lock(key, task_id):
        return {"task_id": task_id, "status": "SKIPPED_DUPLICATE"}

    _result_store.set_status(task_id, tenant_id, "ocr", "STARTED")
    try:
        res = await _ocr_service.process_document_async(file_bytes, filename)
        _result_store.set_status(task_id, tenant_id, "ocr", "SUCCESS", result=res)
        _idempotency.release_lock(key)
        return {"task_id": task_id, "status": "SUCCESS", "result": res}
    except Exception as exc:
        _result_store.set_status(task_id, tenant_id, "ocr", "FAILURE", error=str(exc))
        _idempotency.release_lock(key)
        raise exc
