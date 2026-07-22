"""Metrics Exporters — exports metrics in Prometheus text format."""

from typing import List
from src.monitoring.metrics import MetricsRegistry, global_metrics_registry


class PrometheusExporter:
    """Exports registered metrics into Prometheus exposition text format."""

    def __init__(self, registry: Optional[MetricsRegistry] = None) -> None:
        self.registry = registry or global_metrics_registry

    def export_text(self) -> str:
        lines: List[str] = []
        for m in self.registry.get_all():
            label_str = ",".join([f'{k}="{v}"' for k, v in m.labels.items()])
            labels = f"{{{label_str}}}" if label_str else ""
            lines.append(f"{m.name}{labels} {m.value}")
        return "\n".join(lines)
