"""Investigation Repository."""

from typing import Dict, List, Optional
from src.models.investigation import InvestigationModel


class InvestigationRepository:
    """Repository managing failure mode investigation cases."""

    def __init__(self) -> None:
        self._store: Dict[str, InvestigationModel] = {}

    async def save(self, investigation: InvestigationModel) -> InvestigationModel:
        key = f"{investigation.tenant_id}:{investigation.id}"
        self._store[key] = investigation
        return investigation

    async def get_by_id(self, tenant_id: str, investigation_id: str) -> Optional[InvestigationModel]:
        key = f"{tenant_id}:{investigation_id}"
        return self._store.get(key)

    async def list_by_tenant(self, tenant_id: str, status: Optional[str] = None) -> List[InvestigationModel]:
        results = []
        for inv in self._store.values():
            if inv.tenant_id != tenant_id:
                continue
            if status and inv.status != status:
                continue
            results.append(inv)
        return results
