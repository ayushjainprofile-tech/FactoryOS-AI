"""LLM Tokens, Cost, and Call Metrics."""

from typing import Dict, Optional
from src.monitoring.metrics import global_metrics_registry


class LLMMetrics:
    """Records input/output token usage, prompt versions, and call latency."""

    def __init__(self, registry=None) -> None:
        self.registry = registry or global_metrics_registry

    def record_call(self, model_name: str, duration_ms: float, prompt_tokens: int, completion_tokens: int, tenant_id: str) -> None:
        labels = {"model_name": model_name, "tenant_id": tenant_id}
        self.registry.record_counter("llm_calls_total", 1, labels)
        self.registry.record_histogram("llm_duration_ms", duration_ms, labels)
        self.registry.record_counter("llm_prompt_tokens_total", prompt_tokens, labels)
        self.registry.record_counter("llm_completion_tokens_total", completion_tokens, labels)
        self.registry.record_counter("llm_total_tokens_total", prompt_tokens + completion_tokens, labels)
