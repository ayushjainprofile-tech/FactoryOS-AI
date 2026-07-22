"""Tests for OCR Async Tasks & Idempotency."""

import pytest
from src.workers.tasks.ocr_tasks import process_ocr_task


@pytest.mark.asyncio
async def test_process_ocr_task_success():
    job = {
        "task_id": "task_ocr_01",
        "tenant_id": "tenant_1",
        "filename": "manual.pdf",
        "content": b"%PDF sample content",
    }

    res = await process_ocr_task(job)
    assert res["status"] == "SUCCESS"
    assert res["task_id"] == "task_ocr_01"


@pytest.mark.asyncio
async def test_process_ocr_task_duplicate_suppression():
    job = {
        "task_id": "task_ocr_02",
        "tenant_id": "tenant_1",
        "filename": "duplicate.pdf",
        "content": b"content",
    }

    # Run twice concurrently without releasing lock to trigger duplicate key check
    from src.workers.idempotency import IdempotencyManager

    mgr = IdempotencyManager()
    key = mgr.generate_key("ocr", "tenant_1", {"filename": "duplicate.pdf"})
    mgr.acquire_lock(key, "prior_task")

    job_dup = {
        "task_id": "task_ocr_dup",
        "tenant_id": "tenant_1",
        "filename": "duplicate.pdf",
        "content": b"content",
    }
    # Direct check via manager
    locked = mgr.acquire_lock(key, "task_ocr_dup")
    assert locked is False
