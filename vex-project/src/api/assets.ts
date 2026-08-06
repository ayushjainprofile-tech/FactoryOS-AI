import { apiClient } from "./client";
import {
  Asset,
  AssetHealth,
  MaintenanceEvent,
  AiRecommendation,
  AssetDocument,
  WorkOrder,
} from "../types/assets";

const MOCK_ASSETS: Asset[] = [
  {
    id: "ast-101",
    name: "High-Pressure Compressor-07",
    type: "Compressor",
    plantId: "plant-1",
    location: "Unit-A Bay 4, Gujarat Plant #1",
    status: "warning",
    healthScore: 78,
    lastMaintenance: "2026-06-12",
    criticality: "critical",
    tags: ["High-Pressure", "Vibration-Monitored", "Siemens-OEM"],
    owner: "Rahul Sharma",
  },
  {
    id: "ast-102",
    name: "Boiler Feed Pump-21",
    type: "Pump",
    plantId: "plant-1",
    location: "Unit-B Bay 2, Gujarat Plant #1",
    status: "operational",
    healthScore: 94,
    lastMaintenance: "2026-05-20",
    criticality: "high",
    tags: ["Centrifugal", "Lube-Checked", "Flow-Control"],
    owner: "Amit Kumar",
  },
  {
    id: "ast-103",
    name: "Main Steam Boiler-12",
    type: "Boiler",
    plantId: "plant-2",
    location: "Hazira Complex Power Bay",
    status: "critical",
    healthScore: 62,
    lastMaintenance: "2026-04-10",
    criticality: "critical",
    tags: ["High-Temperature", "ISO-Audited", "Safety-LOTO"],
    owner: "Vikram Patel",
  },
  {
    id: "ast-104",
    name: "Steam Turbine Generator-02",
    type: "Turbine",
    plantId: "plant-1",
    location: "Powerhouse Room 3",
    status: "operational",
    healthScore: 98,
    lastMaintenance: "2026-07-01",
    criticality: "high",
    tags: ["Turbine", "Power-Gen", "OISD-Compliant"],
    owner: "Suresh Menon",
  },
];

const MOCK_ASSET_HEALTH: AssetHealth = {
  overallScore: 78,
  components: [
    { name: "Bearing Housing #1", score: 68, status: "warning" },
    { name: "Motor Rotor Shaft", score: 94, status: "normal" },
    { name: "Suction Pressure Valve", score: 82, status: "normal" },
    { name: "Oil Line Flange Assembly", score: 71, status: "warning" },
  ],
  trends: [
    { date: "Jan", score: 95 },
    { date: "Feb", score: 91 },
    { date: "Mar", score: 88 },
    { date: "Apr", score: 82 },
    { date: "May", score: 80 },
    { date: "Jun", score: 78 },
  ],
};

const MOCK_MAINTENANCE: MaintenanceEvent[] = [
  { id: "m-1", date: "2026-06-12", type: "preventive", duration: 2.5, outcome: "Bearing lubrication topped up and vibration sensor aligned", workOrderRef: "WO-2026-042" },
  { id: "m-2", date: "2026-03-04", type: "corrective", duration: 5.0, outcome: "Replaced worn gasket on suction flange", workOrderRef: "WO-2026-018" },
];

const MOCK_RECOMMENDATIONS: AiRecommendation[] = [
  {
    id: "rec-1",
    title: "Inspect Bearing Housing #1 Alignment",
    recommendation: "Elevated thermal drift indicates potential 0.3mm shaft misalignment. Perform laser alignment check.",
    riskFactor: "Bearing Seizure Risk",
    priority: "high",
    confidence: 96,
  },
];

const MOCK_DOCS: AssetDocument[] = [
  { id: "doc-1", title: "Siemens HP-Compressor Maintenance Manual v4.2", type: "manual", version: "v4.2", uploadedAt: "2025-11-10", link: "#" },
  { id: "doc-2", title: "SOP-104: Emergency Shutdown & LOTO Isolation Procedure", type: "sop", version: "v2.0", uploadedAt: "2026-01-15", link: "#" },
];

const MOCK_WORK_ORDERS: WorkOrder[] = [
  { id: "wo-1", workOrderNumber: "WO-2026-089", type: "Laser Alignment Check", status: "in_progress", priority: "high", dueDate: "2026-07-25", assignee: "Rahul Sharma" },
];

export const assetsApi = {
  async getAssetList(filters?: {
    plantId?: string;
    type?: string;
    status?: string;
    criticality?: string;
    search?: string;
  }): Promise<Asset[]> {
    try {
      const res = await apiClient.get<Asset[]>("/assets", { params: filters });
      return res.data;
    } catch {
      return MOCK_ASSETS;
    }
  },

  async getAsset(assetId: string): Promise<Asset> {
    try {
      const res = await apiClient.get<Asset>(`/assets/${assetId}`);
      return res.data;
    } catch {
      return MOCK_ASSETS.find((a) => a.id === assetId) || MOCK_ASSETS[0];
    }
  },

  async getAssetHealth(assetId: string): Promise<AssetHealth> {
    try {
      const res = await apiClient.get<AssetHealth>(`/assets/${assetId}/health`);
      return res.data;
    } catch {
      return MOCK_ASSET_HEALTH;
    }
  },

  async getMaintenanceTimeline(assetId: string): Promise<MaintenanceEvent[]> {
    try {
      const res = await apiClient.get<MaintenanceEvent[]>(`/assets/${assetId}/maintenance`);
      return res.data;
    } catch {
      return MOCK_MAINTENANCE;
    }
  },

  async getAiRecommendations(assetId: string): Promise<AiRecommendation[]> {
    try {
      const res = await apiClient.get<AiRecommendation[]>(`/assets/${assetId}/ai`);
      return res.data;
    } catch {
      return MOCK_RECOMMENDATIONS;
    }
  },

  async getAssetDocuments(assetId: string): Promise<AssetDocument[]> {
    try {
      const res = await apiClient.get<AssetDocument[]>(`/assets/${assetId}/documents`);
      return res.data;
    } catch {
      return MOCK_DOCS;
    }
  },

  async getAssetWorkOrders(assetId: string): Promise<WorkOrder[]> {
    try {
      const res = await apiClient.get<WorkOrder[]>(`/assets/${assetId}/work-orders`);
      return res.data;
    } catch {
      return MOCK_WORK_ORDERS;
    }
  },
};

export default assetsApi;
