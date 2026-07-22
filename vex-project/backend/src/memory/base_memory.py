"""Abstract base interface for all memory providers."""

from abc import ABC, abstractmethod
from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field
from datetime import datetime


class MemoryEntry(BaseModel):
    """Single memory record with provenance metadata."""

    key: str
    content: str
    source: str  # "conversation", "context", "equipment", "document"
    tenant_id: str
    created_at: str = Field(default_factory=lambda: datetime.utcnow().isoformat())
    version: int = 1
    metadata: Dict[str, Any] = Field(default_factory=dict)


class BaseMemory(ABC):
    """Abstract memory provider interface enforcing tenant-scoped reads and versioned writes."""

    @abstractmethod
    async def read(
        self,
        tenant_id: str,
        scope_key: str,
        limit: int = 20,
        filters: Optional[Dict[str, Any]] = None,
    ) -> List[MemoryEntry]:
        """Reads memory entries scoped by tenant and key."""
        ...

    @abstractmethod
    async def write(
        self,
        tenant_id: str,
        scope_key: str,
        content: str,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> MemoryEntry:
        """Writes a new versioned memory entry."""
        ...

    @abstractmethod
    async def clear(self, tenant_id: str, scope_key: str) -> int:
        """Clears all entries for a scope key within a tenant. Returns count deleted."""
        ...
