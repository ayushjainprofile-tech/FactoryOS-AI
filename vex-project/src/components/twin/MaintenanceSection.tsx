import React from "react";
import { MaintenanceOrder } from "../../types/twin";
import { Wrench, Calendar, ChevronRight } from "lucide-react";

interface MaintenanceSectionProps {
  orders: MaintenanceOrder[];
}

export const MaintenanceSection: React.FC<MaintenanceSectionProps> = ({ orders }) => {
  if (orders.length === 0) {
    return <div className="text-xs text-slate-400 py-6 text-center">No maintenance logs.</div>;
  }

  return (
    <div className="space-y-4 font-sans">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <span className="text-[10px] font-bold text-slate-400 uppercase">Recent Maintenance Workorders</span>
        <span className="text-[10px] text-[#4F46E5] font-semibold cursor-pointer hover:underline flex items-center gap-0.5">
          View all <ChevronRight className="h-3 w-3" />
        </span>
      </div>

      <div className="space-y-3">
        {orders.map((o) => (
          <div key={o.id} className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                <Wrench className="h-3.5 w-3.5 text-slate-400" /> {o.type}
              </span>
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                {o.outcome}
              </span>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> {new Date(o.date).toLocaleDateString()}
              </span>
              <span>Duration: {o.duration} hrs</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceSection;
