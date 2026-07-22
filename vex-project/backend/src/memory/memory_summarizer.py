"""Memory Summarizer — condenses long turn histories and investigation progress."""

from typing import List
from src.memory.memory_schema import MemoryEntryModel


class MemorySummarizer:
    """Summarizes lists of memory entries into compact summaries while preserving provenance tags."""

    def summarize(self, entries: List[MemoryEntryModel]) -> str:
        if not entries:
            return ""

        summary_lines = []
        for idx, e in enumerate(entries, 1):
            summary_lines.append(f"Fact {idx} [{e.scope_id}]: {e.content}")

        return "\n".join(summary_lines)
