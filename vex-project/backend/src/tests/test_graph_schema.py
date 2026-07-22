"""Tests for Ontology Manager & Schema Validation."""

import pytest
from src.knowledge_graph.ontology import OntologyManager
from src.knowledge_graph.schema import CanonicalEdgeType, CanonicalNodeType


def test_ontology_validation():
    manager = OntologyManager()

    # Valid node types
    assert manager.validate_node_type("equipment") is True
    assert manager.validate_node_type("engineer") is True
    assert manager.validate_node_type("vendor") is True

    # Invalid node type
    assert manager.validate_node_type("unknown_type") is False

    # Valid edge types
    assert manager.validate_edge_type("OWNED_BY") is True
    assert manager.validate_edge_type("LOCATED_IN") is True

    # Invalid edge type
    assert manager.validate_edge_type("INVALID_RELATION") is False
