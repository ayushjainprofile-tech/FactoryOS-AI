"""Celery Application Bootstrap & Configuration."""

from typing import Dict, Any
from src.workers.schedules import get_periodic_schedules


class CeleryAppConfig:
    """Celery application settings, queues, broker, and result backend configuration."""

    def __init__(self, broker_url: str = "redis://localhost:6379/0", result_backend: str = "redis://localhost:6379/1") -> None:
        self.broker_url = broker_url
        self.result_backend = result_backend
        self.task_queues = {
            "ocr": {"exchange": "ocr", "routing_key": "ocr.#"},
            "embedding": {"exchange": "embedding", "routing_key": "embedding.#"},
            "report": {"exchange": "report", "routing_key": "report.#"},
            "email": {"exchange": "email", "routing_key": "email.#"},
            "notification": {"exchange": "notification", "routing_key": "notification.#"},
            "maintenance": {"exchange": "maintenance", "routing_key": "maintenance.#"},
        }
        self.beat_schedule = get_periodic_schedules()


celery_config = CeleryAppConfig()
