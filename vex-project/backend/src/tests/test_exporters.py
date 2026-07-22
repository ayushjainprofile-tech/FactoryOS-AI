"""Tests for Prometheus Exporter."""

import pytest
from src.monitoring.exporters import PrometheusExporter
from src.monitoring.metrics import MetricsRegistry


def test_prometheus_exposition_export():
    registry = MetricsRegistry()
    registry.record_counter("http_requests_total", 42, labels={"route": "/health", "status": "200"})

    exporter = PrometheusExporter(registry)
    text = exporter.export_text()

    assert 'http_requests_total{route="/health",status="200"} 42' in text
