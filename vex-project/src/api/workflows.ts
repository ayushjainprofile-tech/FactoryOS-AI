import { apiClient } from "./client";
import { WorkflowTemplate, WorkflowRun } from "../types/workflows";

export const workflowsApi = {
  async getWorkflows(filters?: any): Promise<WorkflowTemplate[]> {
    const res = await apiClient.get<WorkflowTemplate[]>("/workflows", { params: filters });
    return res.data;
  },

  async createWorkflow(template: Partial<WorkflowTemplate>): Promise<WorkflowTemplate> {
    const res = await apiClient.post<WorkflowTemplate>("/workflows", template);
    return res.data;
  },

  async getWorkflow(id: string): Promise<WorkflowTemplate> {
    const res = await apiClient.get<WorkflowTemplate>(`/workflows/${id}`);
    return res.data;
  },

  async updateWorkflow(id: string, changes: Partial<WorkflowTemplate>): Promise<WorkflowTemplate> {
    const res = await apiClient.patch<WorkflowTemplate>(`/workflows/${id}`, changes);
    return res.data;
  },

  async startWorkflowRun(templateId: string, context?: any): Promise<WorkflowRun> {
    const res = await apiClient.post<WorkflowRun>(`/workflows/${templateId}/run`, context);
    return res.data;
  },

  async getWorkflowRuns(filters?: any): Promise<WorkflowRun[]> {
    const res = await apiClient.get<WorkflowRun[]>("/workflows/runs", { params: filters });
    return res.data;
  },

  async getWorkflowRun(runId: string): Promise<WorkflowRun> {
    const res = await apiClient.get<WorkflowRun>(`/workflows/runs/${runId}`);
    return res.data;
  },

  async completeWorkflowNode(runId: string, nodeId: string, payload?: any): Promise<WorkflowRun> {
    const res = await apiClient.post<WorkflowRun>(`/workflows/runs/${runId}/node/${nodeId}/complete`, payload);
    return res.data;
  },
};

export default workflowsApi;
