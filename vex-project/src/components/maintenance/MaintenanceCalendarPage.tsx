import React from "react";
import { useCalendar } from "../../hooks/useCalendar";
import { Clock } from "lucide-react";

export const MaintenanceCalendarPage: React.FC = () => {
  const { events, isLoading } = useCalendar();

  if (isLoading) {
    return <div className="h-64 flex items-center justify-center font-sans">Loading calendar schedules...</div>;
  }

  const getBadgeColor = (type: string) => {
    if (type === "work_order") return "bg-blue-50 text-blue-600 border-blue-200";
    if (type === "window") return "bg-purple-50 text-purple-600 border-purple-200";
    return "bg-green-50 text-green-600 border-green-200";
  };

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h2 className="text-lg font-bold text-slate-800">Maintenance Calendar</h2>
        <p className="text-xs text-slate-400 mt-1">Scheduled work orders, maintenance windows, and shifts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs space-y-3">
            <div className="flex items-center justify-between text-[10px]">
              <span className={`font-bold uppercase tracking-wider px-2 py-0.5 border rounded-full ${getBadgeColor(event.type)}`}>
                {event.type}
              </span>
            </div>

            <h4 className="text-xs font-bold text-slate-800">{event.title}</h4>

            <div className="space-y-1 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> Start: {new Date(event.start).toLocaleString()}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> End: {new Date(event.end).toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceCalendarPage;
