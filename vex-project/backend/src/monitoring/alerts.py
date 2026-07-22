"""Alerting Engine — triggers system alerts on threshold breaches."""

from typing import Dict, List, Optional
from pydantic import BaseModel, Field


class AlertNotification(BaseModel):
    """Triggered alert context payload."""

    metric_name: str
    threshold: float
    current_value: float
    tenant_id: str
    message: str


class AlertingEngine:
    """Evaluates metrics against threshold rules and dispatches alerts."""

    def __init__(self) -> None:
        self.triggered_alerts: List[AlertNotification] = []

    def check_threshold(
        self,
        metric_name: str,
        current_value: float,
        threshold: float,
        tenant_id: str,
        condition: str = "gt",  # gt, lt
    ) -> Optional[AlertNotification]:
        is_breach = False
        if condition == "gt" and current_value > threshold:
            is_breach = True
        elif condition == "lt" and current_value < threshold:
            is_breach = True

        if is_breach:
            alert = AlertNotification(
                metric_name=metric_name,
                threshold=threshold,
                current_value=current_value,
                tenant_id=tenant_id,
                message=f"Alert: Metric '{metric_name}' value {current_value} breached threshold {threshold}.",
            )
            self.triggered_alerts.append(alert)
            return alert
        return None
