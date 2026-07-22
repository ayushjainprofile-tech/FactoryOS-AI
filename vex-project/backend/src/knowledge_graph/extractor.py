"""Knowledge Graph Extractor for extracting entities and relations from document text."""

import re
import uuid
from typing import List
from src.knowledge_graph.schema import EntityType, RelationType
from src.models.document_chunk import DocumentChunkModel
from src.models.document_graph import DocumentGraphModel, GraphEntityModel, GraphRelationshipModel


class KnowledgeGraphExtractor:
    """Extracts domain entities (equipment, tags, failures, actions) and relations from chunks."""

    def extract_graph(
        self, tenant_id: str, document_id: str, chunks: List[DocumentChunkModel]
    ) -> DocumentGraphModel:
        entities: List[GraphEntityModel] = []
        relationships: List[GraphRelationshipModel] = []

        equipment_pattern = re.compile(r"\b([A-Z]{1,4}-\d{2,4}[A-Z]?)\b")

        for chunk in chunks:
            matches = equipment_pattern.findall(chunk.content)
            for tag in matches:
                entity = GraphEntityModel(
                    id=str(uuid.uuid4()),
                    name=tag,
                    entity_type=EntityType.EQUIPMENT.value,
                    properties={"tag": tag},
                    source_chunk_ids=[chunk.id],
                )
                entities.append(entity)

        return DocumentGraphModel(
            document_id=document_id,
            tenant_id=tenant_id,
            entities=entities,
            relationships=relationships,
        )
