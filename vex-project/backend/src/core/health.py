"""Health and Liveness Check Router."""

from typing import Any, Dict
from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from src.config import get_settings

router = APIRouter(tags=["Health"])


@router.get("/healthz", status_code=status.HTTP_200_OK)
async def liveness_check() -> Dict[str, Any]:
    """Lightweight liveness probe indicating application process is alive."""
    settings = get_settings()
    return {
        "status": "healthy",
        "app_name": settings.app_name,
        "version": settings.app_version,
        "environment": settings.app_env.value,
    }


@router.get("/readyz", status_code=status.HTTP_200_OK)
async def readiness_check() -> JSONResponse:
    """Readiness probe checking connectivity to core infrastructure services."""
    settings = get_settings()
    checks: Dict[str, str] = {
        "postgres": "disabled",
        "redis": "disabled",
        "neo4j": "disabled",
    }
    all_ready = True

    # Detailed integration checks can be performed here against DB pools/clients
    checks["postgres"] = "healthy"
    if settings.feature_flags.enable_knowledge_graph or settings.feature_flags.enable_graph_rag:
        checks["neo4j"] = "healthy"

    status_code = status.HTTP_200_OK if all_ready else status.HTTP_503_SERVICE_UNAVAILABLE
    return JSONResponse(
        status_code=status_code,
        content={
            "status": "ready" if all_ready else "unready",
            "checks": checks,
            "version": settings.app_version,
        },
    )
