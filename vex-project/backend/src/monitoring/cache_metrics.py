"""Cache Hits and Effectiveness Metrics."""

from typing import Dict, Optional
from src.monitoring.metrics import global_metrics_registry


class CacheMetrics:
    """Records hits, misses, and eviction effectiveness across caching layers."""

    def __init__(self, registry=None) -> None:
        self.registry = registry or global_metrics_registry

    def record_access(self, cache_layer: str, hit: bool, tenant_id: str) -> None:
        labels = {"cache_layer": cache_layer, "tenant_id": tenant_id}
        metric_name = "cache_hits_total" if hit else "cache_misses_total"
        self.registry.record_counter(metric_name, 1, labels)
        self.registry.record_counter("cache_accesses_total", 1, labels)
