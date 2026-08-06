import { apiClient } from "./client";
import { WorkflowTemplate, WorkflowRun } from "../types/workflows";

const MOCK_WORKFLOWS: WorkflowTemplate[] = [
  {
    id: "wf-1",
    name: "Automated LOTO Isolation & Work Order Generation",
    description: "Triggers Maximo Work Order & LOTO isolation checklist upon thermal exception detection.",
    triggerEvent: "ANOMALY_DETECTED",
    status: "active",
    createdAt: "2026-06-01",
    nodes: [
      { id: "n1", name: "Docling Ingestion", type: "ingestion", status: "completed" },
      { id: "n2", name: "LangGraph Multi-Agent Evaluation", type: "agent", status: "completed" },
      { id: "n3", name: "SAP / Maximo Ticket Dispatch", type: "action", status: "completed" },
    ],
  },
  {
    id: "wf-2",
    name: "Quarterly ISO/OSHA Compliance Audit Generator",
    description: "Scans indexed SOPs and maintenance logs to compile publication-ready statutory reports.",
    triggerEvent: "SCHEDULED_CRON",
    status: "active",
    createdAt: "2026-06-15",
    nodes: [
      { id: "n1", name: "Compliance Guardian Scan", type: "agent", status: "completed" },
      { id: "n2", name: "AI Report Studio PDF Render", type: "report", status: "completed" },
    ],
  },
];

const MOCK_RUN: WorkflowRun = {
  id: "run-901",
  templateId: "wf-1",
  templateName: "Automated LOTO Isolation & Work Order Generation",
  status: "completed",
  startedAt: "2026-07-22 08:30:00",
  completedAt: "2026-07-22 08:30:04",
  steps: [
    { id: "s1", nodeName: "Docling Ingestion", status: "completed", message: "Parsed 42-page manual Section 4" },
    { id: "s2", nodeName: "Root Cause Investigator Agent", status: "completed", message: "Confidence 96% reached" },
    { id: "s3", nodeName: "SAP Work Order Dispatch", status: "completed", message: "Issued WO-2026-089" },
  ],
};

export const workflowsApi = {
  async getWorkflows(filters?: any): Promise<WorkflowTemplate[]> {
    try {
      const res = await apiClient.get<WorkflowTemplate[]>("/workflows", { params: filters });
      return res.data;
    } catch {
      return MOCK_WORKFLOWS;
    }
  },

  async createWorkflow(template: Partial<WorkflowTemplate>): Promise<WorkflowTemplate> {
    try {
      const res = await apiClient.post<WorkflowTemplate>("/workflows", template);
      return res.data;
    } catch {
      return { ...MOCK_WORKFLOWS[0], ...template };
    }
  },

  async getWorkflow(id: string): Promise<WorkflowTemplate> {
    try {
      const res = await apiClient.get<WorkflowTemplate>(`/workflows/${id}`);
      return res.data;
    } catch {
      return MOCK_WORKFLOWS.find((w) => w.id === id) || MOCK_WORKFLOWS[0];
    }
  },

  async updateWorkflow(id: string, changes: Partial<WorkflowTemplate>): Promise<WorkflowTemplate> {
    try {
      const res = await apiClient.patch<WorkflowTemplate>(`/workflows/${id}`, changes);
      return res.data;
    } catch {
      return { ...MOCK_WORKFLOWS[0], ...changes };
    }
  },

  async startWorkflowRun(templateId: string, context?: any): Promise<WorkflowRun> {
    try {
      const res = await apiClient.post<WorkflowRun>(`/workflows/${templateId}/run`, context);
      return res.data;
    } catch {
      return MOCK_RUN;
    }
  },

  async getWorkflowRuns(filters?: any): Promise<WorkflowRun[]> {
    try {
      const res = await apiClient.get<WorkflowRun[]>("/workflows/runs", { params: filters });
      return res.data;
    } catch {
      return [MOCK_RUN];
    }
  },

  async getWorkflowRun(runId: string): Promise<WorkflowRun> {
    try {
      const res = await apiClient.get<WorkflowRun>(`/workflows/runs/${runId}`);
      return res.data;
    } catch {
      return MOCK_RUN;
    }
  },

  async completeWorkflowNode(runId: string, nodeId: string, payload?: any): Promise<WorkflowRun> {
    try {
      const res = await apiClient.post<WorkflowRun>(`/workflows/runs/${runId}/node/${nodeId}/complete`, payload);
      return res.data;
    } catch {
      return MOCK_RUN;
    }
  },
};

export default workflowsApi;
