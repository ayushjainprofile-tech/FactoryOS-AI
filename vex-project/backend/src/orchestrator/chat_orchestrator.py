"""Chat Orchestrator — coordinates memory, retrieval, and Industrial GPT agent."""

import uuid
from typing import Any, Dict, List, Optional

from src.agents.industrial_gpt import IndustrialGPTAgent, IndustrialGPTResponse
from src.api.schemas.chat import ChatCitation, ChatMessageRequest, ChatMessageResponse
from src.memory.conversation_memory import ConversationMemory
from src.memory.document_memory import DocumentMemory
from src.memory.equipment_memory import EquipmentMemory
from src.rag.citation_engine import CitationEngine
from src.rag.confidence_engine import ConfidenceEngine
from src.rag.retriever import Retriever


class ChatOrchestrator:
    """Orchestrates the Industrial GPT chat pipeline end-to-end."""

    def __init__(
        self,
        retriever: Optional[Retriever] = None,
        citation_engine: Optional[CitationEngine] = None,
        confidence_engine: Optional[ConfidenceEngine] = None,
        conversation_memory: Optional[ConversationMemory] = None,
        equipment_memory: Optional[EquipmentMemory] = None,
        document_memory: Optional[DocumentMemory] = None,
    ):
        self.retriever = retriever or Retriever()
        self.citation_engine = citation_engine or CitationEngine()
        self.confidence_engine = confidence_engine or ConfidenceEngine()
        self.conversation_memory = conversation_memory or ConversationMemory()
        self.equipment_memory = equipment_memory or EquipmentMemory()
        self.document_memory = document_memory or DocumentMemory()

        self.agent = IndustrialGPTAgent(
            retriever=self.retriever,
            citation_engine=self.citation_engine,
            confidence_engine=self.confidence_engine,
            conversation_memory=self.conversation_memory,
            equipment_memory=self.equipment_memory,
            document_memory=self.document_memory,
        )

    async def process_chat(
        self,
        request: ChatMessageRequest,
        tenant_id: str,
        user_id: str = "",
        roles: Optional[List[str]] = None,
        plant_id: Optional[str] = None,
    ) -> ChatMessageResponse:
        """Converts API request into a full Industrial GPT processing pipeline call."""
        gpt_response: IndustrialGPTResponse = await self.agent.process(
            query=request.message,
            tenant_id=tenant_id,
            user_id=user_id,
            roles=roles or ["User"],
            plant_id=plant_id,
            equipment_id=request.equipment_id,
            conversation_id=request.conversation_id,
        )

        # Map internal citations to API schema format
        api_citations = [
            ChatCitation(
                source_type=c.source_type,
                title=c.source_id,
                content=c.excerpt,
                score=c.confidence,
            )
            for c in gpt_response.citations
        ]

        return ChatMessageResponse(
            conversation_id=gpt_response.conversation_id,
            response=gpt_response.response_text,
            citations=api_citations,
            metadata={
                "confidence": gpt_response.confidence.model_dump(),
                "execution_trace": gpt_response.execution_trace,
                "tenant_id": tenant_id,
            },
        )
