"""Industrial GPT Agent — the primary conversational intelligence agent."""

import uuid
from typing import Any, Dict, List, Optional

from src.memory.conversation_memory import ConversationMemory
from src.memory.document_memory import DocumentMemory
from src.memory.equipment_memory import EquipmentMemory
from src.prompts.chat.citation_prompt import CITATION_PROMPT_V1
from src.prompts.chat.confidence_prompt import (
    CONFIDENCE_PROMPT_HIGH_V1,
    CONFIDENCE_PROMPT_LOW_V1,
    CONFIDENCE_PROMPT_MEDIUM_V1,
)
from src.prompts.chat.conversation_prompt import CONVERSATION_PROMPT_V1
from src.prompts.chat.memory_prompt import MEMORY_PROMPT_V1
from src.prompts.chat.system_prompt import SYSTEM_PROMPT_V1
from src.rag.citation_engine import Citation, CitationEngine
from src.rag.confidence_engine import ConfidenceEngine, ConfidenceResult
from src.rag.retriever import RetrievedChunk, Retriever


class IndustrialGPTResponse:
    """Structured response container from the Industrial GPT agent."""

    def __init__(
        self,
        conversation_id: str,
        response_text: str,
        citations: List[Citation],
        confidence: ConfidenceResult,
        execution_trace: List[str],
    ):
        self.conversation_id = conversation_id
        self.response_text = response_text
        self.citations = citations
        self.confidence = confidence
        self.execution_trace = execution_trace

    def to_dict(self) -> Dict[str, Any]:
        return {
            "conversation_id": self.conversation_id,
            "response": self.response_text,
            "citations": [c.model_dump() for c in self.citations],
            "confidence": self.confidence.model_dump(),
            "execution_trace": self.execution_trace,
        }


class IndustrialGPTAgent:
    """Primary conversational AI agent with memory integration, RAG, citations, and confidence scoring."""

    def __init__(
        self,
        retriever: Retriever,
        citation_engine: CitationEngine,
        confidence_engine: ConfidenceEngine,
        conversation_memory: ConversationMemory,
        equipment_memory: EquipmentMemory,
        document_memory: DocumentMemory,
    ):
        self.retriever = retriever
        self.citation_engine = citation_engine
        self.confidence_engine = confidence_engine
        self.conversation_memory = conversation_memory
        self.equipment_memory = equipment_memory
        self.document_memory = document_memory

    async def process(
        self,
        query: str,
        tenant_id: str,
        user_id: str,
        roles: List[str],
        plant_id: Optional[str] = None,
        equipment_id: Optional[str] = None,
        document_ids: Optional[List[str]] = None,
        conversation_id: Optional[str] = None,
    ) -> IndustrialGPTResponse:
        """Full pipeline: memory load -> retrieval -> citation -> confidence -> response."""
        conv_id = conversation_id or str(uuid.uuid4())
        trace: List[str] = []
        user_role = roles[0] if roles else "User"

        # Step 1: Load conversation memory
        conv_summary = await self.conversation_memory.get_summary(tenant_id, conv_id)
        trace.append(f"Loaded conversation memory for {conv_id}")

        # Step 2: Load equipment memory if relevant
        equipment_context = ""
        if equipment_id:
            equipment_context = await self.equipment_memory.load_equipment_context(tenant_id, equipment_id)
            trace.append(f"Loaded equipment memory for {equipment_id}")

        # Step 3: Load document memory if relevant
        document_context = ""
        if document_ids:
            document_context = await self.document_memory.load_document_context(tenant_id, document_ids)
            trace.append(f"Loaded document memory for {len(document_ids)} documents")

        # Step 4: Retrieve supporting evidence
        chunks = await self.retriever.retrieve(query, tenant_id=tenant_id, top_k=5)
        trace.append(f"Retrieved {len(chunks)} evidence chunks")

        # Step 5: Generate citations
        citations = self.citation_engine.generate_citations(chunks)
        citations_text = self.citation_engine.format_citations_for_prompt(citations)
        trace.append(f"Generated {len(citations)} citations")

        # Step 6: Score confidence
        memory_coverage = bool(equipment_context or document_context)
        confidence = self.confidence_engine.score(
            citations=citations,
            memory_coverage=memory_coverage,
            has_conflicts=False,
        )
        trace.append(f"Confidence scored: {confidence.level} ({confidence.score})")

        # Step 7: Select confidence-appropriate behavior prompt
        if confidence.level == "high":
            confidence_instruction = CONFIDENCE_PROMPT_HIGH_V1
        elif confidence.level == "medium":
            confidence_instruction = CONFIDENCE_PROMPT_MEDIUM_V1
        else:
            confidence_instruction = CONFIDENCE_PROMPT_LOW_V1

        # Step 8: Assemble prompt context
        system_context = SYSTEM_PROMPT_V1.format(
            tenant_id=tenant_id,
            plant_id=plant_id or "N/A",
            user_role=user_role,
            equipment_id=equipment_id or "N/A",
        )
        memory_context = MEMORY_PROMPT_V1.format(
            equipment_memory=equipment_context or "None loaded.",
            document_memory=document_context or "None loaded.",
        )
        citation_context = CITATION_PROMPT_V1.format(citations_text=citations_text)

        # Step 9: Generate response (simulated LLM call for now)
        if confidence.should_fallback:
            response_text = (
                f"I need more information to answer confidently. "
                f"Could you clarify which specific aspect of '{query}' you'd like me to investigate? "
                f"For example, are you asking about vibration diagnostics, maintenance history, or compliance status?"
            )
        else:
            evidence_summary = "; ".join([c.excerpt[:100] for c in citations[:3]])
            response_text = (
                f"Based on available evidence: {evidence_summary}. "
                f"[cite_1] indicates the primary diagnostic finding. "
                f"Recommended action: verify the condition on-site and schedule corrective maintenance if confirmed."
            )

        trace.append("Response generated successfully.")

        # Step 10: Persist user turn and assistant turn to conversation memory
        await self.conversation_memory.write(tenant_id, conv_id, f"User: {query}")
        await self.conversation_memory.write(tenant_id, conv_id, f"Assistant: {response_text[:200]}")

        return IndustrialGPTResponse(
            conversation_id=conv_id,
            response_text=response_text,
            citations=citations,
            confidence=confidence,
            execution_trace=trace,
        )
