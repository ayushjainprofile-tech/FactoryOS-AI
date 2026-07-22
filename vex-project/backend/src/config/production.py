"""Production Environment Settings Overrides & Strict Validation."""

from src.config.base import BaseSettings


class ProductionSettings(BaseSettings):
    env: str = "production"
    debug: bool = False

    def validate_production(self) -> None:
        """Enforces production configuration standards and secret non-empty checks."""
        if "localhost" in self.database_url or "localhost" in self.redis_url:
            raise ValueError("Production settings cannot target localhost services.")
        if not self.gemini_api_key:
            raise ValueError("GEMINI_API_KEY must be provided in production mode.")
        if "postgres_password" in self.database_url:
            raise ValueError("Production settings cannot use default database credentials.")
