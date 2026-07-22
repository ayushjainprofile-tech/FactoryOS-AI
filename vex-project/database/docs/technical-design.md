# FactoryOS AI — Database Technical Design Document
**Version:** 1.0 | **Project:** FactoryOS AI | **Team:** CodeHack
**Stack:** PostgreSQL (primary) · pgvector (embeddings) · Neo4j (knowledge graph)

---

## Table of Contents
1. [Users](#1-users)
2. [Plants](#2-plants)
3. [Equipment](#3-equipment)
4. [Documents](#4-documents)
5. [Document Chunks](#5-document-chunks)
6. [Embeddings](#6-embeddings)
7. [Knowledge Graph Nodes](#7-knowledge-graph-nodes)
8. [Knowledge Graph Relationships](#8-knowledge-graph-relationships)
9. [AI Investigations](#9-ai-investigations)
10. [Alerts](#10-alerts)
11. [Work Orders](#11-work-orders)
12. [Compliance](#12-compliance)
13. [Audit Logs](#13-audit-logs)
14. [Maintenance History](#14-maintenance-history)
15. [Sensor Data](#15-sensor-data)
16. [AI Chat History](#16-ai-chat-history)
17. [AI Feedback](#17-ai-feedback)
18. [Workflow Automation](#18-workflow-automation)
19. [Reports](#19-reports)
20. [Notifications](#20-notifications)

---

## 1. Users
Central identity and access control table.
* **PK:** `id` (UUID)
* **FK:** `plant_id` (UUID)

## 2. Plants
Top-level tenant entity.
* **PK:** `id` (UUID)

## 3. Equipment
Master asset registry (`PUMP-21`, `M-09`).
* **PK:** `id` (UUID)
* **FK:** `plant_id` (UUID)

## 4. Documents
Registry for PDFs, P&IDs, CAD, etc.
* **PK:** `id` (UUID)
* **FK:** `plant_id` (UUID), `uploaded_by` (UUID)

## 5. Document Chunks
Overlapping text segments (512 tokens).
* **PK:** `id` (UUID)
* **FK:** `document_id` (UUID)

## 6. Embeddings
Vector representation of chunks via `pgvector(1536)`.
* **PK:** `id` (UUID)
* **FK:** `chunk_id` (UUID)

## 7. Knowledge Graph Nodes
Industrial ontology (Equipment, Failure Mode, Cause).
* **PK:** `id` (UUID)

## 8. Knowledge Graph Relationships
Directed, typed edges (e.g. `HAS_FAILURE`, `CAUSED_BY`).
* **PK:** `id` (UUID)
* **FK:** `source_node` (UUID), `target_node` (UUID)

## 9. AI Investigations
Stores root-cause analysis logic, reasoning, and citations.
* **PK:** `id` (UUID)
* **FK:** `user_id` (UUID), `equipment_id` (UUID)

## 10. Alerts
Anomaly tracking and compliance violations.
* **PK:** `id` (UUID)
* **FK:** `equipment_id` (UUID)

## 11. Work Orders
Maintenance tasks tracked for completion.
* **PK:** `id` (UUID)
* **FK:** `equipment_id` (UUID), `assigned_to` (UUID)

## 12. Compliance
Regulatory frameworks (ISO 55001, OSHA PSM).
* **PK:** `id` (UUID)
* **FK:** `equipment` (UUID)

## 13. Audit Logs
Immutable append-only ledger for all system actions.
* **PK:** `id` (BIGSERIAL)

## 14. Maintenance History
Complete log of performed maintenance for MTBF & predictive modeling.
* **PK:** `id` (UUID)
* **FK:** `equipment_id` (UUID), `technician` (UUID)

## 15. Sensor Data
High-frequency telemetry (partitioned by month).
* **PK:** `id` (BIGSERIAL)
* **FK:** `equipment_id` (UUID)

## 16. AI Chat History
Conversational history for UI sessions.
* **PK:** `id` (UUID)

## 17. AI Feedback
RLHF training data from users (ratings 1-5).
* **PK:** `id` (UUID)

## 18. Workflow Automation
Event-based DSL rules for triggers and actions.
* **PK:** `id` (UUID)

## 19. Reports
Registry of generated PDFs or Excel files.
* **PK:** `id` (UUID)

## 20. Notifications
Queue for in-app, push, email, SMS deliveries.
* **PK:** `id` (UUID)
* **FK:** `user_id` (UUID)
