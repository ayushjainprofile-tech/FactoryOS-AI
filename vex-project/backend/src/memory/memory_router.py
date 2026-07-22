"""Memory Router — coordinates memory retrieval, permission checks, & prompt context fusion."""

from typing import Any, Dict, List, Optional
from src.memory.conversation_memory import ConversationMemory
from src.memory.document_memory import DocumentMemory
from src.memory.equipment_memory import EquipmentMemory
from src.memory.executive_memory import ExecutiveMemory
from src.memory.investigation_memory import InvestigationMemory
from src.memory.knowledge_memory import KnowledgeMemory
from src.memory.memory_policies import is_authorized
from src.memory.memory_summarizer import MemorySummarizer


class MemoryRouter:
    """Routes retrieval across memory stores and fuses relevant context for model prompting."""

    def __init__(
        self,
        conversation_mem: Optional[ConversationMemory] = None,
        equipment_mem: Optional[EquipmentMemory] = None,
        document_mem: Optional[DocumentMemory] = None,
        knowledge_mem: Optional[KnowledgeMemory] = None,
        investigation_mem: Optional[InvestigationMemory] = None,
        executive_mem: Optional[ExecutiveMemory] = None,
    ) -> None:
        self.conversation_mem = conversation_mem or ConversationMemory()
        self.equipment_mem = equipment_mem or EquipmentMemory()
        self.document_mem = document_mem or DocumentMemory()
        self.knowledge_mem = knowledge_mem or KnowledgeMemory()
        self.investigation_mem = investigation_mem or InvestigationMemory()
        self.executive_mem = executive_mem or ExecutiveMemory()
        self.summarizer = MemorySummarizer()

    async def fuse_memory_context(
        self,
        tenant_id: str,
        user_id: str,
        user_role: str,
        conversation_id: Optional[str] = None,
        equipment_id: Optional[str] = None,
        document_ids: Optional[List[str]] = None,
        case_id: Optional[str] = None,
    ) -> Dict[str, str]:
        """Fuses memory from authorized domains into context blocks."""
        fused: Dict[str, str] = {}

        # 1. Conversation Memory
        if conversation_id and is_authorized("conversation", user_role):
            fused["conversation"] = await self.conversation_mem.get_summary(tenant_id, conversation_id)

        # 2. Equipment Memory
        if equipment_id and is_authorized("equipment", user_role):
            fused["equipment"] = await self.equipment_mem.load_equipment_context(tenant_id, equipment_id)

        # 3. Document Memory
        if document_ids and is_authorized("document", user_role):
            fused["document"] = await self.document_mem.load_document_context(tenant_id, document_ids)

        # 4. Investigation Memory
        if case_id and is_authorized("investigation", user_role):
            findings = await self.investigation_mem.get_findings(tenant_id, case_id)
            fused["investigation"] = self.summarizer.summarize(findings)

        # 5. Executive Memory
        if is_authorized("executive", user_role):
            decisions = await self.executive_mem.get_decisions(tenant_id, user_id)
            fused["executive"] = self.summarizer.summarize(decisions)

        return fused
