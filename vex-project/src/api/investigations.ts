import { apiClient } from "./client";
import { Investigation, InvestigationDetail } from "../types/investigations";

export const investigationsApi = {
  async getInvestigations(filters?: any): Promise<Investigation[]> {
    const res = await apiClient.get<Investigation[]>("/investigations", { params: filters });
    return res.data;
  },

  async createInvestigation(payload: Partial<Investigation>): Promise<Investigation> {
    const res = await apiClient.post<Investigation>("/investigations", payload);
    return res.data;
  },

  async getInvestigation(id: string): Promise<InvestigationDetail> {
    const res = await apiClient.get<InvestigationDetail>(`/investigations/${id}`);
    return res.data;
  },

  async updateInvestigation(id: string, changes: Partial<InvestigationDetail>): Promise<InvestigationDetail> {
    const res = await apiClient.patch<InvestigationDetail>(`/investigations/${id}`, changes);
    return res.data;
  },

  async runAiTimeline(id: string, options?: any): Promise<InvestigationDetail> {
    const res = await apiClient.post<InvestigationDetail>(`/investigations/${id}/ai/timeline`, options);
    return res.data;
  },

  async runAiRca(id: string, options?: any): Promise<InvestigationDetail> {
    const res = await apiClient.post<InvestigationDetail>(`/investigations/${id}/ai/rca`, options);
    return res.data;
  },

  async runAiRecommendations(id: string, options?: any): Promise<InvestigationDetail> {
    const res = await apiClient.post<InvestigationDetail>(`/investigations/${id}/ai/recommendations`, options);
    return res.data;
  },

  async generateReport(id: string, options?: any): Promise<{ reportLink: string }> {
    const res = await apiClient.post<{ reportLink: string }>(`/investigations/${id}/report/generate`, options);
    return res.data;
  },
};

export default investigationsApi;
