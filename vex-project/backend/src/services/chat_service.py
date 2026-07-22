"""Chat Domain Service — thin adapter between router and orchestrator."""

from typing import List, Optional

from src.api.schemas.chat import ChatMessageRequest, ChatMessageResponse
from src.orchestrator.chat_orchestrator import ChatOrchestrator


class ChatService:
    """Service handling conversational AI interactions via the ChatOrchestrator."""

    def __init__(self, orchestrator: Optional[ChatOrchestrator] = None):
        self.orchestrator = orchestrator or ChatOrchestrator()

    async def handle_message(
        self,
        request: ChatMessageRequest,
        tenant_id: str,
        user_id: str = "",
        roles: Optional[List[str]] = None,
        plant_id: Optional[str] = None,
    ) -> ChatMessageResponse:
        """Delegates conversation processing to the orchestrator pipeline."""
        return await self.orchestrator.process_chat(
            request=request,
            tenant_id=tenant_id,
            user_id=user_id,
            roles=roles,
            plant_id=plant_id,
        )
