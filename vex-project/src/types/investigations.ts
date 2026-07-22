export type InvestigationStatus = "new" | "in_progress" | "in_review" | "finalized";
export type EvidenceType = "document" | "statement" | "image" | "video" | "sensor_snapshot";

export interface Investigation {
  id: string;
  title: string;
  alarmRef: string;
  plantId: string;
  severity: "low" | "medium" | "high" | "critical";
  status: InvestigationStatus;
  assignee: string;
  createdAt: string;
}

export interface InvestigationTimelineEvent {
  id: string;
  timestamp: string;
  description: string;
  source: "alarm" | "log" | "statement" | "sensor";
  confidence: number; // percentage
  verified: boolean;
}

export interface EvidenceItem {
  id: string;
  type: EvidenceType;
  title: string;
  date: string;
  source: string;
  link?: string;
}

export interface RootCauseData {
  primary: string;
  contributingFactors: string[];
  method: "ICAM" | "5-Whys";
  isApproved: boolean;
}

export interface CorrectiveAction {
  id: string;
  description: string;
  priority: "low" | "medium" | "high";
  owner: string;
  dueDate: string;
  status: "pending" | "completed";
}

export interface InvestigationDetail extends Investigation {
  timeline: InvestigationTimelineEvent[];
  evidence: EvidenceItem[];
  rootCause: RootCauseData;
  recommendations: CorrectiveAction[];
  reportLink?: string;
}
