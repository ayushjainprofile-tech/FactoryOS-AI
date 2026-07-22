"""Tests for Document Repository."""

import pytest
from src.models.document import DocumentModel
from src.repositories.document_repository import DocumentRepository


@pytest.mark.asyncio
async def test_document_repository_tenant_isolation():
    repo = DocumentRepository()
    doc_a = DocumentModel(
        id="d1", tenant_id="tenant_A", filename="sop.pdf", file_type="pdf", file_size_bytes=1024, storage_path="s3://path"
    )
    doc_b = DocumentModel(
        id="d2", tenant_id="tenant_B", filename="manual.pdf", file_type="pdf", file_size_bytes=2048, storage_path="s3://path"
    )

    await repo.save(doc_a)
    await repo.save(doc_b)

    docs_a = await repo.list_by_tenant("tenant_A")
    assert len(docs_a) == 1
    assert docs_a[0].id == "d1"
