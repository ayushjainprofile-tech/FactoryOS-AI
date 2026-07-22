"""Alert Repository."""

from typing import Dict, List, Optional
from src.models.alert import AlertModel


class AlertRepository:
    """Repository managing telemetry and system alerts."""

    def __init__(self) -> None:
        self._store: Dict[str, AlertModel] = {}

    async def save(self, alert: AlertModel) -> AlertModel:
        key = f"{alert.tenant_id}:{alert.id}"
        self._store[key] = alert
        return alert

    async def get_by_id(self, tenant_id: str, alert_id: str) -> Optional[AlertModel]:
        key = f"{tenant_id}:{alert_id}"
        return self._store.get(key)

    async def list_active_alerts(
        self, tenant_id: str, plant_id: Optional[str] = None, severity: Optional[str] = None
    ) -> List[AlertModel]:
        results = []
        for alert in self._store.values():
            if alert.tenant_id != tenant_id or alert.status == "resolved":
                continue
            if plant_id and alert.plant_id != plant_id:
                continue
            if severity and alert.severity != severity:
                continue
            results.append(alert)
        return results
