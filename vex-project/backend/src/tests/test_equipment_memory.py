"""Tests for EquipmentMemory."""

import pytest
from src.memory.equipment_memory import EquipmentMemory


@pytest.mark.asyncio
async def test_write_and_read_equipment_facts():
    mem = EquipmentMemory()
    await mem.write("t1", "PUMP-21", "Bearing replaced on 2026-06-01")
    await mem.write("t1", "PUMP-21", "Vibration baseline: 2.1 mm/s RMS")
    entries = await mem.read("t1", "PUMP-21")
    assert len(entries) == 2


@pytest.mark.asyncio
async def test_equipment_context_string():
    mem = EquipmentMemory()
    await mem.write("t1", "PUMP-21", "Last calibration: 2026-05-15")
    context = await mem.load_equipment_context("t1", "PUMP-21")
    assert "PUMP-21" in context
    assert "calibration" in context


@pytest.mark.asyncio
async def test_empty_equipment_context():
    mem = EquipmentMemory()
    context = await mem.load_equipment_context("t1", "UNKNOWN-99")
    assert "No prior memory" in context


@pytest.mark.asyncio
async def test_cross_tenant_equipment_isolation():
    mem = EquipmentMemory()
    await mem.write("tenant_a", "PUMP-21", "Tenant A data")
    await mem.write("tenant_b", "PUMP-21", "Tenant B data")
    entries = await mem.read("tenant_a", "PUMP-21")
    assert len(entries) == 1
    assert entries[0].content == "Tenant A data"
