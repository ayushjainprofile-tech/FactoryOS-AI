"""Tests for Metadata Indexing & Provenance Tracking."""

import pytest
from src.models.document_chunk import DocumentChunkModel
from src.rag.index_metadata import IndexMetadataBuilder


def test_build_metadata_provenance():
    builder = IndexMetadataBuilder()
    chunk = DocumentChunkModel(
        id="c_100",
        document_id="doc_50",
        tenant_id="tenant_alpha",
        chunk_index=0,
        content="Vibration baseline 1.5 mm/s",
        token_count=4,
        start_char_offset=0,
        end_char_offset=27,
    )

    meta = builder.build_metadata(
        chunk=chunk,
        embedding_model="text-embedding-3-small",
        plant_id="plant_north",
        department_id="dept_maint",
        document_type="pdf",
    )

    assert meta["source_id"] == "doc_50"
    assert meta["chunk_id"] == "c_100"
    assert meta["tenant_id"] == "tenant_alpha"
    assert meta["plant_id"] == "plant_north"
    assert meta["department_id"] == "dept_maint"
    assert meta["document_type"] == "pdf"
    assert "content_hash" in meta
