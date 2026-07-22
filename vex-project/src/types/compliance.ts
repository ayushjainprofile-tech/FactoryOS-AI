export interface ComplianceSummary {
  overallCompliance: number; // percentage
  isoCompliance: number; // percentage
  oisdCompliance: number; // percentage
  auditReadinessScore: number; // percentage
}

export interface ControlItem {
  id: string;
  name: string;
  status: "compliant" | "non_compliant" | "in_progress";
  evidenceCount: number;
  lastReview: string;
}

export interface FrameworkCompliance {
  framework: string;
  totalControls: number;
  compliantControls: number;
  complianceRate: number;
  gaps: string[];
  controls: ControlItem[];
}

export interface Violation {
  id: string;
  description: string;
  severity: "low" | "medium" | "high" | "critical";
  status: "open" | "resolved";
  framework: string;
  assetName: string;
  plantId: string;
  date: string;
}

export interface Inspection {
  id: string;
  type: string;
  dueDate: string;
  status: "overdue" | "due_soon" | "scheduled" | "completed";
  assetName: string;
  plantId: string;
  assignee: string;
}

export interface Certificate {
  id: string;
  type: string;
  owner: string;
  expiry: string;
  status: "active" | "expiring_soon" | "expired";
  documentLink: string;
}

export interface AuditReadiness {
  score: number;
  missingEvidence: { id: string; requirement: string; owner: string; dueDate: string }[];
  upcomingAudits: { date: string; type: string; scope: string; owner: string; status: string }[];
}
