import React from "react";
import { useMaintenance } from "../../hooks/useMaintenance";
import { Sparkles, CheckCircle2, XCircle } from "lucide-react";

export const AiRecommendationsPage: React.FC = () => {
  const { recommendations, isLoading } = useMaintenance();

  if (isLoading) {
    return <div className="h-64 flex items-center justify-center font-sans">Loading AI Recommendations...</div>;
  }

  const getTypeColor = (type: string) => {
    if (type === "high_risk_asset") return "bg-red-50 text-red-600 border-red-200";
    if (type === "schedule_change") return "bg-indigo-50 text-indigo-600 border-indigo-200";
    return "bg-green-50 text-green-600 border-green-200";
  };

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h2 className="text-lg font-bold text-slate-800">AI Maintenance Recommendations</h2>
        <p className="text-xs text-slate-400 mt-1">Suggested schedule changes and preventative maintenance tuning</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((rec) => (
          <div key={rec.id} className="p-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs space-y-4">
            <div className="flex items-center justify-between text-[10px]">
              <span className={`font-bold uppercase tracking-wider px-2 py-0.5 border rounded-full ${getTypeColor(rec.type)}`}>
                {rec.type}
              </span>
            </div>

            <h4 className="text-xs font-bold text-slate-800">{rec.recommendation}</h4>

            <div className="space-y-2">
              <div>
                <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Rationale</span>
                <p className="text-xs text-slate-600 leading-relaxed">{rec.rationale}</p>
              </div>
              <div>
                <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Expected Impact</span>
                <p className="text-xs text-green-600 font-semibold leading-relaxed">{rec.expectedImpact}</p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-50">
              <button className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-lg flex items-center gap-1">
                <XCircle className="h-3.5 w-3.5" /> Dismiss
              </button>
              <button className="px-3 py-1.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-[10px] font-bold rounded-lg flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Apply tuning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiRecommendationsPage;
