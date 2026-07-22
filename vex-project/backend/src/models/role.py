"""Role model."""

import uuid
from typing import List
from dataclasses import dataclass, field


@dataclass
class Role:
    """Role mapping to permissions."""

    id: str = field(default_factory=lambda: str(uuid.uuid4()))
    name: str = ""  # e.g. "Admin", "Plant Manager", "Engineer", "Technician", "Auditor", "Executive"
    description: str = ""
    permissions: List[str] = field(default_factory=list)  # list of permission codes
