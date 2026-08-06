import { apiClient } from "./client";
import {
  PredictiveAlert,
  RcaSummary,
  CalendarEvent,
  WorkOrder,
  Technician,
  Recommendation,
} from "../types/maintenance";

const MOCK_PREDICTIVE_ALERTS: PredictiveAlert[] = [
  { id: "pa-1", assetId: "ast-101", assetName: "Compressor-07", severity: "high", predictedFailureDate: "2026-07-28", failureMode: "Bearing Fatigue & Lubrication Breakdown", confidenceScore: 94, status: "open", createdAt: "2026-07-22" },
  { id: "pa-2", assetId: "ast-103", assetName: "Boiler-12", severity: "critical", predictedFailureDate: "2026-07-26", failureMode: "Thermal Tube Degradation", confidenceScore: 98, status: "open", createdAt: "2026-07-21" },
];

const MOCK_RCA: RcaSummary[] = [
  { id: "rca-1", title: "Compressor-07 Bearing Temp Drift RCA", incidentDate: "2026-07-20", rootCause: "Loose lube line flange connection (SOP Section 4 violation)", recommendedAction: "Re-align flange and apply 45Nm torque.", confidence: 96, status: "completed" },
];

const MOCK_CALENDAR: CalendarEvent[] = [
  { id: "cal-1", title: "Preventive Lube Check — Compressor-07", date: "2026-07-25", type: "preventive", assetName: "Compressor-07", status: "scheduled" },
];

const MOCK_WORK_ORDERS: WorkOrder[] = [
  { id: "wo-1", workOrderNumber: "WO-2026-089", title: "Laser Alignment & Flange Tightening", assetId: "ast-101", assetName: "Compressor-07", priority: "high", status: "in_progress", assigneeName: "Rahul Sharma", dueDate: "2026-07-25", createdAt: "2026-07-22" },
];

const MOCK_TECHNICIANS: Technician[] = [
  { id: "tech-1", name: "Rahul Sharma", role: "Senior Mechanical Engineer", status: "assigned", currentWorkOrder: "WO-2026-089" },
  { id: "tech-2", name: "Amit Kumar", role: "Plant Technician", status: "available" },
];

const MOCK_RECOMMENDATIONS: Recommendation[] = [
  { id: "rec-1", title: "Perform SOP-104 LOTO Isolation on Boiler-12", priority: "critical", category: "Safety & Reliability", impact: "Prevents thermal rupture risk" },
];

export const maintenanceApi = {
  async getPredictiveAlerts(filters?: any): Promise<PredictiveAlert[]> {
    try {
      const res = await apiClient.get<PredictiveAlert[]>("/maintenance/predictive", { params: filters });
      return res.data;
    } catch {
      return MOCK_PREDICTIVE_ALERTS;
    }
  },

  async getRcaSummaries(filters?: any): Promise<RcaSummary[]> {
    try {
      const res = await apiClient.get<RcaSummary[]>("/maintenance/rca", { params: filters });
      return res.data;
    } catch {
      return MOCK_RCA;
    }
  },

  async getMaintenanceCalendar(filters?: any): Promise<CalendarEvent[]> {
    try {
      const res = await apiClient.get<CalendarEvent[]>("/maintenance/calendar", { params: filters });
      return res.data;
    } catch {
      return MOCK_CALENDAR;
    }
  },

  async getWorkOrders(filters?: any): Promise<WorkOrder[]> {
    try {
      const res = await apiClient.get<WorkOrder[]>("/maintenance/work-orders", { params: filters });
      return res.data;
    } catch {
      return MOCK_WORK_ORDERS;
    }
  },

  async getWorkOrder(id: string): Promise<WorkOrder> {
    try {
      const res = await apiClient.get<WorkOrder>(`/maintenance/work-orders/${id}`);
      return res.data;
    } catch {
      return MOCK_WORK_ORDERS.find((w) => w.id === id) || MOCK_WORK_ORDERS[0];
    }
  },

  async createWorkOrder(payload: Partial<WorkOrder>): Promise<WorkOrder> {
    try {
      const res = await apiClient.post<WorkOrder>("/maintenance/work-orders", payload);
      return res.data;
    } catch {
      return { ...MOCK_WORK_ORDERS[0], ...payload };
    }
  },

  async updateWorkOrder(id: string, changes: Partial<WorkOrder>): Promise<WorkOrder> {
    try {
      const res = await apiClient.patch<WorkOrder>(`/maintenance/work-orders/${id}`, changes);
      return res.data;
    } catch {
      return { ...MOCK_WORK_ORDERS[0], ...changes };
    }
  },

  async getTechnicians(filters?: any): Promise<Technician[]> {
    try {
      const res = await apiClient.get<Technician[]>("/maintenance/technicians", { params: filters });
      return res.data;
    } catch {
      return MOCK_TECHNICIANS;
    }
  },

  async getAiRecommendations(filters?: any): Promise<Recommendation[]> {
    try {
      const res = await apiClient.get<Recommendation[]>("/maintenance/recommendations", { params: filters });
      return res.data;
    } catch {
      return MOCK_RECOMMENDATIONS;
    }
  },
};

export default maintenanceApi;
