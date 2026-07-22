"""Document Graph Linker — links graph nodes back to chunks and documents."""

from typing import List
from src.models.document_chunk import DocumentChunkModel
from src.models.document_graph import DocumentGraphModel


class DocumentGraphLinker:
    """Binds knowledge graph extractions to source chunks for provenance tracking."""

    def link_graph_to_sources(
        self, graph: DocumentGraphModel, chunks: List[DocumentChunkModel]
    ) -> DocumentGraphModel:
        chunk_map = {c.id: c for c in chunks}
        for entity in graph.entities:
            for cid in entity.source_chunk_ids:
                if cid in chunk_map:
                    entity.properties["source_section"] = chunk_map[cid].section_title
        return graph
