"""Tenant model."""

import uuid
from datetime import datetime
from typing import Optional
from dataclasses import dataclass, field


@dataclass
class Tenant:
    """Tenant domain model."""

    id: str = field(default_factory=lambda: str(uuid.uuid4()))
    name: str = ""
    slug: str = ""
    is_active: bool = True
    created_at: datetime = field(default_factory=datetime.utcnow)
