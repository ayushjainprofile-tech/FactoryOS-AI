import { apiClient } from "./client";
import {
  ExecutiveSummary,
  PlantHealthData,
  DowntimeData,
  CostSavingsData,
  AiUsageData,
  ComplianceTrend,
  RiskScoreData,
  RoiData,
} from "../types/executive";

export const executiveApi = {
  async getExecutiveSummary(): Promise<ExecutiveSummary> {
    const res = await apiClient.get<ExecutiveSummary>("/executive/summary");
    return res.data;
  },

  async getPlantHealth(filters?: any): Promise<PlantHealthData[]> {
    const res = await apiClient.get<PlantHealthData[]>("/executive/plant-health", { params: filters });
    return res.data;
  },

  async getDowntime(filters?: any): Promise<DowntimeData[]> {
    const res = await apiClient.get<DowntimeData[]>("/executive/downtime", { params: filters });
    return res.data;
  },

  async getCostSavings(filters?: any): Promise<CostSavingsData> {
    const res = await apiClient.get<CostSavingsData>("/executive/cost-savings", { params: filters });
    return res.data;
  },

  async getAiUsage(filters?: any): Promise<AiUsageData> {
    const res = await apiClient.get<AiUsageData>("/executive/ai-usage", { params: filters });
    return res.data;
  },

  async getCompliance(filters?: any): Promise<ComplianceTrend[]> {
    const res = await apiClient.get<ComplianceTrend[]>("/executive/compliance", { params: filters });
    return res.data;
  },

  async getRiskScore(filters?: any): Promise<RiskScoreData> {
    const res = await apiClient.get<RiskScoreData>("/executive/risk-score", { params: filters });
    return res.data;
  },

  async getRoi(filters?: any): Promise<RoiData> {
    const res = await apiClient.get<RoiData>("/executive/roi", { params: filters });
    return res.data;
  },
};

export default executiveApi;
