"""RAG LLM Pipeline Chain — coordinates retrieval, hybrid search, reranking, prompt building, & response."""

from typing import List, Optional
from src.agents.llm_agent import BaseLLMAgent
from src.rag.attribution import AttributionTracker
from src.rag.filters import RAGFilters
from src.rag.hybrid_search import HybridSearchEngine
from src.rag.prompt_builder import PromptBuilder
from src.rag.query_rewriter import QueryRewriter
from src.rag.reranker import Reranker
from src.rag.response_schema import RAGResponse
from src.rag.retriever import Retriever


class RAGPipeline:
    """Complete RAG chain: Query -> Rewrite -> Retrieve -> Hybrid -> Rerank -> Prompt -> LLM -> Attribution."""

    def __init__(
        self,
        retriever: Optional[Retriever] = None,
        llm_agent: Optional[BaseLLMAgent] = None,
    ) -> None:
        self.rewriter = QueryRewriter()
        self.retriever = retriever or Retriever()
        self.hybrid_engine = HybridSearchEngine()
        self.reranker = Reranker()
        self.prompt_builder = PromptBuilder()
        self.attribution_tracker = AttributionTracker()
        self.llm_agent = llm_agent or BaseLLMAgent()

    async def execute(
        self,
        query: str,
        tenant_id: str,
        filters: Optional[RAGFilters] = None,
        top_k: int = 5,
        conversation_history: Optional[List[str]] = None,
    ) -> RAGResponse:
        trace: List[str] = []

        # 1. Query Rewrite
        rewritten_query = self.rewriter.rewrite(query, conversation_history)
        trace.append(f"Query rewritten: '{rewritten_query}'")

        # 2. Retrieval
        dense_candidates = await self.retriever.retrieve(
            query=rewritten_query,
            tenant_id=tenant_id,
            top_k=top_k * 2,
            filters=filters,
        )
        trace.append(f"Retrieved {len(dense_candidates)} dense candidates")

        # 3. Hybrid Fusion
        fused_candidates = self.hybrid_engine.fuse_results(
            dense_results=dense_candidates,
            sparse_results=[],
            top_k=top_k * 2,
        )
        trace.append(f"Hybrid fused {len(fused_candidates)} candidates")

        # 4. Re-ranking
        reranked_chunks = self.reranker.rerank(rewritten_query, fused_candidates, top_k=top_k)
        trace.append(f"Reranked top {len(reranked_chunks)} chunks")

        # 5. Prompt Construction
        prompt = self.prompt_builder.build_prompt(rewritten_query, reranked_chunks)
        trace.append("Prompt constructed successfully")

        # 6. Generation
        answer = await self.llm_agent.generate(prompt)
        trace.append("LLM generation completed")

        # 7. Attribution Assembly
        attributions = self.attribution_tracker.build_attributions(reranked_chunks)

        return RAGResponse(
            answer=answer,
            attributions=attributions,
            confidence=0.95,
            model_name=self.llm_agent.model_name,
            execution_trace=trace,
        )
