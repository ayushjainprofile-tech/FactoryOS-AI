"""SLO Evaluator Engine."""

from typing import Dict, List
from src.monitoring.collectors import MetricCollector
from src.monitoring.slo import SLORule, get_default_slos


class SLOEvaluator:
    """Evaluates collected metrics against defined Service Level Objectives."""

    def __init__(self, collector: Optional[MetricCollector] = None) -> None:
        self.collector = collector or MetricCollector()

    def evaluate_slos(self, rules: Optional[List[SLORule]] = None) -> Dict[str, bool]:
        rules = rules or get_default_slos()
        results = {}

        for rule in rules:
            val = self.collector.average_metric(rule.metric_name)
            if rule.condition == "lt":
                results[rule.name] = val < rule.threshold
            else:
                results[rule.name] = val > rule.threshold

        return results
