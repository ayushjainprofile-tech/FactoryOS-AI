import React from "react";
import { useCompliance } from "../../hooks/useCompliance";
import { Shield, CheckCircle2, AlertTriangle, FileText, ChevronRight } from "lucide-react";

interface ComplianceCenterPageProps {
  onTabChange: (tab: string) => void;
}

export const ComplianceCenterPage: React.FC<ComplianceCenterPageProps> = ({ onTabChange }) => {
  const { summary, isLoading, isError } = useCompliance();

  if (isLoading) {
    return <div className="h-64 flex items-center justify-center font-sans">Loading compliance summary...</div>;
  }

  if (isError || !summary) {
    return <div className="text-xs text-red-500 text-center py-6 font-sans">Failed to load compliance postures.</div>;
  }

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h2 className="text-lg font-bold text-slate-800">Compliance & Regulatory Posture</h2>
        <p className="text-xs text-slate-400 mt-1">Audit readiness indicators, frameworks coverage and certification statuses</p>
      </div>

      {/* KPI summaries cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Overall Compliance</span>
          <span className="text-base font-extrabold text-green-600 block mt-1">{summary.overallCompliance}%</span>
        </div>
        <div className="p-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs">
          <span className="text-[10px] font-bold text-slate-400 uppercase">ISO Framework Status</span>
          <span className="text-base font-extrabold text-indigo-600 block mt-1">{summary.isoCompliance}%</span>
        </div>
        <div className="p-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs">
          <span className="text-[10px] font-bold text-slate-400 uppercase">OISD Framework Status</span>
          <span className="text-base font-extrabold text-[#7C3AED] block mt-1">{summary.oisdCompliance}%</span>
        </div>
        <div className="p-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Audit Readiness</span>
          <span className="text-base font-extrabold text-[#F97316] block mt-1">{summary.auditReadinessScore}%</span>
        </div>
      </div>

      {/* Navigation boxes widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => onTabChange("frameworks")}
          className="p-5 bg-white border border-[#E5E7EB] hover:border-indigo-200 rounded-2xl shadow-xs cursor-pointer hover:shadow-md transition-all flex flex-col justify-between h-40"
        >
          <div>
            <div className="h-8.5 w-8.5 rounded-lg bg-indigo-50 flex items-center justify-center text-[#4F46E5] mb-3">
              <Shield className="h-4.5 w-4.5" />
            </div>
            <h4 className="text-xs font-bold text-slate-800">ISO & OISD Frameworks</h4>
            <p className="text-[10px] text-slate-400 mt-1">Check control coverages and regulatory gaps</p>
          </div>
          <span className="text-[10px] font-bold text-[#4F46E5] flex items-center gap-0.5">
            Inspect Controls <ChevronRight className="h-3.5 w-3.5" />
          </span>
        </div>

        <div
          onClick={() => onTabChange("readiness")}
          className="p-5 bg-white border border-[#E5E7EB] hover:border-indigo-200 rounded-2xl shadow-xs cursor-pointer hover:shadow-md transition-all flex flex-col justify-between h-40"
        >
          <div>
            <div className="h-8.5 w-8.5 rounded-lg bg-green-50 flex items-center justify-center text-green-600 mb-3">
              <CheckCircle2 className="h-4.5 w-4.5" />
            </div>
            <h4 className="text-xs font-bold text-slate-800">Audit Readiness Evidence</h4>
            <p className="text-[10px] text-slate-400 mt-1">Submit calibrations logs and verify missing evidence checklists</p>
          </div>
          <span className="text-[10px] font-bold text-green-600 flex items-center gap-0.5">
            Audit Checklist <ChevronRight className="h-3.5 w-3.5" />
          </span>
        </div>

        <div
          onClick={() => onTabChange("violations")}
          className="p-5 bg-white border border-[#E5E7EB] hover:border-indigo-200 rounded-2xl shadow-xs cursor-pointer hover:shadow-md transition-all flex flex-col justify-between h-40"
        >
          <div>
            <div className="h-8.5 w-8.5 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-3">
              <AlertTriangle className="h-4.5 w-4.5" />
            </div>
            <h4 className="text-xs font-bold text-slate-800">Violations Logs</h4>
            <p className="text-[10px] text-slate-400 mt-1">Track hot alarms and safety regulatory violations</p>
          </div>
          <span className="text-[10px] font-bold text-red-600 flex items-center gap-0.5">
            View Violations <ChevronRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComplianceCenterPage;
