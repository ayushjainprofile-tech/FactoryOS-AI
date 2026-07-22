"""Plant Repository."""

from typing import Dict, List, Optional
from src.models.plant import PlantModel


class PlantRepository:
    """Repository managing plant and facility site records."""

    def __init__(self) -> None:
        self._store: Dict[str, PlantModel] = {}

    async def save(self, plant: PlantModel) -> PlantModel:
        key = f"{plant.tenant_id}:{plant.id}"
        self._store[key] = plant
        return plant

    async def get_by_id(self, tenant_id: str, plant_id: str) -> Optional[PlantModel]:
        key = f"{tenant_id}:{plant_id}"
        return self._store.get(key)

    async def list_by_tenant(self, tenant_id: str) -> List[PlantModel]:
        return [p for p in self._store.values() if p.tenant_id == tenant_id]
