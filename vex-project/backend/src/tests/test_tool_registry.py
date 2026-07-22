"""Tests for Tool Registry & Function Schema Export."""

import pytest
from src.tools.registry import ToolRegistry


def test_tool_registry_registration_and_lookup():
    reg = ToolRegistry()

    # Verify default tools registered
    vector_tool = reg.get_tool("vector_search")
    assert vector_tool is not None
    assert vector_tool.schema.name == "vector_search"

    graph_tool = reg.get_tool("graph_search")
    assert graph_tool is not None


def test_export_openai_function_schemas():
    reg = ToolRegistry()
    schemas = reg.export_openai_function_schemas()
    assert len(schemas) == 9
    assert schemas[0]["type"] == "function"
    assert "name" in schemas[0]["function"]
