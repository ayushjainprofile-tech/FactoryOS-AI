"""Application Factory and Initialization."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.api.routers.alerts import alerts_router
from src.api.routers.auth import router as auth_router
from src.api.routers.chat import router as chat_router
from src.api.routers.compliance import router as compliance_router
from src.api.routers.dashboard import router as dashboard_router
from src.api.routers.documents import router as documents_router
from src.api.routers.equipment import router as equipment_router
from src.api.routers.investigations import router as investigations_router
from src.api.routers.knowledge import router as knowledge_router
from src.api.routers.reports import reports_router
from src.api.routers.workflow import router as workflow_router
from src.config import configure_logging, get_settings
from src.core.exceptions import register_exception_handlers
from src.core.health import router as health_router
from src.core.lifespan import lifespan


def create_app() -> FastAPI:
    """Creates, configures, and bootstraps the FastAPI application instance."""
    settings = get_settings()
    configure_logging(log_level=settings.log_level, json_logs=settings.app_env.is_production)

    app = FastAPI(
        title=settings.app_name,
        version=settings.app_version,
        debug=settings.debug,
        lifespan=lifespan,
        docs_url="/docs" if not settings.app_env.is_production else None,
        redoc_url="/redoc" if not settings.app_env.is_production else None,
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    register_exception_handlers(app)

    # Core Probes
    app.include_router(health_router)

    # API Routers
    api_prefix = "/api/v1"
    app.include_router(auth_router, prefix=api_prefix)
    app.include_router(chat_router, prefix=api_prefix)
    app.include_router(documents_router, prefix=api_prefix)
    app.include_router(investigations_router, prefix=api_prefix)
    app.include_router(equipment_router, prefix=api_prefix)
    app.include_router(alerts_router, prefix=api_prefix)
    app.include_router(dashboard_router, prefix=api_prefix)
    app.include_router(knowledge_router, prefix=api_prefix)
    app.include_router(reports_router, prefix=api_prefix)
    app.include_router(workflow_router, prefix=api_prefix)
    app.include_router(compliance_router, prefix=api_prefix)

    return app
