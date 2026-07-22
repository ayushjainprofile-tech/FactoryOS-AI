"""Workflow API Router."""

from fastapi import APIRouter, Depends, status
from src.api.schemas.workflow import StartWorkflowRequest, WorkflowExecutionResponse
from src.middleware.authorization import require_permission
from src.orchestrator.report_orchestrator import WorkflowOrchestrator
from src.security.jwt import TokenClaims
from src.security.permissions import WORKORDER_CREATE
from src.services.knowledge_service import WorkflowService

router = APIRouter(prefix="/workflow", tags=["Workflow Automation"])

_wf_orchestrator = WorkflowOrchestrator()
_wf_service = WorkflowService(_wf_orchestrator)


@router.post("", response_model=WorkflowExecutionResponse, status_code=status.HTTP_202_ACCEPTED)
async def start_workflow(
    request: StartWorkflowRequest,
    claims: TokenClaims = Depends(require_permission(WORKORDER_CREATE)),
    wf_service: WorkflowService = Depends(lambda: _wf_service),
) -> WorkflowExecutionResponse:
    """Triggers event-driven workflow automation execution."""
    return await wf_service.start_workflow(request, tenant_id=claims.tenant_id)
