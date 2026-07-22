"""Runtime Environment Metrics."""

from typing import Dict
from src.monitoring.metrics import global_metrics_registry


class RuntimeMetrics:
    """Records process uptime, memory usage, and background worker queue depth."""

    def __init__(self, registry=None) -> None:
        self.registry = registry or global_metrics_registry

    def record_queue_depth(self, queue_name: str, depth: int) -> None:
        labels = {"queue_name": queue_name}
        self.registry.record_gauge("worker_queue_depth", float(depth), labels)
