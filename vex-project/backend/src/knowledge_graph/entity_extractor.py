"""Entity Extractor — detects domain entities and creates GraphNodeModels."""

import re
import uuid
from typing import List, Optional
from src.knowledge_graph.schema import EntityType
from src.models.graph_node import GraphNodeModel
from src.models.graph_provenance import GraphProvenanceModel


class EntityExtractor:
    """Extracts typed domain entities from text chunks."""

    def extract_entities(
        self,
        text: str,
        tenant_id: str,
        document_id: Optional[str] = None,
        chunk_id: Optional[str] = None,
    ) -> List[GraphNodeModel]:
        entities: List[GraphNodeModel] = []
        prov = GraphProvenanceModel(tenant_id=tenant_id, document_id=document_id, chunk_id=chunk_id)

        # Regex heuristic for equipment tag patterns (e.g. P-101, C-302, V-501, ISO-10816)
        equipment_tags = set(re.findall(r"\b([A-Z]{1,4}-\d{2,4}[A-Z]?)\b", text))
        for tag in equipment_tags:
            node = GraphNodeModel(
                id=f"node_{tag}",
                tenant_id=tenant_id,
                name=tag,
                entity_type=EntityType.EQUIPMENT.value,
                provenance=prov,
            )
            entities.append(node)

        # Failure detection heuristic
        if "vibration" in text.lower() or "bearing wear" in text.lower():
            fail_node = GraphNodeModel(
                id=f"node_failure_{uuid.uuid4().hex[:6]}",
                tenant_id=tenant_id,
                name="Vibration / Bearing Wear",
                entity_type=EntityType.FAILURE.value,
                provenance=prov,
            )
            entities.append(fail_node)

        return entities
