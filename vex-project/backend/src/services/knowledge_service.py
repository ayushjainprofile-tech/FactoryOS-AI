"""Knowledge, Report, Workflow, and Compliance Services."""

from src.api.schemas.compliance import ComplianceItem, ComplianceStatusResponse
from src.api.schemas.knowledge import KnowledgeGraphNode, KnowledgeGraphRelationship, KnowledgeGraphResponse
from src.api.schemas.reports import CreateReportRequest, ReportResponse
from src.api.schemas.workflow import StartWorkflowRequest, WorkflowExecutionResponse
from src.orchestrator.report_orchestrator import ReportOrchestrator, WorkflowOrchestrator


class KnowledgeService:
    async def get_graph(self, tenant_id: str) -> KnowledgeGraphResponse:
        nodes = [
            KnowledgeGraphNode(id="eq_pump_21", label="Equipment", properties={"name": "Main Feed Pump 21"}),
            KnowledgeGraphNode(id="fail_bearing", label="FailureMode", properties={"type": "Bearing Misalignment"}),
        ]
        relationships = [
            KnowledgeGraphRelationship(source_id="eq_pump_21", target_id="fail_bearing", type="HAS_FAILURE_MODE")
        ]
        return KnowledgeGraphResponse(nodes=nodes, relationships=relationships)


class ReportService:
    def __init__(self, orchestrator: ReportOrchestrator):
        self.orchestrator = orchestrator

    async def create_report(self, request: CreateReportRequest, tenant_id: str) -> ReportResponse:
        return await self.orchestrator.generate_report(request, tenant_id)


class WorkflowService:
    def __init__(self, orchestrator: WorkflowOrchestrator):
        self.orchestrator = orchestrator

    async def start_workflow(self, request: StartWorkflowRequest, tenant_id: str) -> WorkflowExecutionResponse:
        return await self.orchestrator.execute_workflow(request, tenant_id)


class ComplianceService:
    async def get_compliance_status(self, tenant_id: str) -> ComplianceStatusResponse:
        return ComplianceStatusResponse(
            tenant_id=tenant_id,
            overall_compliance_score=98.4,
            frameworks=[
                ComplianceItem(framework="ISO 55001 Asset Management", status="compliant", last_audited="2026-07-01"),
                ComplianceItem(framework="OSHA PSM Compliance", status="compliant", last_audited="2026-06-15"),
            ],
        )
