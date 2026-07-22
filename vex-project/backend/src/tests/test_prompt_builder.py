"""Tests for Prompt Builder & Context Assembly."""

import pytest
from src.rag.prompt_builder import PromptBuilder
from src.rag.retriever import RetrievedChunk


def test_prompt_builder():
    builder = PromptBuilder()
    chunks = [
        RetrievedChunk(chunk_id="c1", document_id="doc_pump_spec", content="Max pressure 150 PSI", score=0.95),
    ]

    prompt = builder.build_prompt("What is max pressure?", chunks)
    assert "System:" in prompt
    assert "Context Evidence:" in prompt
    assert "Max pressure 150 PSI" in prompt
    assert "User Question: What is max pressure?" in prompt
