"""Memory Retention & Access Control Policies."""

from typing import Dict, Any


class MemoryPolicy:
    """Configures retention windows, access control levels, and thresholds by memory type."""

    @staticmethod
    def get_policy(memory_type: str) -> Dict[str, Any]:
        policies = {
            "conversation": {"retention_days": 7, "min_confidence": 0.5},
            "equipment": {"retention_days": 365, "min_confidence": 0.8},
            "document": {"retention_days": 365, "min_confidence": 0.9},
            "knowledge": {"retention_days": 9999, "min_confidence": 0.95},
            "investigation": {"retention_days": 730, "min_confidence": 0.85},
            "executive": {"retention_days": 1825, "min_confidence": 0.9},
        }
        return policies.get(
            memory_type, {"retention_days": 30, "min_confidence": 0.7}
        )
# A global policy check function
def is_authorized(memory_type: str, user_role: str) -> bool:
    if memory_type == "executive":
        return user_role in ("Admin", "Manager", "Executive")
    if memory_type == "investigation":
        return user_role in ("Admin", "Engineer", "Technician")
    return True
