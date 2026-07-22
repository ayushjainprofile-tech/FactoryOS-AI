import React from "react";
import { AiRecommendation } from "../../../types/assets";
import { Sparkles, AlertCircle } from "lucide-react";

interface AiRecommendationsSectionProps {
  recommendations: AiRecommendation[];
}

export const AiRecommendationsSection: React.FC<AiRecommendationsSectionProps> = ({ recommendations }) => {
  if (recommendations.length === 0) {
    return <div className="text-xs text-slate-400 py-6 text-center">No AI diagnostics recommendations.</div>;
  }

  const getPriorityColor = (priority: string) => {
    if (priority === "high") return "text-red-600 bg-red-50 border-red-200";
    if (priority === "medium") return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-blue-600 bg-blue-50 border-blue-200";
  };

  return (
    <div className="space-y-4 font-sans">
      <span className="text-[10px] font-bold text-slate-400 uppercase block pb-1.5 border-b border-slate-100">
        AI Diagnostics & Insights
      </span>

      <div className="space-y-3.5">
        {recommendations.map((rec) => (
          <div key={rec.id} className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-3">
            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-[#4F46E5]" /> {rec.title}
              </span>
              <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded-full ${getPriorityColor(rec.priority)}`}>
                {rec.priority}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-medium">{rec.recommendation}</p>

            <div className="flex items-center gap-1.5 text-[10px] text-red-600 bg-red-50/50 p-2 rounded-lg border border-red-100 leading-normal">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>Risk: {rec.riskFactor}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiRecommendationsSection;
