"""User model."""

import uuid
from datetime import datetime
from typing import List, Optional
from dataclasses import dataclass, field


@dataclass
class User:
    """User entity supporting multi-tenant isolation, plant, and department scope."""

    id: str = field(default_factory=lambda: str(uuid.uuid4()))
    tenant_id: str = ""
    plant_id: Optional[str] = None
    department_id: Optional[str] = None
    email: str = ""
    username: str = ""
    password_hash: str = ""
    first_name: str = ""
    last_name: str = ""
    roles: List[str] = field(default_factory=list)  # list of role names
    is_active: bool = True
    is_superuser: bool = False
    created_at: datetime = field(default_factory=datetime.utcnow)
    updated_at: datetime = field(default_factory=datetime.utcnow)
