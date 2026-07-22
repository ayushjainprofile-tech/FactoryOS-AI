"""Tests for SLO Rules and Evaluation."""

import pytest
from src.monitoring.collectors import MetricCollector
from src.monitoring.evaluators import SLOEvaluator
from src.monitoring.metrics import global_metrics_registry
from src.monitoring.slo import SLORule


def test_slo_evaluation():
    global_metrics_registry.clear()
    global_metrics_registry.record_histogram("api_latency_ms", 150.0)
    global_metrics_registry.record_histogram("api_latency_ms", 250.0)

    evaluator = SLOEvaluator()
    rules = [
        SLORule(name="API Latency", metric_name="api_latency_ms", threshold=500.0, condition="lt"),
    ]

    results = evaluator.evaluate_slos(rules)
    assert results["API Latency"] is True
