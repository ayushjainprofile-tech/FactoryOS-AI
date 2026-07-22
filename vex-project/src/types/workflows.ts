export type NodeType =
  | "trigger"
  | "ai_investigation"
  | "work_order"
  | "engineer_assignment"
  | "maintenance_execution"
  | "verification"
  | "report_generation"
  | "condition";

export type NodeStatus = "pending" | "running" | "completed" | "failed" | "skipped";

export interface WorkflowNode {
  id: string;
  type: NodeType;
  name: string;
  description: string;
  status?: NodeStatus;
  assignedRole?: string;
  sla?: number; // hours
  inputs?: Record<string, any>;
  outputs?: Record<string, any>;
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  condition?: string;
}

export interface WorkflowTemplate {
  id: string;
  name: string;
  description: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
}

export interface WorkflowRun {
  id: string;
  templateId: string;
  templateName: string;
  plantId: string;
  assetId: string;
  assetName: string;
  status: "running" | "completed" | "failed";
  currentNodeId: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  startedAt: string;
  completedAt?: string;
}
