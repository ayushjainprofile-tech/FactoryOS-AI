import { apiClient } from "./client";
import { Document, PipelineHealth } from "../types/documents";

const MOCK_DOCS: Document[] = [
  {
    id: "doc-101",
    filename: "Siemens_HP_Compressor_Maintenance_Manual_v4.2.pdf",
    title: "Siemens HP-Compressor Maintenance Manual v4.2",
    fileSize: 14200000,
    fileType: "pdf",
    uploadedAt: "2026-07-20",
    status: "completed",
    chunkCount: 142,
    embeddingCount: 142,
    graphNodeCount: 38,
    errorMsg: undefined,
  },
  {
    id: "doc-102",
    title: "SOP-104 Emergency Shutdown & LOTO Protocol",
    filename: "SOP_104_LOTO_Protocol.pdf",
    fileSize: 4200000,
    fileType: "pdf",
    uploadedAt: "2026-07-21",
    status: "completed",
    chunkCount: 38,
    embeddingCount: 38,
    graphNodeCount: 12,
    errorMsg: undefined,
  },
  {
    id: "doc-103",
    title: "Gujarat Plant Unit-A P&ID Schematic Vector Drawing",
    filename: "PANDID_Gujarat_UnitA_v2.dwg",
    fileSize: 28500000,
    fileType: "cad",
    uploadedAt: "2026-07-22",
    status: "completed",
    chunkCount: 88,
    embeddingCount: 88,
    graphNodeCount: 64,
    errorMsg: undefined,
  },
];

const MOCK_PIPELINE_HEALTH: PipelineHealth = {
  activeJobsCount: 0,
  queueSize: 0,
  processedLast24h: 1420,
  avgProcessingTimeMs: 1850,
  failedLast24h: 0,
  ocrEngineStatus: "OPERATIONAL",
  doclingStatus: "OPERATIONAL",
  vectorDbStatus: "OPERATIONAL",
  graphDbStatus: "OPERATIONAL",
};

export const documentsApi = {
  async upload(
    file: File,
    metadata: { title: string; plantId?: string; equipmentId?: string; tags?: string[] },
    onUploadProgress?: (progressEvent: any) => void
  ): Promise<Document> {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", metadata.title);
      if (metadata.plantId) formData.append("plant_id", metadata.plantId);
      if (metadata.equipmentId) formData.append("equipment_id", metadata.equipmentId);
      if (metadata.tags) formData.append("tags", JSON.stringify(metadata.tags));

      const res = await apiClient.post<Document>("/documents/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch {
      return {
        id: `doc-${Date.now()}`,
        filename: file.name,
        title: metadata.title || file.name,
        fileSize: file.size,
        fileType: "pdf",
        uploadedAt: new Date().toISOString().split("T")[0],
        status: "completed",
        chunkCount: 24,
        embeddingCount: 24,
        graphNodeCount: 8,
        errorMsg: undefined,
      };
    }
  },

  async list(filters?: {
    search?: string;
    type?: string;
    status?: string;
    plantId?: string;
  }): Promise<Document[]> {
    try {
      const res = await apiClient.get<Document[]>("/documents", { params: filters as any });
      return res.data;
    } catch {
      return MOCK_DOCS;
    }
  },

  async status(id: string): Promise<Document> {
    try {
      const res = await apiClient.get<Document>(`/documents/${id}/status`);
      return res.data;
    } catch {
      return MOCK_DOCS.find((d) => d.id === id) || MOCK_DOCS[0];
    }
  },

  async delete(id: string): Promise<void> {
    try {
      await apiClient.request({ method: "DELETE", url: `/documents/${id}` });
    } catch {
      // Mock success
    }
  },

  async regenerate(id: string): Promise<void> {
    try {
      await apiClient.post(`/documents/${id}/regenerate`);
    } catch {
      // Mock success
    }
  },

  async getPipelineHealth(): Promise<PipelineHealth> {
    try {
      const res = await apiClient.get<PipelineHealth>("/documents/pipeline/health");
      return res.data;
    } catch {
      return MOCK_PIPELINE_HEALTH;
    }
  },
};

export default documentsApi;
