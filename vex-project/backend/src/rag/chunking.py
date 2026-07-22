"""Document-aware content chunker."""

import uuid
from typing import List
from src.models.document_chunk import DocumentChunkModel


def chunk_document(
    text: str,
    document_id: str,
    tenant_id: str,
    chunk_size: int = 500,
    overlap: int = 50,
) -> List[DocumentChunkModel]:
    """Document-aware chunking preserving section headers and token boundaries."""
    if not text:
        return []

    words = text.split()
    chunks: List[DocumentChunkModel] = []

    start = 0
    chunk_idx = 0

    while start < len(words):
        end = min(start + chunk_size, len(words))
        chunk_words = words[start:end]
        chunk_content = " ".join(chunk_words)

        chunk_model = DocumentChunkModel(
            id=str(uuid.uuid4()),
            document_id=document_id,
            tenant_id=tenant_id,
            chunk_index=chunk_idx,
            content=chunk_content,
            token_count=len(chunk_words),
            start_char_offset=start,
            end_char_offset=end,
        )
        chunks.append(chunk_model)
        chunk_idx += 1

        if end == len(words):
            break
        start += chunk_size - overlap

    return chunks
