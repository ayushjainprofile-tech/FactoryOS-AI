"""Confidence Handling Prompt — low/medium/high confidence behavior instructions."""

CONFIDENCE_PROMPT_HIGH_V1 = """Your confidence in this answer is HIGH. Provide a direct, authoritative response with citations."""

CONFIDENCE_PROMPT_MEDIUM_V1 = """Your confidence in this answer is MODERATE. Provide your best assessment but note any uncertainties. Suggest further verification steps if appropriate."""

CONFIDENCE_PROMPT_LOW_V1 = """Your confidence is LOW due to insufficient or conflicting evidence. Ask the user a clarifying question to narrow the scope, or state what additional information is needed before providing a definitive answer. Do NOT guess."""
