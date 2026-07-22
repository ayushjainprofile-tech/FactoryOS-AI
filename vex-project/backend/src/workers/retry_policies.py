"""Retry Policies & Exponential Backoff strategy."""

from typing import Dict, Any


class RetryPolicy:
    """Configures retry behavior, max retries, and exponential backoff parameters."""

    @staticmethod
    def get_policy(task_type: str) -> Dict[str, Any]:
        default_policy = {
            "max_retries": 3,
            "interval_start": 2,
            "interval_step": 2,
            "interval_max": 30,
        }
        policies = {
            "ocr": {"max_retries": 3, "interval_start": 5},
            "embedding": {"max_retries": 5, "interval_start": 2},
            "report": {"max_retries": 2, "interval_start": 10},
            "email": {"max_retries": 4, "interval_start": 3},
            "notification": {"max_retries": 3, "interval_start": 1},
        }
        return policies.get(task_type, default_policy)
