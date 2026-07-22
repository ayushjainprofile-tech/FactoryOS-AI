"""Graph Builder — coordinates entity/relation extraction and repository persistence."""

from typing import List, Optional
from src.knowledge_graph.entity_extractor import EntityExtractor
from src.knowledge_graph.relation_extractor import RelationExtractor
from src.repositories.graph_repository import GraphRepository


class GraphBuilder:
    """Extracts entities and relations from document content and builds knowledge graph records."""

    def __init__(
        self,
        entity_extractor: Optional[EntityExtractor] = None,
        relation_extractor: Optional[RelationExtractor] = None,
        graph_repo: Optional[GraphRepository] = None,
    ) -> None:
        self.entity_extractor = entity_extractor or EntityExtractor()
        self.relation_extractor = relation_extractor or RelationExtractor()
        self.graph_repo = graph_repo or GraphRepository()

    async def build_from_text(
        self,
        text: str,
        tenant_id: str,
        document_id: Optional[str] = None,
        chunk_id: Optional[str] = None,
    ) -> dict:
        nodes = self.entity_extractor.extract_entities(text, tenant_id, document_id, chunk_id)
        edges = self.relation_extractor.extract_relations(nodes, text, tenant_id, document_id, chunk_id)

        for n in nodes:
            await self.graph_repo.upsert_node(n)
        for e in edges:
            await self.graph_repo.upsert_edge(e)

        return {"nodes_count": len(nodes), "edges_count": len(edges)}
