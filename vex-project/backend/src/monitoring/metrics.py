"""Core Metrics System — Registry and Types."""

from typing import Dict, List, Optional
from pydantic import BaseModel, Field


class MetricValue(BaseModel):
    name: str
    labels: Dict[str, str] = Field(default_factory=dict)
    value: float
    metric_type: str  # counter, gauge, histogram


class MetricsRegistry:
    """Central registry holding raw performance and operational metrics."""

    def __init__(self) -> None:
        self._values: List[MetricValue] = []

    def record_counter(self, name: str, value: float, labels: Optional[Dict[str, str]] = None) -> None:
        self._values.append(MetricValue(name=name, value=value, labels=labels or {}, metric_type="counter"))

    def record_gauge(self, name: str, value: float, labels: Optional[Dict[str, str]] = None) -> None:
        self._values.append(MetricValue(name=name, value=value, labels=labels or {}, metric_type="gauge"))

    def record_histogram(self, name: str, value: float, labels: Optional[Dict[str, str]] = None) -> None:
        self._values.append(MetricValue(name=name, value=value, labels=labels or {}, metric_type="histogram"))

    def get_all(self) -> List[MetricValue]:
        return self._values

    def clear(self) -> None:
        self._values.clear()


# Global metrics registry singleton
global_metrics_registry = MetricsRegistry()
