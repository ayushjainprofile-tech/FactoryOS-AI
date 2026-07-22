"""Knowledge Graph API Router (GET /knowledge)."""

from fastapi import APIRouter, Depends, status
from src.api.schemas.knowledge import KnowledgeGraphResponse
from src.middleware.authorization import require_permission
from src.security.jwt import TokenClaims
from src.security.permissions import EQUIPMENT_READ
from src.services.knowledge_service import KnowledgeService

router = APIRouter(prefix="/knowledge", tags=["Knowledge Graph"])

_knowledge_service = KnowledgeService()


@router.get("", response_model=KnowledgeGraphResponse, status_code=status.HTTP_200_OK)
async def get_knowledge_graph(
    claims: TokenClaims = Depends(require_permission(EQUIPMENT_READ)),
    knowledge_service: KnowledgeService = Depends(lambda: _knowledge_service),
) -> KnowledgeGraphResponse:
    """Retrieves industrial Neo4j knowledge graph topology."""
    return await knowledge_service.get_graph(tenant_id=claims.tenant_id)
