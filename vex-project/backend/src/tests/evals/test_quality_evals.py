"""Quality & LLM Behavior Evals."""

import pytest
from src.rag.prompt_builder import RAGPromptBuilder


@pytest.mark.evals
def test_prompt_builder_grounding_eval():
    builder = RAGPromptBuilder()
    prompt = builder.build_prompt(
        query="What is the bearing oil temperature limit?",
        context_chunks=["ISO-10816 states bearing temperature limit is 75 C."],
    )

    assert "ISO-10816" in prompt
    assert "75 C" in prompt
    assert "bearing temperature limit" in prompt
