"""Tests for CitationEngine."""

import pytest
from src.rag.citation_engine import CitationEngine
from src.rag.retriever import RetrievedChunk


def test_generate_citations():
    engine = CitationEngine()
    chunks = [
        RetrievedChunk(
            chunk_id="c1",
            source_type="pgvector",
            document_id="doc_pump_manual",
            content="Vibration exceeds threshold per ISO 10816-3.",
            score=0.94,
        ),
        RetrievedChunk(
            chunk_id="c2",
            source_type="neo4j",
            content="(PUMP-21)-[:FAILURE_MODE]->(BEARING_WEAR)",
            score=0.88,
        ),
    ]
    citations = engine.generate_citations(chunks)
    assert len(citations) == 2
    assert citations[0].citation_id == "cite_1"
    assert citations[1].source_type == "neo4j"


def test_deduplication():
    engine = CitationEngine()
    chunks = [
        RetrievedChunk(chunk_id="c1", source_type="pgvector", content="Dup A", score=0.9),
        RetrievedChunk(chunk_id="c1", source_type="pgvector", content="Dup A", score=0.9),
    ]
    citations = engine.generate_citations(chunks)
    assert len(citations) == 1


def test_format_citations_for_prompt():
    engine = CitationEngine()
    chunks = [
        RetrievedChunk(chunk_id="c1", source_type="pgvector", content="Evidence text", score=0.85),
    ]
    citations = engine.generate_citations(chunks)
    text = engine.format_citations_for_prompt(citations)
    assert "[cite_1]" in text
    assert "0.85" in text


def test_format_empty_citations():
    engine = CitationEngine()
    text = engine.format_citations_for_prompt([])
    assert "No supporting evidence" in text
