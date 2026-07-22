export interface PredictiveAlert {
  id: string;
  assetId: string;
  assetName: string;
  failureMode: string;
  confidence: number;
  timeToFailure: number;
  status: "new" | "triaged" | "work_order_created" | "closed";
  estimatedDowntimeAvoided: number;
}

export interface RcaSummary {
  id: string;
  assetId: string;
  assetName: string;
  failurePattern: string;
  recurringIssues: number;
  suggestedCauses: string[];
  timeline: { date: string; description: string }[];
  contributingFactors: string[];
  recommendations: string[];
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  type: "work_order" | "window" | "shift";
  status?: string;
  technicianName?: string;
}

export interface MaintenanceTask {
  id: string;
  description: string;
  status: "pending" | "completed";
}

export interface MaintenancePart {
  id: string;
  name: string;
  quantity: number;
}

export interface WorkOrder {
  id: string;
  workOrderNumber: string;
  title: string;
  assetId: string;
  assetName: string;
  status: "open" | "in_progress" | "scheduled" | "completed";
  priority: "low" | "medium" | "high" | "critical";
  dueDate: string;
  assignee: string;
  description?: string;
  tasks: MaintenanceTask[];
  parts: MaintenancePart[];
  notes?: string;
}

export interface Technician {
  id: string;
  name: string;
  role: string;
  skills: string[];
  plantId: string;
  workload: number;
  availability: "available" | "busy" | "offline";
}

export interface Recommendation {
  id: string;
  type: "schedule_change" | "pm_tuning" | "high_risk_asset" | "parts";
  affectedAssets: string[];
  recommendation: string;
  rationale: string;
  expectedImpact: string;
  status: "pending" | "accepted" | "rejected";
}
