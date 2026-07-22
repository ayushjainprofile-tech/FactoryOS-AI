"""Tests for the complete Document Processing Pipeline."""

import pytest
from src.ocr.ocr_service import OCRService
from src.rag.cleaning import clean_text
from src.rag.chunking import chunk_document
from src.embeddings.embedding_service import EmbeddingService
from src.knowledge_graph.extractor import KnowledgeGraphExtractor
from src.orchestrator.document_ingestion_flow import DocumentIngestionFlow
from src.repositories.document_repository import DocumentRepository
from src.repositories.document_chunk_repository import DocumentChunkRepository


@pytest.mark.asyncio
async def test_pdf_ingestion():
    flow = DocumentIngestionFlow()
    doc = await flow.run(
        filename="manual.pdf",
        content=b"%PDF-1.4 sample content",
        tenant_id="tenant_01",
    )
    assert doc.status == "completed"
    assert doc.file_type == "pdf"


@pytest.mark.asyncio
async def test_docx_ingestion():
    flow = DocumentIngestionFlow()
    doc = await flow.run(
        filename="sop.docx",
        content=b"docx sample content",
        tenant_id="tenant_01",
    )
    assert doc.status == "completed"
    assert doc.file_type == "docx"


@pytest.mark.asyncio
async def test_excel_ingestion():
    flow = DocumentIngestionFlow()
    doc = await flow.run(
        filename="telemetry.xlsx",
        content=b"excel sample content",
        tenant_id="tenant_01",
    )
    assert doc.status == "completed"
    assert doc.file_type == "xlsx"


@pytest.mark.asyncio
async def test_image_ocr_ingestion():
    flow = DocumentIngestionFlow()
    doc = await flow.run(
        filename="dial_reading.png",
        content=b"fake image bytes",
        tenant_id="tenant_01",
    )
    assert doc.status == "completed"
    assert doc.ocr_extracted is True


@pytest.mark.asyncio
async def test_email_parsing():
    service = OCRService()
    res = service.process_document(b"email bytes", "alert.eml")
    assert "Maintenance Alert" in res["text"]
    assert res["metadata"]["sender"] == "engineer@plant.com"


@pytest.mark.asyncio
async def test_cad_parsing():
    service = OCRService()
    res = service.process_document(b"cad bytes", "drawing.pid")
    assert "P-101" in res["metadata"]["extracted_tags"]


def test_text_cleaning():
    raw = "Header   Text\n\n\n\nBody   Content  \x00"
    cleaned = clean_text(raw)
    assert "Header Text" in cleaned
    assert "\x00" not in cleaned


def test_chunking_and_offsets():
    text = "Word " * 600
    chunks = chunk_document(text, "doc_1", "tenant_1", chunk_size=200, overlap=20)
    assert len(chunks) > 1
    assert chunks[0].chunk_index == 0
    assert chunks[1].chunk_index == 1


def test_embedding_service_cache():
    emb = EmbeddingService()
    vec1 = emb.generate_embedding("pump pressure limit")
    vec2 = emb.generate_embedding("pump pressure limit")
    assert vec1 == vec2
    assert len(vec1) == 1536


def test_graph_extraction():
    extractor = KnowledgeGraphExtractor()
    chunks = chunk_document("Pump P-101 and Compressor C-302 failed.", "doc_1", "t1")
    graph = extractor.extract_graph("t1", "doc_1", chunks)
    assert len(graph.entities) >= 2
    entity_names = [e.name for e in graph.entities]
    assert "P-101" in entity_names
    assert "C-302" in entity_names


@pytest.mark.asyncio
async def test_tenant_isolation_storage():
    doc_repo = DocumentRepository()
    chunk_repo = DocumentChunkRepository()
    flow = DocumentIngestionFlow(doc_repo=doc_repo, chunk_repo=chunk_repo)

    doc_a = await flow.run("docA.pdf", b"Content A", tenant_id="tenant_A")
    doc_b = await flow.run("docB.pdf", b"Content B", tenant_id="tenant_B")

    chunks_a = await chunk_repo.get_by_document("tenant_A", doc_a.id)
    chunks_b_on_a = await chunk_repo.get_by_document("tenant_A", doc_b.id)

    assert len(chunks_a) > 0
    assert len(chunks_b_on_a) == 0
