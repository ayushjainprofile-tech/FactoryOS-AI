import { apiClient } from "./client";
import { Investigation, InvestigationDetail } from "../types/investigations";

const MOCK_INVESTIGATIONS: Investigation[] = [
  {
    id: "inv-101",
    title: "Thermal Exception & Flange Pressure Drop on Compressor-07",
    assetName: "High-Pressure Compressor-07",
    status: "in_progress",
    severity: "critical",
    confidence: 96,
    createdBy: "Root Cause Investigator AI",
    createdAt: "2026-07-22",
  },
  {
    id: "inv-102",
    title: "Steam Boiler-12 Water Tube Degradation Anomaly",
    assetName: "Main Steam Boiler-12",
    status: "open",
    severity: "high",
    confidence: 94,
    createdBy: "Predictive AI Agent",
    createdAt: "2026-07-21",
  },
];

const MOCK_DETAIL: InvestigationDetail = {
  id: "inv-101",
  title: "Thermal Exception & Flange Pressure Drop on Compressor-07",
  assetName: "High-Pressure Compressor-07",
  status: "in_progress",
  severity: "critical",
  confidence: 96,
  createdBy: "Root Cause Investigator AI",
  createdAt: "2026-07-22",
  summary: "Sensor telemetry flags a 2.4°C thermal drift and 0.3 bar pressure drop matching historical failure mode #FM-402.",
  timeline: [
    { time: "08:15 AM", event: "Vibration Sensor A records micro-drift (3.1 mm/s)" },
    { time: "08:30 AM", event: "Bearing Temp Sensor 1 triggers thermal warning (84.2°C)" },
    { time: "08:35 AM", event: "AI Agent cross-references Siemens Maintenance Manual v4.2 Section 4" },
  ],
  findings: [
    "Flange bolts housing secondary lube oil line require torque verification",
    "No structural crack detected by AI Vision inspector",
  ],
  recommendations: [
    "Issue Work Order WO-2026-089 for laser alignment check",
    "Verify torque specification (45Nm as prescribed in SOP-104)",
  ],
  evidenceDocuments: [
    { id: "doc-1", title: "Siemens HP-Compressor Maintenance Manual v4.2" },
  ],
};

export const investigationsApi = {
  async getInvestigations(filters?: any): Promise<Investigation[]> {
    try {
      const res = await apiClient.get<Investigation[]>("/investigations", { params: filters });
      return res.data;
    } catch {
      return MOCK_INVESTIGATIONS;
    }
  },

  async createInvestigation(payload: Partial<Investigation>): Promise<Investigation> {
    try {
      const res = await apiClient.post<Investigation>("/investigations", payload);
      return res.data;
    } catch {
      return { ...MOCK_INVESTIGATIONS[0], ...payload };
    }
  },

  async getInvestigation(id: string): Promise<InvestigationDetail> {
    try {
      const res = await apiClient.get<InvestigationDetail>(`/investigations/${id}`);
      return res.data;
    } catch {
      return MOCK_DETAIL;
    }
  },

  async updateInvestigation(id: string, changes: Partial<InvestigationDetail>): Promise<InvestigationDetail> {
    try {
      const res = await apiClient.patch<InvestigationDetail>(`/investigations/${id}`, changes);
      return res.data;
    } catch {
      return { ...MOCK_DETAIL, ...changes };
    }
  },

  async runAiTimeline(id: string, options?: any): Promise<InvestigationDetail> {
    try {
      const res = await apiClient.post<InvestigationDetail>(`/investigations/${id}/ai/timeline`, options);
      return res.data;
    } catch {
      return MOCK_DETAIL;
    }
  },

  async runAiRca(id: string, options?: any): Promise<InvestigationDetail> {
    try {
      const res = await apiClient.post<InvestigationDetail>(`/investigations/${id}/ai/rca`, options);
      return res.data;
    } catch {
      return MOCK_DETAIL;
    }
  },

  async runAiRecommendations(id: string, options?: any): Promise<InvestigationDetail> {
    try {
      const res = await apiClient.post<InvestigationDetail>(`/investigations/${id}/ai/recommendations`, options);
      return res.data;
    } catch {
      return MOCK_DETAIL;
    }
  },

  async generateReport(id: string, options?: any): Promise<{ reportLink: string }> {
    try {
      const res = await apiClient.post<{ reportLink: string }>(`/investigations/${id}/report/generate`, options);
      return res.data;
    } catch {
      return { reportLink: "#" };
    }
  },
};

export default investigationsApi;
