import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import { ComplianceCenterPage } from "../components/compliance/ComplianceCenterPage";
import { FrameworkCompliancePage } from "../components/compliance/FrameworkCompliancePage";
import { AuditReadinessPage } from "../components/compliance/AuditReadinessPage";
import { ViolationsPage } from "../components/compliance/ViolationsPage";
import { InspectionsPage } from "../components/compliance/InspectionsPage";
import { CertificatesPage } from "../components/compliance/CertificatesPage";

const CompliancePage: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState("overview");

  const subTabs = [
    { key: "overview", label: "Overview" },
    { key: "frameworks", label: "Framework Controls" },
    { key: "readiness", label: "Audit Readiness" },
    { key: "violations", label: "Violations" },
    { key: "inspections", label: "Inspections" },
    { key: "certificates", label: "Certificates" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8 font-sans space-y-8">
      {/* Sub tabs list slider */}
      <div className="flex border-b border-[#E5E7EB] shrink-0 select-none no-scrollbar gap-2 mb-6">
        {subTabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveSubTab(t.key)}
            className={`px-4 py-3 text-[11px] font-semibold tracking-tight border-b-2 whitespace-nowrap transition-all ${
              activeSubTab === t.key
                ? "border-[#4F46E5] text-[#4F46E5]"
                : "border-transparent text-slate-400 hover:text-slate-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div>
        {activeSubTab === "overview" && <ComplianceCenterPage onTabChange={setActiveSubTab} />}
        {activeSubTab === "frameworks" && <FrameworkCompliancePage />}
        {activeSubTab === "readiness" && <AuditReadinessPage />}
        {activeSubTab === "violations" && <ViolationsPage />}
        {activeSubTab === "inspections" && <InspectionsPage />}
        {activeSubTab === "certificates" && <CertificatesPage />}
      </div>
    </div>
  );
};

export const Route = createFileRoute("/compliance")({
  component: () => (
    <ProtectedRoute allowedRoles={["admin", "engineer"]}>
      <CompliancePage />
    </ProtectedRoute>
  ),
});
