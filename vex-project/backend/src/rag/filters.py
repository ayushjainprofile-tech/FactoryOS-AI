"""RAG Filter Scoping and Security Guardrails."""

from typing import List, Optional
from pydantic import BaseModel, Field


class RAGFilters(BaseModel):
    """Scoped query metadata filters for retrieval."""

    tenant_id: str
    plant_id: Optional[str] = None
    department_id: Optional[str] = None
    document_type: Optional[str] = None
    tags: List[str] = Field(default_factory=list)
    roles: List[str] = Field(default_factory=list)

    def to_dict(self) -> dict:
        d = {"tenant_id": self.tenant_id}
        if self.plant_id:
            d["plant_id"] = self.plant_id
        if self.department_id:
            d["department_id"] = self.department_id
        if self.document_type:
            d["document_type"] = self.document_type
        return d
