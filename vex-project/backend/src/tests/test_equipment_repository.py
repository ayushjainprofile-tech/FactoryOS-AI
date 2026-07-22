"""Tests for Equipment Repository & Soft Delete."""

import pytest
from src.models.equipment import EquipmentModel
from src.repositories.equipment_repository import EquipmentRepository


@pytest.mark.asyncio
async def test_equipment_soft_delete():
    repo = EquipmentRepository()
    eq = EquipmentModel(
        id="eq1",
        tenant_id="t1",
        name="Main Feed Pump",
        asset_tag="P-101",
        equipment_type="pump",
        plant_id="plant_A",
    )

    await repo.save(eq)

    fetched_tag = await repo.get_by_tag("t1", "P-101")
    assert fetched_tag is not None

    # Soft delete
    deleted = await repo.soft_delete("t1", "eq1")
    assert deleted is True

    # Fetched after soft delete returns None
    after = await repo.get_by_id("t1", "eq1")
    assert after is None
