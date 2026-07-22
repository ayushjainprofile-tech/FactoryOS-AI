"""Tests for Work Order Repository."""

import pytest
from src.models.work_order import WorkOrderModel
from src.repositories.work_order_repository import WorkOrderRepository


@pytest.mark.asyncio
async def test_work_order_lifecycle():
    repo = WorkOrderRepository()
    wo = WorkOrderModel(
        id="wo_1",
        tenant_id="t1",
        title="Inspect Bearing on P-101",
        description="Check vibration levels and replace seals if needed.",
        equipment_id="P-101",
        plant_id="plant_A",
        status="scheduled",
    )

    await repo.save(wo)
    fetched = await repo.get_by_id("t1", "wo_1")
    assert fetched is not None
    assert fetched.status == "scheduled"

    by_eq = await repo.list_by_equipment("t1", "P-101")
    assert len(by_eq) == 1
