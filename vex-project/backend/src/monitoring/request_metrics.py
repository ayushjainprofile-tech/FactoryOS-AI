"""API Request Metrics."""

from typing import Dict, Optional
from src.monitoring.metrics import global_metrics_registry


class RequestMetrics:
    """Records inbound request throughput and response status codes."""

    def __init__(self, registry=None) -> None:
        self.registry = registry or global_metrics_registry

    def record_request(self, route: str, method: str, status_code: int, tenant_id: str) -> None:
        labels = {"route": route, "method": method, "status_code": str(status_code), "tenant_id": tenant_id}
        self.registry.record_counter("http_requests_total", 1, labels)
