"""API Schema Examples Export Adapter."""

from src.openapi.examples import REQUEST_EXAMPLES, RESPONSE_EXAMPLES


def get_examples():
    return {"requests": REQUEST_EXAMPLES, "responses": RESPONSE_EXAMPLES}
