"""Memory Extractor — extracts durable facts from interaction streams."""

import re
from typing import List


class MemoryExtractor:
    """Extracts durable operational facts from conversation turns or maintenance logs."""

    def extract_facts(self, text: str) -> List[str]:
        facts = []
        # Simple heuristic pattern for fact extraction
        lines = text.split("\n")
        for line in lines:
            if "status" in line.lower() or "replaced" in line.lower() or "limit" in line.lower():
                facts.append(line.strip())
        return facts
