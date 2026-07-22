"""GraphRAG Orchestrator — orchestrates entity queries, multi-hop graph retrieval, vector fusion, & context building."""

from typing import Any, Dict, List, Optional
from src.agents.llm_agent import BaseLLMAgent
from src.graphrag.context_builder import GraphRAGContextBuilder
from src.graphrag.graph_fuser import GraphFuser
from src.graphrag.graph_retriever import GraphRetriever
from src.rag.prompt_builder import PromptBuilder
from src.rag.retriever import Retriever


class GraphRAGOrchestrator:
    """End-to-end GraphRAG pipeline: Entities -> Subgraph -> Vector Search -> Fusion -> Generation."""

    def __init__(
        self,
        graph_retriever: Optional[GraphRetriever] = None,
        vector_retriever: Optional[Retriever] = None,
        llm_agent: Optional[BaseLLMAgent] = None,
    ) -> None:
        self.graph_retriever = graph_retriever or GraphRetriever()
        self.vector_retriever = vector_retriever or Retriever()
        self.fuser = GraphFuser()
        self.context_builder = GraphRAGContextBuilder()
        self.prompt_builder = PromptBuilder()
        self.llm_agent = llm_agent or BaseLLMAgent()

    async def execute_query(
        self,
        query: str,
        tenant_id: str,
        top_k: int = 5,
    ) -> Dict[str, Any]:
        trace: List[str] = []

        # 1. Retrieve Graph Subgraph
        subgraph = await self.graph_retriever.retrieve_subgraph(query, tenant_id)
        trace.append(f"Retrieved graph subgraph with {len(subgraph.nodes)} nodes")

        # 2. Retrieve Vector Chunks
        vector_chunks = await self.vector_retriever.retrieve(query, tenant_id, top_k=top_k)
        trace.append(f"Retrieved {len(vector_chunks)} vector chunks")

        # 3. Graph + Vector Fusion
        fused_bundle = self.fuser.fuse(subgraph, vector_chunks)
        trace.append("Fused graph facts and vector text evidence")

        # 4. Build Context
        context_str = self.context_builder.build_context(fused_bundle)
        trace.append("Built combined GraphRAG context")

        # 5. Build Grounded Prompt & Generate
        prompt = self.prompt_builder.build_prompt(query, vector_chunks, system_instruction="Use both knowledge graph relationships and text evidence.")
        answer = await self.llm_agent.generate(prompt)

        return {
            "answer": answer,
            "fused_evidence": fused_bundle,
            "trace": trace,
            "tenant_id": tenant_id,
        }
