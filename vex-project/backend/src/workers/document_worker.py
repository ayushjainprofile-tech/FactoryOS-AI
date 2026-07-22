"""Async Document Processing Background Worker."""

import asyncio
from typing import Any, Dict
from src.orchestrator.document_ingestion_flow import DocumentIngestionFlow


class DocumentWorker:
    """Worker for executing asynchronous document ingestion background jobs."""

    def __init__(self, flow: Optional[DocumentIngestionFlow] = None) -> None:
        self.flow = flow or DocumentIngestionFlow()

    async def process_job(self, job_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process document ingestion background job."""
        filename = job_data["filename"]
        content = job_data["content"]
        tenant_id = job_data["tenant_id"]

        doc = await self.flow.run(
            filename=filename,
            content=content,
            tenant_id=tenant_id,
            uploaded_by=job_data.get("uploaded_by"),
            plant_id=job_data.get("plant_id"),
            department_id=job_data.get("department_id"),
        )
        return {"document_id": doc.id, "status": doc.status}
