export type AssetStatus = "operational" | "warning" | "critical" | "offline";
export type AssetCriticality = "low" | "medium" | "high" | "critical";

export interface Asset {
  id: string;
  name: string;
  type: string; // pump, compressor, boiler, turbine, etc
  plantId: string;
  location: string;
  status: AssetStatus;
  healthScore: number;
  lastMaintenance: string;
  criticality: AssetCriticality;
  tags: string[];
  owner: string;
}

export interface ComponentHealth {
  name: string;
  score: number;
  status: "normal" | "warning" | "critical";
}

export interface AssetHealth {
  overallScore: number;
  components: ComponentHealth[];
  trends: { date: string; score: number }[];
}

export interface MaintenanceEvent {
  id: string;
  date: string;
  type: "preventive" | "corrective" | "upgrade";
  duration: number; // hours
  outcome: string;
  workOrderRef: string;
}

export interface AiRecommendation {
  id: string;
  title: string;
  recommendation: string;
  riskFactor: string;
  priority: "low" | "medium" | "high";
  confidence: number; // percentage
}

export interface AssetDocument {
  id: string;
  title: string;
  type: "manual" | "sop" | "drawing" | "report";
  version: string;
  uploadedAt: string;
  link: string;
}

export interface WorkOrder {
  id: string;
  workOrderNumber: string;
  type: string;
  status: "open" | "in_progress" | "scheduled" | "completed";
  priority: "low" | "medium" | "high" | "critical";
  dueDate: string;
  assignee: string;
}
