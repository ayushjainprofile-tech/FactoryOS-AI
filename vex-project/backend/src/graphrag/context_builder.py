"""GraphRAG Context Builder — constructs combined graph facts and text evidence prompt context."""

from typing import Any, Dict


class GraphRAGContextBuilder:
    """Assembles graph structures and vector text chunks into a unified prompt context."""

    def build_context(self, fused_bundle: Dict[str, Any], max_chars: int = 4000) -> str:
        graph_facts = fused_bundle.get("graph_facts", [])
        text_evidence = fused_bundle.get("text_evidence", [])

        sections = []
        if graph_facts:
            sections.append("Knowledge Graph Knowledge & Relationships:\n" + "\n".join(f"- {gf}" for gf in graph_facts))
        if text_evidence:
            sections.append("Textual Document Evidence:\n" + "\n\n".join(text_evidence))

        full_context = "\n\n".join(sections)
        return full_context[:max_chars]
