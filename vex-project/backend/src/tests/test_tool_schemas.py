"""Tests for Tool Schemas & Parameter Validation."""

import pytest
from src.tools.schemas import ToolParameterSpec, ToolSchemaDefinition
from src.tools.validators import ToolValidator


def test_tool_parameter_validation():
    schema = ToolSchemaDefinition(
        name="test_tool",
        description="Test tool",
        parameters=[
            ToolParameterSpec(name="required_arg", type="string", description="Required", required=True),
        ],
    )
    validator = ToolValidator()

    # Valid args
    assert validator.validate_args(schema, {"required_arg": "val"}) is True

    # Missing required arg
    with pytest.raises(ValueError) as exc:
        validator.validate_args(schema, {})
    assert "Missing required parameter" in str(exc.value)
