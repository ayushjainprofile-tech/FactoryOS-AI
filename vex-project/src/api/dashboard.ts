import { apiClient } from "./client";
import {
  PlantHealth,
  CriticalAsset,
  ActiveAlert,
  ComplianceScore,
  ActiveInvestigation,
  DocumentsIndexed,
} from "../types/dashboard";

const MOCK_PLANT_HEALTH: PlantHealth = {
  healthIndex: 96.4,
  status: "OPTIMAL",
  healthyCount: 12,
  warningCount: 1,
  criticalCount: 0,
};

const MOCK_CRITICAL_ASSETS: CriticalAsset[] = [
  { id: "ast-1", name: "High-Pressure Compressor-07", category: "Compressors", healthScore: 78, status: "WARNING", location: "Unit-A Bay 4" },
  { id: "ast-2", name: "Boiler Feed Pump-21", category: "Pumps", healthScore: 94, status: "HEALTHY", location: "Unit-B Bay 2" },
  { id: "ast-3", name: "Steam Turbine Generator-02", category: "Generators", healthScore: 98, status: "HEALTHY", location: "Main Powerhouse" },
];

const MOCK_ACTIVE_ALERTS: ActiveAlert[] = [
  { id: "alt-1", assetName: "Compressor-07", severity: "MEDIUM", message: "Bearing temp drift +2.4°C over 48h baseline", timestamp: "10 mins ago" },
  { id: "alt-2", assetName: "Pump-21", severity: "LOW", message: "Scheduled lube service due in 4 days", timestamp: "1 hour ago" },
];

const MOCK_COMPLIANCE_SCORE: ComplianceScore = {
  score: 98,
  passedAudits: 24,
  pendingAudits: 1,
  violations: 0,
};

const MOCK_INVESTIGATIONS: ActiveInvestigation[] = [
  { id: "inv-101", title: "Thermal exception anomaly on Compressor-07", status: "IN_PROGRESS", confidence: 96, createdBy: "AI Agent" },
];

const MOCK_DOCUMENTS: DocumentsIndexed = {
  totalCount: 248920,
  pdfCount: 184000,
  cadCount: 32000,
  sopCount: 32920,
};

export const dashboardApi = {
  async getPlantHealth(plantId: string): Promise<PlantHealth> {
    try {
      const res = await apiClient.get<PlantHealth>(`/plants/${plantId}/health`);
      return res.data;
    } catch {
      return MOCK_PLANT_HEALTH;
    }
  },

  async getCriticalAssets(): Promise<CriticalAsset[]> {
    try {
      const res = await apiClient.get<CriticalAsset[]>("/assets/critical");
      return res.data;
    } catch {
      return MOCK_CRITICAL_ASSETS;
    }
  },

  async getActiveAlerts(): Promise<ActiveAlert[]> {
    try {
      const res = await apiClient.get<ActiveAlert[]>("/alerts/active");
      return res.data;
    } catch {
      return MOCK_ACTIVE_ALERTS;
    }
  },

  async getComplianceScore(): Promise<ComplianceScore> {
    try {
      const res = await apiClient.get<ComplianceScore>("/compliance/score");
      return res.data;
    } catch {
      return MOCK_COMPLIANCE_SCORE;
    }
  },

  async getActiveInvestigations(): Promise<ActiveInvestigation[]> {
    try {
      const res = await apiClient.get<ActiveInvestigation[]>("/investigations/active");
      return res.data;
    } catch {
      return MOCK_INVESTIGATIONS;
    }
  },

  async getIndexedDocuments(): Promise<DocumentsIndexed> {
    try {
      const res = await apiClient.get<DocumentsIndexed>("/documents/indexed");
      return res.data;
    } catch {
      return MOCK_DOCUMENTS;
    }
  },
};
export default dashboardApi;
