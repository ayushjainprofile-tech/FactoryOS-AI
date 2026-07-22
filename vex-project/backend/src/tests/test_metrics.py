"""Tests for Core Metrics Collection."""

import pytest
from src.monitoring.agent_metrics import AgentMetrics
from src.monitoring.collectors import MetricCollector
from src.monitoring.llm_metrics import LLMMetrics
from src.monitoring.metrics import global_metrics_registry


def test_metrics_collection_and_aggregation():
    global_metrics_registry.clear()
    agent_m = AgentMetrics()
    llm_m = LLMMetrics()

    # Record agent metrics
    agent_m.record_decision("chat_agent", "route_a", 150.0, 0.95, "t1")
    agent_m.record_decision("chat_agent", "route_b", 250.0, 0.85, "t1")

    # Record LLM token metrics
    llm_m.record_call("gpt-4o", 120.0, 100, 50, "t1")

    collector = MetricCollector()

    # Verify calls counter sum
    calls = collector.sum_metric("agent_calls_total")
    assert calls == 2.0

    # Verify token totals sum
    total_tokens = collector.sum_metric("llm_total_tokens_total")
    assert total_tokens == 150.0
