"""LLM Service Mocks."""

class MockLLMClient:
    """Mock LLM Client returning deterministic synthetic responses."""

    def generate(self, prompt: str) -> str:
        if "vibration" in prompt.lower():
            return "Vibration level exceedance indicates bearing wear."
        return "Standard operational status confirmed."
