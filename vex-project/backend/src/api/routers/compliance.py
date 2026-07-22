"""Compliance API Router."""

from fastapi import APIRouter, Depends, status
from src.api.schemas.compliance import ComplianceStatusResponse
from src.middleware.authorization import require_permission
from src.security.jwt import TokenClaims
from src.security.permissions import AUDIT_READ
from src.services.knowledge_service import ComplianceService

router = APIRouter(prefix="/compliance", tags=["Compliance & Audit"])

_comp_service = ComplianceService()


@router.get("", response_model=ComplianceStatusResponse, status_code=status.HTTP_200_OK)
async def get_compliance(
    claims: TokenClaims = Depends(require_permission(AUDIT_READ)),
    comp_service: ComplianceService = Depends(lambda: _comp_service),
) -> ComplianceStatusResponse:
    """Returns compliance status score across industrial regulatory frameworks."""
    return await comp_service.get_compliance_status(tenant_id=claims.tenant_id)
