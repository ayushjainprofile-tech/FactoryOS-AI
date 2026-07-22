"""Compliance Repository."""

from typing import Dict, List, Optional
from src.models.compliance import ComplianceModel


class ComplianceRepository:
    """Repository managing safety and environmental compliance audit records."""

    def __init__(self) -> None:
        self._store: Dict[str, ComplianceModel] = {}

    async def save(self, compliance: ComplianceModel) -> ComplianceModel:
        key = f"{compliance.tenant_id}:{compliance.id}"
        self._store[key] = compliance
        return compliance

    async def list_by_tenant(self, tenant_id: str, status: Optional[str] = None) -> List[ComplianceModel]:
        results = []
        for comp in self._store.values():
            if comp.tenant_id != tenant_id:
                continue
            if status and comp.status != status:
                continue
            results.append(comp)
        return results
