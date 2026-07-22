"""Latency Metrics."""

from typing import Dict, Optional
from src.monitoring.metrics import global_metrics_registry


class LatencyMetrics:
    """Records duration histograms for endpoints, tools, and vector searches."""

    def __init__(self, registry=None) -> None:
        self.registry = registry or global_metrics_registry

    def record_latency(self, name: str, duration_ms: float, labels: Optional[Dict[str, str]] = None) -> None:
        self.registry.record_histogram(f"{name}_latency_ms", duration_ms, labels or {})
