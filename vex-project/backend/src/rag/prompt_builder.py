"""Prompt Builder — combines system instructions, user query, and context."""

from typing import List, Optional
from src.rag.context_builder import ContextBuilder
from src.rag.retriever import RetrievedChunk


class PromptBuilder:
    """Builds grounded prompts with explicit evidence context and citation formatting rules."""

    def __init__(self, context_builder: Optional[ContextBuilder] = None) -> None:
        self.context_builder = context_builder or ContextBuilder()

    def build_prompt(
        self,
        query: str,
        chunks: List[RetrievedChunk],
        system_instruction: Optional[str] = None,
    ) -> str:
        context_str = self.context_builder.build_context(chunks)
        sys_msg = system_instruction or "You are an AI assistant for industrial technical operations."

        prompt = f"""System: {sys_msg}

Context Evidence:
{context_str if context_str else "No evidence retrieved."}

User Question: {query}

Instructions: Answer the question using ONLY the provided evidence. Cite sources using [Source N] tags."""

        return prompt
