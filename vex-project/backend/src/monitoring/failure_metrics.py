"""Failure classification and trends metrics."""

from typing import Dict, Optional
from src.monitoring.metrics import global_metrics_registry


class FailureMetrics:
    """Records exception frequencies classified by component and error type."""

    def __init__(self, registry=None) -> None:
        self.registry = registry or global_metrics_registry

    def record_failure(self, component: str, failure_type: str, tenant_id: str) -> None:
        labels = {"component": component, "failure_type": failure_type, "tenant_id": tenant_id}
        self.registry.record_counter("failures_total", 1, labels)
