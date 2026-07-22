"""Text cleaning and normalization module."""

import re


def clean_text(text: str) -> str:
    """Deterministic text cleaning: normalizes whitespace, removes noise, standardizes encoding."""
    if not text:
        return ""

    # Replace zero-width spaces and control chars
    text = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]", "", text)
    
    # Normalize multiple newlines
    text = re.sub(r"\n{3,}", "\n\n", text)

    # Normalize spaces
    lines = [re.sub(r"[ \t]+", " ", line).strip() for line in text.split("\n")]
    cleaned = "\n".join(lines).strip()

    return cleaned
