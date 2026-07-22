import React from "react";
import { TimelineEvent } from "../../../types/assets";
import { Calendar, Wrench, Clock } from "lucide-react";

interface MaintenanceSectionProps {
  timeline: TimelineEvent[];
}

export const MaintenanceSection: React.FC<MaintenanceSectionProps> = ({ timeline }) => {
  if (timeline.length === 0) {
    return <div className="text-xs text-slate-400 py-6 text-center">No maintenance timeline records.</div>;
  }

  return (
    <div className="space-y-4 font-sans">
      <span className="text-[10px] font-bold text-slate-400 uppercase block pb-1.5 border-b border-slate-100">
        Maintenance Event History
      </span>

      <div className="space-y-3">
        {timeline.map((event) => (
          <div key={event.id} className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                <Wrench className="h-3.5 w-3.5 text-slate-400" /> {event.type}
              </span>
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                {event.outcome}
              </span>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> {new Date(event.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {event.duration} hrs
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceSection;
