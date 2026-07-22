"""Investigations API Router (POST /investigations)."""

from fastapi import APIRouter, Depends, status
from src.api.schemas.investigations import CreateInvestigationRequest, InvestigationResponse
from src.middleware.authorization import require_permission
from src.security.jwt import TokenClaims
from src.security.permissions import INVESTIGATIONS_TRIGGER
from src.services.investigation_service import InvestigationService

router = APIRouter(prefix="/investigations", tags=["Root-Cause Investigations"])

_inv_service = InvestigationService()


@router.post("", response_model=InvestigationResponse, status_code=status.HTTP_201_CREATED)
async def create_investigation(
    request: CreateInvestigationRequest,
    claims: TokenClaims = Depends(require_permission(INVESTIGATIONS_TRIGGER)),
    inv_service: InvestigationService = Depends(lambda: _inv_service),
) -> InvestigationResponse:
    """Triggers autonomous root-cause investigation for equipment anomaly."""
    return await inv_service.create_investigation(request, tenant_id=claims.tenant_id)
