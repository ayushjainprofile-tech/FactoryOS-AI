"""Tests for Relation Extraction."""

import pytest
from src.knowledge_graph.entity_extractor import EntityExtractor
from src.knowledge_graph.relation_extractor import RelationExtractor


def test_relation_extraction():
    entity_extractor = EntityExtractor()
    relation_extractor = RelationExtractor()

    text = "Pump P-101 exhibits severe vibration."
    nodes = entity_extractor.extract_entities(text, tenant_id="tenant_01")
    edges = relation_extractor.extract_relations(nodes, text, tenant_id="tenant_01")

    assert len(edges) >= 1
    assert edges[0].relation_type == "EXHIBITS_FAILURE"
    assert edges[0].confidence == 0.88
