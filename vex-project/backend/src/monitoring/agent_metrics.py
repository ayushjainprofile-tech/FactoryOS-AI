"""Agent Performance and Trajectory Metrics."""

from typing import Dict, Optional
from src.monitoring.metrics import global_metrics_registry


class AgentMetrics:
    """Records agent decision runtime, fallbacks, and execution counts."""

    def __init__(self, registry=None) -> None:
        self.registry = registry or global_metrics_registry

    def record_decision(self, agent_name: str, route: str, duration_ms: float, confidence: float, tenant_id: str) -> None:
        labels = {"agent_name": agent_name, "route": route, "tenant_id": tenant_id}
        self.registry.record_counter("agent_calls_total", 1, labels)
        self.registry.record_histogram("agent_duration_ms", duration_ms, labels)
        self.registry.record_gauge("agent_decision_confidence", confidence, labels)
