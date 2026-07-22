import { apiClient } from "./client";
import {
  PredictiveAlert,
  RcaSummary,
  CalendarEvent,
  WorkOrder,
  Technician,
  Recommendation,
} from "../types/maintenance";

export const maintenanceApi = {
  async getPredictiveAlerts(filters?: any): Promise<PredictiveAlert[]> {
    const res = await apiClient.get<PredictiveAlert[]>("/maintenance/predictive", { params: filters });
    return res.data;
  },

  async getRcaSummaries(filters?: any): Promise<RcaSummary[]> {
    const res = await apiClient.get<RcaSummary[]>("/maintenance/rca", { params: filters });
    return res.data;
  },

  async getMaintenanceCalendar(filters?: any): Promise<CalendarEvent[]> {
    const res = await apiClient.get<CalendarEvent[]>("/maintenance/calendar", { params: filters });
    return res.data;
  },

  async getWorkOrders(filters?: any): Promise<WorkOrder[]> {
    const res = await apiClient.get<WorkOrder[]>("/maintenance/work-orders", { params: filters });
    return res.data;
  },

  async getWorkOrder(id: string): Promise<WorkOrder> {
    const res = await apiClient.get<WorkOrder>(`/maintenance/work-orders/${id}`);
    return res.data;
  },

  async createWorkOrder(payload: Partial<WorkOrder>): Promise<WorkOrder> {
    const res = await apiClient.post<WorkOrder>("/maintenance/work-orders", payload);
    return res.data;
  },

  async updateWorkOrder(id: string, changes: Partial<WorkOrder>): Promise<WorkOrder> {
    const res = await apiClient.patch<WorkOrder>(`/maintenance/work-orders/${id}`, changes);
    return res.data;
  },

  async getTechnicians(filters?: any): Promise<Technician[]> {
    const res = await apiClient.get<Technician[]>("/maintenance/technicians", { params: filters });
    return res.data;
  },

  async getAiRecommendations(filters?: any): Promise<Recommendation[]> {
    const res = await apiClient.get<Recommendation[]>("/maintenance/recommendations", { params: filters });
    return res.data;
  },
};

export default maintenanceApi;
