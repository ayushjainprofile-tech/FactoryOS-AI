import { apiClient } from "./client";
import { Document, PipelineStatus, PipelineHealth } from "../types/document";

export const documentApi = {
  async uploadFile(
    file: File,
    metadata: { title: string; plantId?: string; equipmentId?: string; tags?: string[] },
    onUploadProgress?: (progressEvent: any) => void
  ): Promise<Document> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", metadata.title);
    if (metadata.plantId) formData.append("plant_id", metadata.plantId);
    if (metadata.equipmentId) formData.append("equipment_id", metadata.equipmentId);
    if (metadata.tags) formData.append("tags", JSON.stringify(metadata.tags));

    // Custom axios handles multipart uploads
    const res = await apiClient.post<Document>("/documents/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  },

  async getDocumentList(filters?: {
    search?: string;
    type?: string;
    status?: string;
    plantId?: string;
  }): Promise<Document[]> {
    const res = await apiClient.get<Document[]>("/documents", {
      params: filters as any,
    });
    return res.data;
  },

  async getDocumentStatus(id: string): Promise<{ status: PipelineStatus; errorMessage?: string }> {
    const res = await apiClient.get<{ status: PipelineStatus; errorMessage?: string }>(`/documents/${id}/status`);
    return res.data;
  },

  async deleteDocument(id: string): Promise<void> {
    await apiClient.request({
      method: "DELETE",
      url: `/documents/${id}`,
    });
  },

  async regeneratePipeline(id: string): Promise<void> {
    await apiClient.post(`/documents/${id}/regenerate`);
  },

  async getPipelineHealth(): Promise<PipelineHealth> {
    const res = await apiClient.get<PipelineHealth>("/documents/pipeline/health");
    return res.data;
  },
};

export default documentApi;
