"""Alerts and Dashboard API Routers."""

from fastapi import APIRouter, Depends, status
from src.api.schemas.alerts import AlertListResponse
from src.api.schemas.dashboard import DashboardMetricsResponse
from src.middleware.authorization import require_permission
from src.security.jwt import TokenClaims
from src.security.permissions import EQUIPMENT_READ, REPORTS_READ
from src.services.equipment_service import AlertService, DashboardService

alerts_router = APIRouter(prefix="/alerts", tags=["Alerts & Anomalies"])
dashboard_router = APIRouter(prefix="/dashboard", tags=["Operational Dashboard"])

_alert_service = AlertService()
_dash_service = DashboardService()


@alerts_router.get("", response_model=AlertListResponse, status_code=status.HTTP_200_OK)
async def get_alerts(
    claims: TokenClaims = Depends(require_permission(EQUIPMENT_READ)),
    alert_service: AlertService = Depends(lambda: _alert_service),
) -> AlertListResponse:
    """Lists active anomaly alerts within tenant boundary."""
    return await alert_service.list_alerts(tenant_id=claims.tenant_id)


@dashboard_router.get("", response_model=DashboardMetricsResponse, status_code=status.HTTP_200_OK)
async def get_dashboard(
    claims: TokenClaims = Depends(require_permission(REPORTS_READ)),
    dash_service: DashboardService = Depends(lambda: _dash_service),
) -> DashboardMetricsResponse:
    """Aggregates key operational health, alert, and OEE metrics."""
    return await dash_service.get_metrics(tenant_id=claims.tenant_id)
