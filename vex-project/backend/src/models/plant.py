"""Plant model."""

import uuid
from datetime import datetime
from dataclasses import dataclass, field


@dataclass
class Plant:
    """Plant domain model within a tenant."""

    id: str = field(default_factory=lambda: str(uuid.uuid4()))
    tenant_id: str = ""
    name: str = ""
    code: str = ""
    location: str = ""
    is_active: bool = True
    created_at: datetime = field(default_factory=datetime.utcnow)
