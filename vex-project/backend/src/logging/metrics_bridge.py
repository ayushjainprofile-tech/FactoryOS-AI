"""Metrics Bridge — publishes log metrics counts."""

from typing import Dict


class MetricsBridge:
    """Bridges log events to system metrics aggregates."""

    def __init__(self) -> None:
        self.counters: Dict[str, int] = {}

    def increment(self, metric_name: str, value: int = 1) -> None:
        self.counters[metric_name] = self.counters.get(metric_name, 0) + value

    def get_count(self, metric_name: str) -> int:
        return self.counters.get(metric_name, 0)
