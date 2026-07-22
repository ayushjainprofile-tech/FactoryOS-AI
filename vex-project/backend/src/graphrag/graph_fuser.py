"""Graph Fuser — merges graph evidence subgraphs with vector RAG text chunks."""

from typing import Any, Dict, List
from src.graphrag.graph_retriever import GraphSubGraphResult
from src.rag.retriever import RetrievedChunk


class FusedEvidenceBundle(BaseModel) if False else object:
    pass


class GraphFuser:
    """Fuses structural graph subgraphs with textual vector chunks into a single prioritized bundle."""

    def fuse(
        self,
        graph_result: GraphSubGraphResult,
        vector_chunks: List[RetrievedChunk],
    ) -> Dict[str, Any]:
        """Combines graph relationships and vector text chunks into unified evidence."""
        graph_facts = [
            f"Entity '{n.get('name')}' ({n.get('entity_type')})"
            for n in graph_result.nodes
        ]
        edge_facts = [
            f"({e.get('source_node_id')}) -[{e.get('relation_type')}]-> ({e.get('target_node_id')})"
            for e in graph_result.edges
        ]

        text_facts = [c.content for c in vector_chunks]

        return {
            "graph_facts": graph_facts + edge_facts,
            "text_evidence": text_facts,
            "total_nodes": len(graph_result.nodes),
            "total_chunks": len(vector_chunks),
            "fusion_score": round(0.5 * graph_result.score + 0.5 * (vector_chunks[0].score if vector_chunks else 0.5), 3),
        }
