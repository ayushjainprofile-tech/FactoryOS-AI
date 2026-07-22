"""Memory Fusion Prompt — fusing equipment and document memory into context."""

MEMORY_PROMPT_V1 = """Relevant operational memory:

Equipment Memory:
{equipment_memory}

Document Memory:
{document_memory}

Use this memory to ground your response. Prioritize recent and high-confidence entries."""
