"""Error Logger — logs exceptions, classification, and retry status."""

from typing import Any, Dict, Optional
from src.logging.event_types import LogEventType
from src.logging.logger import StructuredLogger


class ErrorLogger:
    """Classifies application exceptions and records error diagnostics."""

    def __init__(self) -> None:
        self.logger = StructuredLogger("error")

    def log_exception(
        self,
        exception: Exception,
        error_type: str,  # validation, auth, tool_failure, provider_failure, timeout
        is_retryable: bool = False,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> str:
        payload = {
            "error_type": error_type,
            "exception_class": exception.__class__.__name__,
            "exception_msg": str(exception),
            "is_retryable": is_retryable,
            "metadata": metadata or {},
        }
        return self.logger.error(
            message=f"Error occurred: {error_type} ({exception.__class__.__name__})",
            event_type=LogEventType.ERROR.value,
            payload=payload,
        )
