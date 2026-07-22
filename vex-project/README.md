# 🏭 FactoryOS AI — Enterprise Industrial Knowledge & Document Intelligence Platform

> **Every Document. Every Machine. One AI Brain.**

FactoryOS AI is an autonomous, multi-agent reasoning and industrial document intelligence platform engineered for enterprise manufacturing, plant floor operations, and predictive maintenance.

---

## 🌟 Key Features

- **📄 Multi-Engine OCR & Document Processing**: Ingests PDFs, engineering CAD schematics (`.dwg`), P&ID diagrams, handwritten maintenance logs, and shift reports into structured vector & graph representations.
- **🔍 Deterministic Vector & Graph RAG**: Combines vector-based semantic search with Neo4j GraphRAG topology to trace asset relationships, SOPs, historical failure modes, and safety guidelines.
- **🤖 Stateful LangGraph Multi-Agent Ecosystem**: 20+ specialized agents (Document AI, Root Cause Investigator, Compliance Guardian, AI Vision, Engineering Copilot) orchestrating real-time diagnostics and workflow triggers.
- **🛡️ Enterprise Safety & Redaction**: Built-in PII and secret masking, ISO/OSHA statutory compliance audit trails, and strict role-based access control (RBAC).

---

## 🏗️ System Architecture

```text
  ┌─────────────────────────────────────────────────────────────────┐
  │   User Interface Tier: React + Vite + WebGL 3D Digital Twin     │
  └─────────────────────────────────┬───────────────────────────────┘
                                    │ HTTPS / WSS
  ┌─────────────────────────────────▼───────────────────────────────┐
  │   API Gateway: Python FastAPI + JWT Authentication + Rate Limit │
  └─────────────────────────────────┬───────────────────────────────┘
                                    │ State Graph Handoff
  ┌─────────────────────────────────▼───────────────────────────────┐
  │   Core Orchestration Hub: LangGraph Multi-Agent Architecture    │
  └─────────────────┬───────────────────────────────┬───────────────┘
                    │                               │
  ┌─────────────────▼──────────────┐  ┌─────────────▼──────────────┐
  │      AI Inference Subsystem    │  │ Distributed Repositories    │
  │  Gemini Vision • Docling OCR   │  │ Neo4j • PostgreSQL • Redis  │
  └────────────────────────────────┘  └─────────────────────────────┘
```

---

## 📁 Repository Structure

```text
vex-project/
├── backend/                  # Python FastAPI Backend Service
│   ├── src/
│   │   ├── config/           # Environment & App Settings
│   │   ├── core/             # Health, Lifespan, Exception Handlers
│   │   ├── ocr/              # Gemini Vision, Tesseract & Email Parsers
│   │   ├── rag/              # Chunking, Indexer & Retrieval Pipeline
│   │   ├── repositories/     # Document & Graph Storage Handlers
│   │   └── tests/            # Test Suites & Mock Redaction Benchmarks
│   ├── Dockerfile            # Container Definition
│   └── .env.example          # Environment Variables Template
├── src/                      # Frontend Application (React + Vite)
│   ├── api/                  # API Client Integration
│   └── components/           # UI Components & Dashboard Views
├── database/                 # SQL Schemas, Migrations & ER Diagrams
├── AGENTS.md                 # Agent Specifications
└── README.md                 # Project Overview & Setup Guide
```

---

## 🚀 Quick Start & Installation

### Prerequisites
- Node.js (v18+)
- Python 3.11+
- PostgreSQL & Redis (or Docker)

### 1. Backend Setup
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt   # or pip install fastapi uvicorn pydantic
cp .env.example .env
uvicorn src.main:app --reload --port 8000
```

### 2. Frontend Setup
```bash
npm install
npm run dev
```

---

## 🔒 Privacy & Security Audit

This repository has undergone a security review:
- No hardcoded API keys, tokens, or credentials exist in the codebase.
- Environmental variables are managed via `.env.example` templates.
- Secret masking and PII redaction utilities are enforced at logging and ingestion tiers.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
