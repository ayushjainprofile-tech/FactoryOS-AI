import React from "react";
import { useCompliance } from "../../hooks/useCompliance";
import { ShieldAlert, CheckCircle2, Clock } from "lucide-react";

export const FrameworkCompliancePage: React.FC = () => {
  const { frameworkDetails, activeFramework, setActiveFramework, isLoading } = useCompliance();

  if (isLoading) {
    return <div className="h-64 flex items-center justify-center font-sans">Loading framework controls...</div>;
  }

  const getStatusBadge = (status: string) => {
    if (status === "compliant") {
      return (
        <span className="text-[9px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-200 uppercase">
          COMPLIANT
        </span>
      );
    }
    if (status === "in_progress") {
      return (
        <span className="text-[9px] font-bold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded border border-yellow-200 uppercase">
          IN PROGRESS
        </span>
      );
    }
    return (
      <span className="text-[9px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200 uppercase">
        NON COMPLIANT
      </span>
    );
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Framework Control Matrix</h2>
          <p className="text-xs text-slate-400 mt-1">Audit mappings for ISO and OISD codes</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveFramework("ISO-27001")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
              activeFramework === "ISO-27001"
                ? "bg-slate-900 border-slate-950 text-white"
                : "bg-white border-[#E5E7EB] text-slate-600 hover:bg-slate-50"
            }`}
          >
            ISO-27001
          </button>
          <button
            onClick={() => setActiveFramework("OISD-GDN-150")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
              activeFramework === "OISD-GDN-150"
                ? "bg-slate-900 border-slate-950 text-white"
                : "bg-white border-[#E5E7EB] text-slate-600 hover:bg-slate-50"
            }`}
          >
            OISD-GDN-150
          </button>
        </div>
      </div>

      {frameworkDetails && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white border border-[#E5E7EB] rounded-[24px] overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#F1F5F9] bg-[#F8FAFC]">
                      <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Control ID</th>
                      <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Control Name</th>
                      <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Status</th>
                      <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Evidence</th>
                      <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Last Review</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F1F5F9]">
                    {frameworkDetails.controls.map((control) => (
                      <tr key={control.id} className="hover:bg-[#F8FAFC] transition-colors">
                        <td className="p-4 text-xs font-bold text-slate-700">{control.id}</td>
                        <td className="p-4 text-xs font-semibold text-slate-800">{control.name}</td>
                        <td className="p-4">{getStatusBadge(control.status)}</td>
                        <td className="p-4 text-xs text-slate-500 font-medium">{control.evidenceCount} docs</td>
                        <td className="p-4 text-xs text-slate-400">
                          {new Date(control.lastReview).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-5 shadow-xs space-y-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Framework Performance</span>
              <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                <span className="text-xs font-semibold text-slate-700">Compliance Rate</span>
                <span className="text-sm font-extrabold text-green-600">
                  {frameworkDetails.complianceRate}%
                </span>
              </div>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-5 shadow-xs space-y-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase block pb-1 border-b border-[#F1F5F9]">
                Identified Gap Recommendations
              </span>
              <div className="space-y-2">
                {frameworkDetails.gaps.map((gap, idx) => (
                  <p key={idx} className="text-xs text-red-600 flex items-start gap-1.5 bg-red-50/50 p-2.5 rounded-xl border border-red-100 font-medium leading-relaxed">
                    <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{gap}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrameworkCompliancePage;
