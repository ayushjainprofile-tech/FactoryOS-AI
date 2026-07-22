"""Service Level Objectives (SLOs) Configuration."""

from typing import Dict, List
from pydantic import BaseModel


class SLORule(BaseModel):
    """SLO target metrics, thresholds, and target compliance percentages."""

    name: str
    metric_name: str
    threshold: float
    condition: str = "lt"  # lt (less than value target), gt
    target_compliance: float = 0.99  # e.g., 99% of requests below threshold


def get_default_slos() -> List[SLORule]:
    return [
        SLORule(name="API Latency", metric_name="api_latency_ms", threshold=500.0, condition="lt"),
        SLORule(name="Error Rate", metric_name="failures_total", threshold=5.0, condition="lt"),
        SLORule(name="Confidence Score", metric_name="output_confidence_score", threshold=0.70, condition="gt"),
    ]
