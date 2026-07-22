"""Embedding Generation Background Tasks."""

import uuid
from typing import Any, Dict, List
from src.embeddings.batch_embedder import BatchEmbedder
from src.workers.idempotency import IdempotencyManager
from src.workers.result_store import ResultStore

_embedder = BatchEmbedder()
_idempotency = IdempotencyManager()
_result_store = ResultStore()


async def process_embedding_task(job_data: Dict[str, Any]) -> Dict[str, Any]:
    """Async background task for chunk batch embedding."""
    task_id = job_data.get("task_id", str(uuid.uuid4()))
    tenant_id = job_data["tenant_id"]
    texts: List[str] = job_data["texts"]

    key = _idempotency.generate_key("embedding", tenant_id, {"count": len(texts)})
    if not _idempotency.acquire_lock(key, task_id):
        return {"task_id": task_id, "status": "SKIPPED_DUPLICATE"}

    _result_store.set_status(task_id, tenant_id, "embedding", "STARTED")
    try:
        vectors = _embedder.embed_batch(texts)
        res = {"embedded_count": len(vectors), "dimension": len(vectors[0]) if vectors else 0}
        _result_store.set_status(task_id, tenant_id, "embedding", "SUCCESS", result=res)
        _idempotency.release_lock(key)
        return {"task_id": task_id, "status": "SUCCESS", "result": res}
    except Exception as exc:
        _result_store.set_status(task_id, tenant_id, "embedding", "FAILURE", error=str(exc))
        _idempotency.release_lock(key)
        raise exc
