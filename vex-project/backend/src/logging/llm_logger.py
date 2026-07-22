"""LLM Logger — logs model calls, prompt templates, token counts, and latency."""

from typing import Any, Dict, Optional
from src.logging.event_types import LogEventType
from src.logging.logger import StructuredLogger


class LLMLogger:
    """Specialized logger for LLM inputs, configurations, token counts, and latency."""

    def __init__(self) -> None:
        self.logger = StructuredLogger("llm")

    def log_call(
        self,
        model_name: str,
        prompt_version: str,
        latency_ms: float,
        prompt_tokens: int,
        completion_tokens: int,
        refused: bool = False,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> str:
        payload = {
            "model_name": model_name,
            "prompt_version": prompt_version,
            "latency_ms": latency_ms,
            "prompt_tokens": prompt_tokens,
            "completion_tokens": completion_tokens,
            "refused": refused,
            "metadata": metadata or {},
        }
        return self.logger.info(
            message=f"LLM Call model={model_name} prompt_v={prompt_version} duration={latency_ms}ms",
            event_type=LogEventType.LLM_CALL.value,
            payload=payload,
        )
