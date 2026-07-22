export interface ExecutiveSummary {
  plantHealth: { current: number; previous: number; change: number };
  downtimeHours: { current: number; previous: number; change: number };
  downtimeCost: { current: number; previous: number; change: number };
  costSavings: { current: number; previous: number; change: number };
  aiUsage: { current: number; previous: number; change: number };
  compliance: { current: number; previous: number; change: number };
  riskScore: { current: number; previous: number; change: number };
  roi: { current: number; previous: number; change: number };
}

export interface PlantHealthData {
  plantId: string;
  plantName: string;
  healthIndex: number;
  trend: { date: string; value: number }[];
}

export interface DowntimeData {
  plantId: string;
  plantName: string;
  hours: number;
  cost: number;
  trend: { date: string; hours: number; cost: number }[];
}

export interface CostSavingsData {
  downtimeAvoided: number;
  maintenanceOptimized: number;
  aiDriven: number;
  trend: { date: string; savings: number }[];
}

export interface AiUsageData {
  queries: number;
  activeUsers: number;
  adoptionRate: number;
  roleAdoption: { role: string; percentage: number }[];
  trend: { date: string; queries: number }[];
}

export interface ComplianceTrend {
  date: string;
  iso: number;
  oisd: number;
  violations: number;
}

export interface RiskScoreData {
  overall: number;
  safety: number;
  reliability: number;
  compliance: number;
  cyber: number;
  trend: { date: string; value: number }[];
}

export interface RoiData {
  benefits: number;
  costs: number;
  netSavings: number;
  paybackPeriod: number; // months
  trend: { date: string; value: number }[];
}
