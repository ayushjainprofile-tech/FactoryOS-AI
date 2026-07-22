"""Knowledge Graph Entity & Tag Normalizer."""

import re


class EntityNormalizer:
    """Normalizes entity names, equipment tags, and handles alias resolution."""

    def __init__(self) -> None:
        self.alias_map = {
            "PUMP 101": "P-101",
            "PUMP-101": "P-101",
            "P101": "P-101",
            "COMPRESSOR 302": "C-302",
            "C302": "C-302",
        }

    def normalize(self, name: str) -> str:
        cleaned = re.sub(r"\s+", " ", name).strip().upper()
        return self.alias_map.get(cleaned, cleaned)
