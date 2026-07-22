"""Tests for Embedding Async Tasks."""

import pytest
from src.workers.tasks.embedding_tasks import process_embedding_task


@pytest.mark.asyncio
async def test_process_embedding_task():
    job = {
        "task_id": "task_emb_01",
        "tenant_id": "tenant_1",
        "texts": ["chunk 1", "chunk 2"],
    }

    res = await process_embedding_task(job)
    assert res["status"] == "SUCCESS"
    assert res["result"]["embedded_count"] == 2
