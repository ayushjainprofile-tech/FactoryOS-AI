"""Tests for Plant Repository."""

import pytest
from src.models.plant import PlantModel
from src.repositories.plant_repository import PlantRepository


@pytest.mark.asyncio
async def test_plant_repository():
    repo = PlantRepository()
    plant = PlantModel(id="p1", tenant_id="t1", name="Refinery Site A", location="Houston, TX")

    await repo.save(plant)
    fetched = await repo.get_by_id("t1", "p1")
    assert fetched is not None
    assert fetched.name == "Refinery Site A"

    list_plants = await repo.list_by_tenant("t1")
    assert len(list_plants) == 1
