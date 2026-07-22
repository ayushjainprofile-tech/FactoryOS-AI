"""Hybrid Search — Reciprocal Rank Fusion (RRF) and score merging for dense and sparse results."""

from typing import Dict, List
from src.rag.retriever import RetrievedChunk


class HybridSearchEngine:
    """Fuses dense vector results and sparse BM25 keyword results using Reciprocal Rank Fusion (RRF)."""

    def __init__(self, rrf_k: int = 60, dense_weight: float = 0.6, sparse_weight: float = 0.4) -> None:
        self.rrf_k = rrf_k
        self.dense_weight = dense_weight
        self.sparse_weight = sparse_weight

    def fuse_results(
        self,
        dense_results: List[RetrievedChunk],
        sparse_results: List[RetrievedChunk],
        top_k: int = 5,
    ) -> List[RetrievedChunk]:
        """Merges, deduplicates, and re-scores candidates using RRF."""
        scores: Dict[str, float] = {}
        chunk_map: Dict[str, RetrievedChunk] = {}

        # Process dense results
        for rank, chunk in enumerate(dense_results):
            cid = chunk.chunk_id
            chunk_map[cid] = chunk
            rrf_score = self.dense_weight * (1.0 / (self.rrf_k + rank + 1))
            scores[cid] = scores.get(cid, 0.0) + rrf_score

        # Process sparse results
        for rank, chunk in enumerate(sparse_results):
            cid = chunk.chunk_id
            if cid not in chunk_map:
                chunk_map[cid] = chunk
            rrf_score = self.sparse_weight * (1.0 / (self.rrf_k + rank + 1))
            scores[cid] = scores.get(cid, 0.0) + rrf_score

        # Sort candidates by fused score
        sorted_ids = sorted(scores.keys(), key=lambda k: scores[k], reverse=True)

        fused_chunks: List[RetrievedChunk] = []
        for cid in sorted_ids[:top_k]:
            c = chunk_map[cid]
            c.score = round(scores[cid], 5)
            fused_chunks.append(c)

        return fused_chunks
