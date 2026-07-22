"""Tests for Notification Tasks."""

import pytest
from src.workers.tasks.notification_tasks import send_notification_task


@pytest.mark.asyncio
async def test_send_notification_task():
    job = {
        "task_id": "notif_01",
        "tenant_id": "tenant_1",
        "user_id": "user_42",
        "message": "Work Order Assigned",
    }

    res = await send_notification_task(job)
    assert res["status"] == "SUCCESS"
    assert res["result"]["user_id"] == "user_42"
