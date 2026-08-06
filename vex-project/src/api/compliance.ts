import { apiClient } from "./client";
import {
  ComplianceSummary,
  FrameworkCompliance,
  Violation,
  Inspection,
  Certificate,
  AuditReadiness,
} from "../types/compliance";

const MOCK_SUMMARY: ComplianceSummary = {
  overallScore: 98,
  isoScore: 99,
  oisdScore: 97,
  oshtmScore: 98,
  activeViolationsCount: 0,
  pendingInspectionsCount: 1,
};

const MOCK_FRAMEWORK: FrameworkCompliance = {
  frameworkName: "ISO 27001 / OISD-137 Statutory Requirements",
  score: 98,
  requirementsTotal: 142,
  requirementsPassed: 139,
  requirementsFailed: 0,
  requirementsPending: 3,
};

const MOCK_VIOLATIONS: Violation[] = [];

const MOCK_INSPECTIONS: Inspection[] = [
  { id: "insp-1", title: "Quarterly Safety LOTO Audit — Gujarat Plant #1", dueDate: "2026-08-01", assignedTo: "Compliance Sentinel AI", status: "completed" },
  { id: "insp-2", title: "Pressure Vessel Annual Statutory Inspection", dueDate: "2026-08-15", assignedTo: "Vikram Patel", status: "pending" },
];

const MOCK_CERTIFICATES: Certificate[] = [
  { id: "cert-1", name: "ISO 9001:2015 Quality Systems Certification", issueDate: "2024-01-10", expiryDate: "2027-01-09", status: "valid" },
  { id: "cert-2", name: "OISD-137 Industrial Safety Compliance Badge", issueDate: "2025-06-15", expiryDate: "2026-06-14", status: "valid" },
];

const MOCK_AUDIT_READINESS: AuditReadiness = {
  readinessScore: 97,
  auditsPassed: 14,
  criticalDefects: 0,
  missingLogs: 0,
};

export const complianceApi = {
  async getComplianceSummary(): Promise<ComplianceSummary> {
    try {
      const res = await apiClient.get<ComplianceSummary>("/compliance/summary");
      return res.data;
    } catch {
      return MOCK_SUMMARY;
    }
  },

  async getFrameworkCompliance(framework: string): Promise<FrameworkCompliance> {
    try {
      const res = await apiClient.get<FrameworkCompliance>(`/compliance/frameworks/${framework}`);
      return res.data;
    } catch {
      return MOCK_FRAMEWORK;
    }
  },

  async getViolations(filters?: any): Promise<Violation[]> {
    try {
      const res = await apiClient.get<Violation[]>("/compliance/violations", { params: filters });
      return res.data;
    } catch {
      return MOCK_VIOLATIONS;
    }
  },

  async getInspections(filters?: any): Promise<Inspection[]> {
    try {
      const res = await apiClient.get<Inspection[]>("/compliance/inspections", { params: filters });
      return res.data;
    } catch {
      return MOCK_INSPECTIONS;
    }
  },

  async getCertificates(filters?: any): Promise<Certificate[]> {
    try {
      const res = await apiClient.get<Certificate[]>("/compliance/certificates", { params: filters });
      return res.data;
    } catch {
      return MOCK_CERTIFICATES;
    }
  },

  async getAuditReadiness(): Promise<AuditReadiness> {
    try {
      const res = await apiClient.get<AuditReadiness>("/compliance/audit-readiness");
      return res.data;
    } catch {
      return MOCK_AUDIT_READINESS;
    }
  },
};

export default complianceApi;
