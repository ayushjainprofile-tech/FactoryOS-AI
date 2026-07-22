"""Dashboard API Router."""

from fastapi import APIRouter, Depends, status
from src.api.schemas.dashboard import DashboardMetricsResponse
from src.middleware.authorization import require_permission
from src.security.jwt import TokenClaims
from src.security.permissions import REPORTS_READ
from src.services.equipment_service import DashboardService

router = APIRouter(prefix="/dashboard", tags=["Operational Dashboard"])

_dash_service = DashboardService()


@router.get("", response_model=DashboardMetricsResponse, status_code=status.HTTP_200_OK)
async def get_dashboard_metrics(
    claims: TokenClaims = Depends(require_permission(REPORTS_READ)),
    dash_service: DashboardService = Depends(lambda: _dash_service),
) -> DashboardMetricsResponse:
    """Returns aggregated plant operational metrics."""
    return await dash_service.get_metrics(tenant_id=claims.tenant_id)
