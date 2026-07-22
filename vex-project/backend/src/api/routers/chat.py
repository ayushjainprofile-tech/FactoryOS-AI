"""Chat API Router (POST /chat)."""

from fastapi import APIRouter, Depends, status
from src.api.schemas.chat import ChatMessageRequest, ChatMessageResponse
from src.middleware.authorization import get_current_user_claims, require_permission
from src.orchestrator.chat_orchestrator import ChatOrchestrator
from src.security.jwt import TokenClaims
from src.security.permissions import EQUIPMENT_READ
from src.services.chat_service import ChatService

router = APIRouter(prefix="/chat", tags=["Chat & Conversational AI"])

_chat_orchestrator = ChatOrchestrator()
_chat_service = ChatService(_chat_orchestrator)


@router.post("", response_model=ChatMessageResponse, status_code=status.HTTP_200_OK)
async def post_chat_message(
    request: ChatMessageRequest,
    claims: TokenClaims = Depends(require_permission(EQUIPMENT_READ)),
    chat_service: ChatService = Depends(lambda: _chat_service),
) -> ChatMessageResponse:
    """Conversational AI query endpoint synthesizing Vector RAG, GraphRAG, and memory context."""
    return await chat_service.handle_message(request, tenant_id=claims.tenant_id)
