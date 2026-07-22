import React from "react";
import { InvestigationDetail } from "../../../types/investigations";
import { useInvestigationDetail } from "../../../hooks/useInvestigationDetail";
import { Play, Sparkles } from "lucide-react";

interface RootCauseSectionProps {
  investigation: InvestigationDetail;
}

export const RootCauseSection: React.FC<RootCauseSectionProps> = ({ investigation }) => {
  const { runAiRca } = useInvestigationDetail();

  const handleRunRca = async () => {
    await runAiRca();
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-400 uppercase">Causal Analysis (Method: {investigation.rootCause.method})</span>
        <button
          onClick={handleRunRca}
          className="px-3 py-1.5 bg-slate-900 hover:bg-slate-850 text-white font-bold text-[10px] rounded-lg transition-all flex items-center gap-1"
        >
          <Play className="h-3 w-3 fill-white" /> AI run RCA
        </button>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
          <span className="text-[9px] uppercase font-bold text-slate-400 block">Primary Root Cause</span>
          <p className="text-xs text-red-600 font-semibold leading-relaxed">{investigation.rootCause.primary}</p>
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase block">Contributing Factors</span>
          <div className="space-y-1.5">
            {investigation.rootCause.contributingFactors.map((factor, idx) => (
              <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-600 flex items-start gap-2 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                <span>{factor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootCauseSection;
