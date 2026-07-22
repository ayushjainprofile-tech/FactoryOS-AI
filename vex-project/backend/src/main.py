"""Application Entrypoint."""

import uvicorn
from src.config import get_settings
from src.core.app import create_app

app = create_app()

if __name__ == "__main__":
    settings = get_settings()
    uvicorn.run(
        "src.main:app",
        host=settings.host,
        port=settings.port,
        reload=settings.debug or settings.app_env.is_development,
    )
