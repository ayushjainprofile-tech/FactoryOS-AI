import React from "react";
import { InvestigationDetail } from "../../../types/investigations";
import { useInvestigationDetail } from "../../../hooks/useInvestigationDetail";
import { Play, ClipboardList } from "lucide-react";

interface RecommendationsSectionProps {
  investigation: InvestigationDetail;
}

export const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({ investigation }) => {
  const { runAiRecommendations } = useInvestigationDetail();

  const handleRunAi = async () => {
    await runAiRecommendations();
  };

  const getPriorityColor = (priority: string) => {
    if (priority === "high") return "text-red-600 bg-red-50 border-red-200";
    if (priority === "medium") return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-blue-600 bg-blue-50 border-blue-200";
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-400 uppercase">Corrective & Preventive Action Plan</span>
        <button
          onClick={handleRunAi}
          className="px-3 py-1.5 bg-slate-900 hover:bg-slate-850 text-white font-bold text-[10px] rounded-lg transition-all flex items-center gap-1"
        >
          <Play className="h-3 w-3 fill-white" /> AI Generate Actions
        </button>
      </div>

      <div className="space-y-3.5">
        {investigation.recommendations.map((rec) => (
          <div key={rec.id} className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
            <div className="flex items-start justify-between gap-3 text-xs">
              <span className="font-semibold text-slate-700 leading-normal flex items-start gap-1.5">
                <ClipboardList className="h-4.5 w-4.5 text-slate-400 shrink-0 mt-0.5" />
                <span>{rec.description}</span>
              </span>
              <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded-full shrink-0 ${getPriorityColor(rec.priority)}`}>
                {rec.priority}
              </span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium pt-1 border-t border-slate-200/40">
              <span>Owner: {rec.owner}</span>
              <span>Due: {new Date(rec.dueDate).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsSection;
