import React from "react";
import { useCompliance } from "../../hooks/useCompliance";
import { AlertOctagon, RefreshCw } from "lucide-react";

export const ViolationsPage: React.FC = () => {
  const { violations, isLoading, refetch } = useCompliance();

  const getSeverityBadge = (sev: string) => {
    if (sev === "critical" || sev === "high") {
      return "text-red-600 bg-red-50 border-red-200";
    }
    if (sev === "medium") {
      return "text-yellow-600 bg-yellow-50 border-yellow-200";
    }
    return "text-blue-600 bg-blue-50 border-blue-200";
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Compliance Violations Logs</h2>
          <p className="text-xs text-slate-400 mt-1">Track regulatory and safety non-compliance anomalies</p>
        </div>

        <button
          onClick={() => refetch()}
          className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 border border-[#E5E7EB] rounded-xl transition-all"
        >
          <RefreshCw className="h-4.5 w-4.5" />
        </button>
      </div>

      {isLoading ? (
        <div className="h-32 flex items-center justify-center">Loading violations...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {violations.length === 0 ? (
            <div className="col-span-2 text-xs text-slate-400 py-8 text-center bg-white border border-[#E5E7EB] rounded-[24px]">
              No active violations reported.
            </div>
          ) : (
            violations.map((violation) => (
              <div key={violation.id} className="p-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <AlertOctagon className="h-4 w-4 text-red-500" /> {violation.assetName}
                  </span>
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded-full ${getSeverityBadge(violation.severity)}`}>
                    {violation.severity}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-semibold">{violation.description}</p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-50 text-[10px] text-slate-400 font-medium">
                  <span>Framework: {violation.framework}</span>
                  <span>Date: {new Date(violation.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ViolationsPage;
