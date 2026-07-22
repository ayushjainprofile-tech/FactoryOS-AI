"""Confidence Engine — deterministic scoring of answer confidence."""

from typing import List, Tuple
from pydantic import BaseModel, Field

from src.rag.citation_engine import Citation


class ConfidenceResult(BaseModel):
    """Structured confidence assessment."""

    score: float = Field(ge=0.0, le=1.0)
    level: str  # "high", "medium", "low"
    reasons: List[str] = Field(default_factory=list)
    should_fallback: bool = False


class ConfidenceEngine:
    """Deterministic confidence scorer based on retrieval quality signals."""

    HIGH_THRESHOLD = 0.80
    LOW_THRESHOLD = 0.50

    def score(
        self,
        citations: List[Citation],
        memory_coverage: bool = False,
        has_conflicts: bool = False,
    ) -> ConfidenceResult:
        """Scores answer confidence deterministically.

        Factors:
        1. Evidence count — more relevant evidence increases confidence.
        2. Average retrieval score — higher average score means stronger evidence.
        3. Memory coverage — whether conversation/equipment memory was available.
        4. Conflict detection — contradicting evidence lowers confidence.
        """
        reasons: List[str] = []

        # Factor 1: Evidence count
        if len(citations) == 0:
            evidence_score = 0.0
            reasons.append("No supporting evidence retrieved.")
        elif len(citations) == 1:
            evidence_score = 0.5
            reasons.append("Single evidence source (limited corroboration).")
        else:
            evidence_score = min(1.0, 0.5 + len(citations) * 0.1)
            reasons.append(f"{len(citations)} corroborating evidence sources found.")

        # Factor 2: Average retrieval quality
        if citations:
            avg_score = sum(c.confidence for c in citations) / len(citations)
            retrieval_score = avg_score
            reasons.append(f"Average retrieval relevance: {avg_score:.2f}.")
        else:
            retrieval_score = 0.0

        # Factor 3: Memory coverage
        memory_bonus = 0.10 if memory_coverage else 0.0
        if memory_coverage:
            reasons.append("Equipment/document memory available and loaded.")

        # Factor 4: Conflict penalty
        conflict_penalty = 0.20 if has_conflicts else 0.0
        if has_conflicts:
            reasons.append("Conflicting evidence detected — confidence reduced.")

        # Composite score
        raw_score = (evidence_score * 0.4 + retrieval_score * 0.4 + memory_bonus) - conflict_penalty
        final_score = max(0.0, min(1.0, raw_score))

        # Level classification
        if final_score >= self.HIGH_THRESHOLD:
            level = "high"
        elif final_score >= self.LOW_THRESHOLD:
            level = "medium"
        else:
            level = "low"
            reasons.append("Low confidence — consider asking a clarifying question.")

        should_fallback = final_score < self.LOW_THRESHOLD

        return ConfidenceResult(
            score=round(final_score, 3),
            level=level,
            reasons=reasons,
            should_fallback=should_fallback,
        )
