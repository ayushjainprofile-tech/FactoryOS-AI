import { apiClient } from "./client";
import {
  ComplianceSummary,
  FrameworkCompliance,
  Violation,
  Inspection,
  Certificate,
  AuditReadiness,
} from "../types/compliance";

export const complianceApi = {
  async getComplianceSummary(): Promise<ComplianceSummary> {
    const res = await apiClient.get<ComplianceSummary>("/compliance/summary");
    return res.data;
  },

  async getFrameworkCompliance(framework: string): Promise<FrameworkCompliance> {
    const res = await apiClient.get<FrameworkCompliance>(`/compliance/frameworks/${framework}`);
    return res.data;
  },

  async getViolations(filters?: any): Promise<Violation[]> {
    const res = await apiClient.get<Violation[]>("/compliance/violations", { params: filters });
    return res.data;
  },

  async getInspections(filters?: any): Promise<Inspection[]> {
    const res = await apiClient.get<Inspection[]>("/compliance/inspections", { params: filters });
    return res.data;
  },

  async getCertificates(filters?: any): Promise<Certificate[]> {
    const res = await apiClient.get<Certificate[]>("/compliance/certificates", { params: filters });
    return res.data;
  },

  async getAuditReadiness(): Promise<AuditReadiness> {
    const res = await apiClient.get<AuditReadiness>("/compliance/audit-readiness");
    return res.data;
  },
};

export default complianceApi;
