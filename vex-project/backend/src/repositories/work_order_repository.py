"""Work Order Repository."""

from typing import Dict, List, Optional
from src.models.work_order import WorkOrderModel


class WorkOrderRepository:
    """Repository managing maintenance work orders and task execution."""

    def __init__(self) -> None:
        self._store: Dict[str, WorkOrderModel] = {}

    async def save(self, work_order: WorkOrderModel) -> WorkOrderModel:
        key = f"{work_order.tenant_id}:{work_order.id}"
        self._store[key] = work_order
        return work_order

    async def get_by_id(self, tenant_id: str, work_order_id: str) -> Optional[WorkOrderModel]:
        key = f"{tenant_id}:{work_order_id}"
        return self._store.get(key)

    async def list_by_equipment(self, tenant_id: str, equipment_id: str) -> List[WorkOrderModel]:
        results = []
        for wo in self._store.values():
            if wo.tenant_id == tenant_id and wo.equipment_id == equipment_id:
                results.append(wo)
        return results
