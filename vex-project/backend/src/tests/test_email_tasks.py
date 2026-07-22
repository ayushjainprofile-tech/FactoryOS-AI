"""Tests for Email Tasks."""

import pytest
from src.workers.tasks.email_tasks import send_email_task


@pytest.mark.asyncio
async def test_send_email_task():
    job = {
        "task_id": "email_01",
        "tenant_id": "tenant_1",
        "to_email": "operator@plant.com",
        "subject": "Critical Alarm Notification",
    }

    res = await send_email_task(job)
    assert res["status"] == "SUCCESS"
    assert res["result"]["to"] == "operator@plant.com"
