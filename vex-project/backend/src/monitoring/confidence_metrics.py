"""Confidence evaluation and score tracking metrics."""

from typing import Dict, Optional
from src.monitoring.metrics import global_metrics_registry


class ConfidenceMetrics:
    """Tracks RAG and Agent model output confidence levels."""

    def __init__(self, registry=None) -> None:
        self.registry = registry or global_metrics_registry

    def record_confidence(self, pipeline_name: str, score: float, tenant_id: str) -> None:
        labels = {"pipeline_name": pipeline_name, "tenant_id": tenant_id}
        self.registry.record_gauge("output_confidence_score", score, labels)
        if score < 0.70:
            self.registry.record_counter("low_confidence_responses_total", 1, labels)
        self.registry.record_counter("confidence_evaluations_total", 1, labels)
