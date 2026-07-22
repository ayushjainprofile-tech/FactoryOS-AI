"""Tests for Entity Extraction."""

import pytest
from src.knowledge_graph.entity_extractor import EntityExtractor


def test_entity_extraction():
    extractor = EntityExtractor()
    text = "Pump P-101 and Compressor C-302 detected high vibration."
    nodes = extractor.extract_entities(text, tenant_id="tenant_01", document_id="doc_1")

    assert len(nodes) >= 2
    tag_names = [n.name for n in nodes]
    assert "P-101" in tag_names
    assert "C-302" in tag_names
    assert nodes[0].provenance.document_id == "doc_1"
