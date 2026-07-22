"""Tests for Maintenance Tasks."""

import pytest
from src.workers.tasks.maintenance_tasks import run_maintenance_cleanup_task, run_reindex_task


@pytest.mark.asyncio
async def test_maintenance_cleanup_task():
    res = await run_maintenance_cleanup_task({})
    assert res["status"] == "SUCCESS"
    assert res["cleaned_records"] > 0


@pytest.mark.asyncio
async def test_reindex_task():
    res = await run_reindex_task({})
    assert res["status"] == "SUCCESS"
    assert res["reindexed_chunks"] > 0
