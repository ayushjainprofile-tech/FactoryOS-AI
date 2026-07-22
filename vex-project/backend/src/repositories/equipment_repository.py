"""Equipment Repository."""

from typing import Dict, List, Optional
from src.models.equipment import EquipmentModel


class EquipmentRepository:
    """Repository managing equipment assets, tags, and locations."""

    def __init__(self) -> None:
        self._store: Dict[str, EquipmentModel] = {}

    async def save(self, equipment: EquipmentModel) -> EquipmentModel:
        key = f"{equipment.tenant_id}:{equipment.id}"
        self._store[key] = equipment
        return equipment

    async def get_by_id(self, tenant_id: str, equipment_id: str) -> Optional[EquipmentModel]:
        key = f"{tenant_id}:{equipment_id}"
        eq = self._store.get(key)
        if eq and eq.is_deleted:
            return None
        return eq

    async def get_by_tag(self, tenant_id: str, asset_tag: str) -> Optional[EquipmentModel]:
        for eq in self._store.values():
            if eq.tenant_id == tenant_id and eq.asset_tag == asset_tag and not eq.is_deleted:
                return eq
        return None

    async def list_by_tenant(
        self, tenant_id: str, plant_id: Optional[str] = None, department_id: Optional[str] = None
    ) -> List[EquipmentModel]:
        results = []
        for eq in self._store.values():
            if eq.tenant_id != tenant_id or eq.is_deleted:
                continue
            if plant_id and eq.plant_id != plant_id:
                continue
            if department_id and eq.department_id != department_id:
                continue
            results.append(eq)
        return results

    async def soft_delete(self, tenant_id: str, equipment_id: str) -> bool:
        eq = await self.get_by_id(tenant_id, equipment_id)
        if eq:
            eq.is_deleted = True
            await self.save(eq)
            return True
        return False
