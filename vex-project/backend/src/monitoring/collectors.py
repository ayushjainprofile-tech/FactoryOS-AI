"""Unified Metric Collectors — aggregates time series records."""

from typing import List, Optional
from src.monitoring.metrics import MetricValue, global_metrics_registry


class MetricCollector:
    """Helper aggregating and exporting metric snapshots."""

    def __init__(self, registry=None) -> None:
        self.registry = registry or global_metrics_registry

    def aggregate_by_name(self, name: str) -> List[MetricValue]:
        return [m for m in self.registry.get_all() if m.name == name]

    def sum_metric(self, name: str) -> float:
        return sum(m.value for m in self.aggregate_by_name(name))

    def average_metric(self, name: str) -> float:
        vals = self.aggregate_by_name(name)
        if not vals:
            return 0.0
        return sum(m.value for m in vals) / len(vals)
