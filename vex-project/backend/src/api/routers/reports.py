"""Reports, Workflow, and Compliance API Routers."""

from fastapi import APIRouter, Depends, status
from src.api.schemas.compliance import ComplianceStatusResponse
from src.api.schemas.reports import CreateReportRequest, ReportResponse
from src.api.schemas.workflow import StartWorkflowRequest, WorkflowExecutionResponse
from src.middleware.authorization import require_permission
from src.orchestrator.report_orchestrator import ReportOrchestrator, WorkflowOrchestrator
from src.security.jwt import TokenClaims
from src.security.permissions import AUDIT_READ, REPORTS_READ, WORKORDER_CREATE
from src.services.knowledge_service import ComplianceService, ReportService, WorkflowService

reports_router = APIRouter(prefix="/reports", tags=["Report Generation"])
workflow_router = APIRouter(prefix="/workflow", tags=["Workflow Automation"])
compliance_router = APIRouter(prefix="/compliance", tags=["Compliance & Audit"])

_report_orchestrator = ReportOrchestrator()
_report_service = ReportService(_report_orchestrator)

_wf_orchestrator = WorkflowOrchestrator()
_wf_service = WorkflowService(_wf_orchestrator)

_comp_service = ComplianceService()


@reports_router.post("", response_model=ReportResponse, status_code=status.HTTP_201_CREATED)
async def create_report(
    request: CreateReportRequest,
    claims: TokenClaims = Depends(require_permission(REPORTS_READ)),
    report_service: ReportService = Depends(lambda: _report_service),
) -> ReportResponse:
    """Generates PDF maintenance/compliance reports via report orchestrator."""
    return await report_service.create_report(request, tenant_id=claims.tenant_id)


@workflow_router.post("", response_model=WorkflowExecutionResponse, status_code=status.HTTP_202_ACCEPTED)
async def start_workflow(
    request: StartWorkflowRequest,
    claims: TokenClaims = Depends(require_permission(WORKORDER_CREATE)),
    wf_service: WorkflowService = Depends(lambda: _wf_service),
) -> WorkflowExecutionResponse:
    """Triggers event-driven workflow automation execution."""
    return await wf_service.start_workflow(request, tenant_id=claims.tenant_id)


@compliance_router.get("", response_model=ComplianceStatusResponse, status_code=status.HTTP_200_OK)
async def get_compliance(
    claims: TokenClaims = Depends(require_permission(AUDIT_READ)),
    comp_service: ComplianceService = Depends(lambda: _comp_service),
) -> ComplianceStatusResponse:
    """Returns compliance score breakdown for regulatory frameworks."""
    return await comp_service.get_compliance_status(tenant_id=claims.tenant_id)
