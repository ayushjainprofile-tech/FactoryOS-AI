"""Tests for Alerting Engine."""

import pytest
from src.monitoring.alerts import AlertingEngine


def test_alert_triggering_threshold_breach():
    engine = AlertingEngine()

    # Breach alert: latency 650ms > 500ms threshold
    alert = engine.check_threshold(
        metric_name="api_latency_ms",
        current_value=650.0,
        threshold=500.0,
        tenant_id="tenant_01",
        condition="gt",
    )
    assert alert is not None
    assert "api_latency_ms" in alert.message
    assert len(engine.triggered_alerts) == 1

    # No breach alert: latency 200ms <= 500ms
    no_alert = engine.check_threshold(
        metric_name="api_latency_ms",
        current_value=200.0,
        threshold=500.0,
        tenant_id="tenant_01",
        condition="gt",
    )
    assert no_alert is None
