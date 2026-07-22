import React from "react";
import { useMaintenance } from "../../hooks/useMaintenance";
import { FileText, ChevronRight, Activity } from "lucide-react";

export const RcaPage: React.FC = () => {
  const { rcaSummaries, selectedRcaId, selectRca } = useMaintenance();

  const activeRca = rcaSummaries.find((r) => r.id === selectedRcaId) || null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-sans">
      <div className="lg:col-span-1 space-y-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Root Cause Analyses</h2>
          <p className="text-xs text-slate-400 mt-1">Suggested failure cause diagnostics</p>
        </div>

        <div className="space-y-3">
          {rcaSummaries.map((rca) => (
            <button
              key={rca.id}
              onClick={() => selectRca(rca.id)}
              className={`w-full text-left p-3.5 bg-white border rounded-2xl shadow-xs transition-all flex items-start justify-between ${
                selectedRcaId === rca.id ? "border-[#4F46E5] ring-2 ring-[#4F46E5]/10" : "border-[#E5E7EB]"
              }`}
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">{rca.assetName}</span>
                <span className="text-xs font-semibold text-slate-700 block truncate max-w-[150px]">{rca.failurePattern}</span>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-400 mt-1 shrink-0" />
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2">
        {activeRca ? (
          <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-6 space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-800">{activeRca.assetName} - RCA</h3>
              <p className="text-xs text-slate-400 mt-1">Pattern: {activeRca.failurePattern}</p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Suggested Causes</span>
              <ul className="space-y-1">
                {activeRca.suggestedCauses.map((cause, idx) => (
                  <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Timeline Trace</span>
              <div className="space-y-3">
                {activeRca.timeline.map((event, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full shrink-0">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                    <span className="text-xs text-slate-600 font-medium leading-relaxed">{event.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="h-64 flex items-center justify-center bg-white border border-[#E5E7EB] rounded-[24px] text-slate-400 text-xs">
            Select an analysis record from the left directory column to inspect.
          </div>
        )}
      </div>
    </div>
  );
};

export default RcaPage;
