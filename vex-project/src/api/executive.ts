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

// Mock Fallbacks for Standalone Demo Mode
const MOCK_SUMMARY: ExecutiveSummary = {
  plantHealth: { current: 96.4, previous: 92.1, change: 4.3 },
  downtimeHours: { current: 14.2, previous: 38.5, change: -63.1 },
  downtimeCost: { current: 48000, previous: 125000, change: -61.6 },
  costSavings: { current: 142500, previous: 85000, change: 67.6 },
  aiUsage: { current: 42890, previous: 28400, change: 51.0 },
  compliance: { current: 98.0, previous: 94.5, change: 3.5 },
  riskScore: { current: 12.4, previous: 28.6, change: -56.6 },
  roi: { current: 312, previous: 180, change: 73.3 },
};

const MOCK_PLANT_HEALTH: PlantHealthData[] = [
  { plantId: "p1", plantName: "Jamnagar Refinery Unit-A", healthIndex: 97.2, trend: [{ date: "Jan", value: 92 }, { date: "Feb", value: 94 }, { date: "Mar", value: 97 }] },
  { plantId: "p2", plantName: "Hazira Steel Complex", healthIndex: 94.8, trend: [{ date: "Jan", value: 89 }, { date: "Feb", value: 91 }, { date: "Mar", value: 95 }] },
  { plantId: "p3", plantName: "Mundra Power Grid Node-4", healthIndex: 96.9, trend: [{ date: "Jan", value: 91 }, { date: "Feb", value: 93 }, { date: "Mar", value: 97 }] },
];

const MOCK_DOWNTIME: DowntimeData[] = [
  { plantId: "p1", plantName: "Jamnagar Refinery", hours: 4.2, cost: 18000, trend: [{ date: "Jan", hours: 12, cost: 45000 }, { date: "Feb", hours: 8, cost: 30000 }, { date: "Mar", hours: 4, cost: 18000 }] },
  { plantId: "p2", plantName: "Hazira Steel", hours: 6.5, cost: 22000, trend: [{ date: "Jan", hours: 18, cost: 60000 }, { date: "Feb", hours: 12, cost: 40000 }, { date: "Mar", hours: 6, cost: 22000 }] },
];

const MOCK_COST_SAVINGS: CostSavingsData = {
  downtimeAvoided: 95000,
  maintenanceOptimized: 32500,
  aiDriven: 15000,
  trend: [{ date: "Jan", savings: 45000 }, { date: "Feb", savings: 85000 }, { date: "Mar", savings: 142500 }],
};

const MOCK_AI_USAGE: AiUsageData = {
  queries: 42890,
  activeUsers: 348,
  adoptionRate: 92.4,
  roleAdoption: [
    { role: "Plant Engineers", percentage: 96 },
    { role: "Operators", percentage: 88 },
    { role: "Safety Officers", percentage: 94 },
    { role: "C-Suite", percentage: 91 },
  ],
  trend: [{ date: "Jan", queries: 12000 }, { date: "Feb", queries: 24000 }, { date: "Mar", queries: 42890 }],
};

const MOCK_COMPLIANCE: ComplianceTrend[] = [
  { date: "Jan", iso: 92, oisd: 90, violations: 4 },
  { date: "Feb", iso: 95, oisd: 94, violations: 2 },
  { date: "Mar", iso: 98, oisd: 97, violations: 0 },
];

const MOCK_RISK_SCORE: RiskScoreData = {
  overall: 12.4,
  safety: 8.2,
  reliability: 14.1,
  compliance: 5.0,
  cyber: 9.8,
  trend: [{ date: "Jan", value: 28.6 }, { date: "Feb", value: 18.2 }, { date: "Mar", value: 12.4 }],
};

const MOCK_ROI: RoiData = {
  benefits: 450000,
  costs: 110000,
  netSavings: 340000,
  paybackPeriod: 3.5,
  trend: [{ date: "Jan", value: 120 }, { date: "Feb", value: 210 }, { date: "Mar", value: 312 }],
};

export const executiveApi = {
  async getExecutiveSummary(): Promise<ExecutiveSummary> {
    try {
      const res = await apiClient.get<ExecutiveSummary>("/executive/summary");
      return res.data;
    } catch {
      return MOCK_SUMMARY;
    }
  },

  async getPlantHealth(filters?: any): Promise<PlantHealthData[]> {
    try {
      const res = await apiClient.get<PlantHealthData[]>("/executive/plant-health", { params: filters });
      return res.data;
    } catch {
      return MOCK_PLANT_HEALTH;
    }
  },

  async getDowntime(filters?: any): Promise<DowntimeData[]> {
    try {
      const res = await apiClient.get<DowntimeData[]>("/executive/downtime", { params: filters });
      return res.data;
    } catch {
      return MOCK_DOWNTIME;
    }
  },

  async getCostSavings(filters?: any): Promise<CostSavingsData> {
    try {
      const res = await apiClient.get<CostSavingsData>("/executive/cost-savings", { params: filters });
      return res.data;
    } catch {
      return MOCK_COST_SAVINGS;
    }
  },

  async getAiUsage(filters?: any): Promise<AiUsageData> {
    try {
      const res = await apiClient.get<AiUsageData>("/executive/ai-usage", { params: filters });
      return res.data;
    } catch {
      return MOCK_AI_USAGE;
    }
  },

  async getCompliance(filters?: any): Promise<ComplianceTrend[]> {
    try {
      const res = await apiClient.get<ComplianceTrend[]>("/executive/compliance", { params: filters });
      return res.data;
    } catch {
      return MOCK_COMPLIANCE;
    }
  },

  async getRiskScore(filters?: any): Promise<RiskScoreData> {
    try {
      const res = await apiClient.get<RiskScoreData>("/executive/risk-score", { params: filters });
      return res.data;
    } catch {
      return MOCK_RISK_SCORE;
    }
  },

  async getRoi(filters?: any): Promise<RoiData> {
    try {
      const res = await apiClient.get<RoiData>("/executive/roi", { params: filters });
      return res.data;
    } catch {
      return MOCK_ROI;
    }
  },
};

export default executiveApi;
