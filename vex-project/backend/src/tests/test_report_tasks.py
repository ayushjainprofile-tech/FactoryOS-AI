"""Tests for Report Generation Tasks."""

import pytest
from src.workers.tasks.report_tasks import generate_report_task


@pytest.mark.asyncio
async def test_generate_report_task():
    job = {
        "task_id": "rep_101",
        "tenant_id": "tenant_1",
        "report_type": "rca_audit",
    }

    res = await generate_report_task(job)
    assert res["status"] == "SUCCESS"
    assert "rep_101_rca_audit.pdf" in res["result"]["storage_path"]
