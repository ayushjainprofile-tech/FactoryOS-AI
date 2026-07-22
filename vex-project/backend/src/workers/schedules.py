"""Celery Beat Schedules — periodic maintenance and reindexing schedules."""

from typing import Dict, Any


def get_periodic_schedules() -> Dict[str, Any]:
    """Centralized schedule definitions for periodic background tasks."""
    return {
        "cleanup_expired_sessions_hourly": {
            "task": "maintenance.cleanup_expired_sessions",
            "schedule": 3600.0,  # every hour
        },
        "daily_index_optimize": {
            "task": "maintenance.reindex_vector_store",
            "schedule": 86400.0,  # daily
        },
        "nightly_digest_notifications": {
            "task": "notification.send_digest",
            "schedule": 86400.0,  # daily
        },
    }
