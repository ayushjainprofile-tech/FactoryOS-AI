"""Department model."""

import uuid
from datetime import datetime
from dataclasses import dataclass, field


@dataclass
class Department:
    """Department domain model within a plant/tenant."""

    id: str = field(default_factory=lambda: str(uuid.uuid4()))
    tenant_id: str = ""
    plant_id: str = ""
    name: str = ""
    code: str = ""
    is_active: bool = True
    created_at: datetime = field(default_factory=datetime.utcnow)
