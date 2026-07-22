"""Equipment, Alert, and Dashboard Services."""

from typing import Optional
from src.api.schemas.alerts import AlertListResponse, AlertResponse
from src.api.schemas.dashboard import DashboardMetricsResponse
from src.api.schemas.equipment import EquipmentListResponse, EquipmentResponse


class EquipmentService:
    async def list_equipment(
        self, tenant_id: str, plant_id: Optional[str] = None, page: int = 1, page_size: int = 20
    ) -> EquipmentListResponse:
        items = [
            EquipmentResponse(
                id="eq_pump_21",
                tenant_id=tenant_id,
                plant_id=plant_id or "plant_01",
                name="Main Feed Pump 21",
                category="Pumps",
                status="warning",
                health_score=82.5,
            ),
            EquipmentResponse(
                id="eq_motor_09",
                tenant_id=tenant_id,
                plant_id=plant_id or "plant_01",
                name="Conveyor Motor 09",
                category="Motors",
                status="operational",
                health_score=96.0,
            ),
        ]
        return EquipmentListResponse(items=items, total=2, page=page, page_size=page_size)


class AlertService:
    async def list_alerts(self, tenant_id: str) -> AlertListResponse:
        items = [
            AlertResponse(
                id="alt_101",
                equipment_id="eq_pump_21",
                severity="high",
                message="High vibration amplitude detected on bearing housing",
                status="active",
                created_at="2026-07-21T20:15:00Z",
            )
        ]
        return AlertListResponse(items=items, total=1)


class DashboardService:
    async def get_metrics(self, tenant_id: str) -> DashboardMetricsResponse:
        return DashboardMetricsResponse(
            total_equipment=48,
            active_alerts=3,
            open_investigations=2,
            compliance_score=98.4,
            system_health="OPTIMAL",
            metrics_summary={"mtbf_hours": 1420.5, "oee_percentage": 88.2},
        )
