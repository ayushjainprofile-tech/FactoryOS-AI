"""Tests for ConfidenceEngine."""

import pytest
from src.rag.confidence_engine import ConfidenceEngine
from src.rag.citation_engine import Citation


def _make_citations(count: int, avg_score: float = 0.90) -> list:
    return [
        Citation(
            citation_id=f"cite_{i}",
            source_type="pgvector",
            source_id=f"doc_{i}",
            excerpt=f"Evidence {i}",
            confidence=avg_score,
        )
        for i in range(count)
    ]


def test_high_confidence():
    engine = ConfidenceEngine()
    result = engine.score(_make_citations(3), memory_coverage=True)
    assert result.level == "high"
    assert result.score >= 0.80
    assert not result.should_fallback


def test_medium_confidence():
    engine = ConfidenceEngine()
    result = engine.score(_make_citations(1, avg_score=0.65), memory_coverage=False)
    assert result.level == "medium"
    assert 0.50 <= result.score < 0.80


def test_low_confidence_no_evidence():
    engine = ConfidenceEngine()
    result = engine.score([], memory_coverage=False)
    assert result.level == "low"
    assert result.should_fallback
    assert result.score < 0.50


def test_conflict_penalty():
    engine = ConfidenceEngine()
    without_conflict = engine.score(_make_citations(2), memory_coverage=True)
    with_conflict = engine.score(_make_citations(2), memory_coverage=True, has_conflicts=True)
    assert with_conflict.score < without_conflict.score


def test_score_bounds():
    engine = ConfidenceEngine()
    result = engine.score([], memory_coverage=False, has_conflicts=True)
    assert 0.0 <= result.score <= 1.0
