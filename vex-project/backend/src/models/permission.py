"""Permission model."""

import uuid
from dataclasses import dataclass, field


@dataclass
class Permission:
    """Explicit permission entity."""

    id: str = field(default_factory=lambda: str(uuid.uuid4()))
    code: str = ""  # e.g., "equipment:read", "workorder:create"
    name: str = ""
    description: str = ""
    category: str = "general"
