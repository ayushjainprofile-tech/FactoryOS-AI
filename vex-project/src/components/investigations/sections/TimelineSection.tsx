import React from "react";
import { InvestigationDetail } from "../../../types/investigations";
import { useInvestigationDetail } from "../../../hooks/useInvestigationDetail";
import { Clock, Play, CheckCircle } from "lucide-react";

interface TimelineSectionProps {
  investigation: InvestigationDetail;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ investigation }) => {
  const { runAiTimeline } = useInvestigationDetail();

  const handleRunAi = async () => {
    await runAiTimeline();
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-400 uppercase">Chronological Sequence of Events</span>
        <button
          onClick={handleRunAi}
          className="px-3 py-1.5 bg-slate-900 hover:bg-slate-850 text-white font-bold text-[10px] rounded-lg transition-all flex items-center gap-1"
        >
          <Play className="h-3 w-3 fill-white" /> AI Refine Timeline
        </button>
      </div>

      <div className="space-y-4 relative border-l border-slate-100 pl-4 ml-2.5">
        {investigation.timeline.map((event) => (
          <div key={event.id} className="relative space-y-1.5">
            <span className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-indigo-500 border-2 border-white ring-2 ring-indigo-100" />
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400">
                {new Date(event.timestamp).toLocaleString()}
              </span>
              <span className="text-[9px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded uppercase">
                {event.source}
              </span>
            </div>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
