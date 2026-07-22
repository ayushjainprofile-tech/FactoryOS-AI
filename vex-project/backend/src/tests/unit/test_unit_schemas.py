"""Fast Deterministic Unit Tests."""

import pytest
from src.tools.schemas import ToolParameterSpec, ToolSchemaDefinition


@pytest.mark.unit
def test_unit_schema_instantiation():
    schema = ToolSchemaDefinition(
        name="unit_tool",
        description="Unit test tool",
        parameters=[ToolParameterSpec(name="arg1", type="string", description="arg")],
    )
    assert schema.name == "unit_tool"
    assert len(schema.parameters) == 1
