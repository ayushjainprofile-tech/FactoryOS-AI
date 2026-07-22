import { apiClient } from "./client";
import {
  PlantHealth,
  CriticalAsset,
  ActiveAlert,
  ComplianceScore,
  ActiveInvestigation,
  DocumentsIndexed,
} from "../types/dashboard";

export const dashboardApi = {
  async getPlantHealth(plantId: string): Promise<PlantHealth> {
    const res = await apiClient.get<PlantHealth>(`/plants/${plantId}/health`);
    return res.data;
  },

  async getCriticalAssets(): Promise<CriticalAsset[]> {
    const res = await apiClient.get<CriticalAsset[]>("/assets/critical");
    return res.data;
  },

  async getActiveAlerts(): Promise<ActiveAlert[]> {
    const res = await apiClient.get<ActiveAlert[]>("/alerts/active");
    return res.data;
  },

  async getComplianceScore(): Promise<ComplianceScore> {
    const res = await apiClient.get<ComplianceScore>("/compliance/score");
    return res.data;
  },

  async getActiveInvestigations(): Promise<ActiveInvestigation[]> {
    const res = await apiClient.get<ActiveInvestigation[]>("/investigations/active");
    return res.data;
  },

  async getIndexedDocuments(): Promise<DocumentsIndexed> {
    const res = await apiClient.get<DocumentsIndexed>("/documents/indexed");
    return res.data;
  },
};
export default dashboardApi;
