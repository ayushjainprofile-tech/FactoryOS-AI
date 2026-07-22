"""Model Registry — tracks embedding model configurations, versions, and dimensions."""

from typing import Dict, Any, Optional
from pydantic import BaseModel


class ModelSpec(BaseModel):
    name: str
    dimension: int
    version: str


class ModelRegistry:
    """Registry managing available embedding model specifications."""

    def __init__(self) -> None:
        self._registry: Dict[str, ModelSpec] = {
            "text-embedding-3-small": ModelSpec(name="text-embedding-3-small", dimension=1536, version="v1.0"),
            "text-embedding-3-large": ModelSpec(name="text-embedding-3-large", dimension=3072, version="v1.0"),
            "bge-large-en-v1.5": ModelSpec(name="bge-large-en-v1.5", dimension=1024, version="v1.5"),
        }

    def get_spec(self, model_name: str) -> ModelSpec:
        if model_name not in self._registry:
            # Fallback for unknown models
            return ModelSpec(name=model_name, dimension=1536, version="v1.0")
        return self._registry[model_name]
