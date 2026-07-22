export interface PlantHealth {
  plantId: string;
  healthScore: number;
  status: "optimal" | "warning" | "critical";
  lastChecked: string;
}

export interface CriticalAsset {
  id: string;
  name: string;
  assetTag: string;
  status: "online" | "maintenance" | "offline";
  criticality: "high" | "critical";
}

export interface ActiveAlert {
  id: string;
  plantId: string;
  severity: "info" | "warning" | "critical";
  message: string;
  status: "active" | "resolved";
  timestamp: string;
}

export interface ComplianceScore {
  score: number;
  lastAudited: string;
  status: "compliant" | "non-compliant" | "review";
}

export interface ActiveInvestigation {
  id: string;
  title: string;
  status: "open" | "investigating" | "closed";
  priority: "low" | "medium" | "high" | "critical";
}

export interface DocumentsIndexed {
  count: number;
  lastIndexed: string;
}
