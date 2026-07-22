import React from "react";
import { useCompliance } from "../../hooks/useCompliance";
import { CheckCircle2, AlertCircle, Calendar } from "lucide-react";

export const AuditReadinessPage: React.FC = () => {
  const { readiness, isLoading } = useCompliance();

  if (isLoading) {
    return <div className="h-64 flex items-center justify-center font-sans">Loading audit readiness...</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-sans">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-5 shadow-xs space-y-3.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase block pb-1 border-b border-[#F1F5F9]">
            Missing Audit Evidence checklist
          </span>
          <div className="space-y-3">
            {readiness?.missingEvidence.map((item) => (
              <div key={item.id} className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
                <div className="flex items-start justify-between gap-3 text-xs">
                  <span className="font-semibold text-slate-700 leading-normal flex items-start gap-1.5">
                    <AlertCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Requirement: {item.requirement}</span>
                  </span>
                  <button className="px-2.5 py-1 bg-white hover:bg-indigo-50 border border-[#E5E7EB] hover:border-indigo-200 text-[#4F46E5] text-[10px] font-bold rounded-lg transition-all shrink-0">
                    Upload
                  </button>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
                  <span>Owner: {item.owner}</span>
                  <span>Due date: {new Date(item.dueDate).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-5 shadow-xs space-y-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Readiness Score</span>
          <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-center">
            <span className="text-2xl font-extrabold text-[#F97316]">{readiness?.score}%</span>
          </div>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-5 shadow-xs space-y-3">
          <span className="text-[10px] font-bold text-slate-400 uppercase block pb-1 border-b border-[#F1F5F9]">
            Upcoming Audits Schedule
          </span>
          <div className="space-y-3">
            {readiness?.upcomingAudits.map((audit, idx) => (
              <div key={idx} className="space-y-2 p-2.5 bg-slate-50 border border-slate-100 rounded-xl">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>{audit.type}</span>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400">{audit.status}</span>
                </div>
                <div className="text-[10px] text-slate-500 leading-normal">
                  Scope: {audit.scope}
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium pt-1 border-t border-slate-100">
                  <Calendar className="h-3.5 w-3.5" /> {new Date(audit.date).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditReadinessPage;
