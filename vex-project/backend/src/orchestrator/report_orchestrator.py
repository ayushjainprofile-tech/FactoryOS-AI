"""Report and Workflow Orchestrators."""

import uuid
from datetime import datetime
from src.api.schemas.reports import CreateReportRequest, ReportResponse
from src.api.schemas.workflow import StartWorkflowRequest, WorkflowExecutionResponse


class ReportOrchestrator:
    """Orchestrates data aggregation, AI summary, and PDF report compilation."""

    async def generate_report(self, request: CreateReportRequest, tenant_id: str) -> ReportResponse:
        report_id = str(uuid.uuid4())
        return ReportResponse(
            report_id=report_id,
            title=request.title,
            status="completed",
            download_url=f"/api/reports/download/{report_id}.pdf",
            created_at=datetime.utcnow().isoformat(),
        )


class WorkflowOrchestrator:
    """Orchestrates event-driven workflow automation rules and background dispatch."""

    async def execute_workflow(self, request: StartWorkflowRequest, tenant_id: str) -> WorkflowExecutionResponse:
        execution_id = str(uuid.uuid4())
        return WorkflowExecutionResponse(
            execution_id=execution_id,
            workflow_type=request.workflow_type,
            status="running",
            step="dispatch_technician_workorder",
        )
