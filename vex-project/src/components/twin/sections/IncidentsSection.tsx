import React from "react";
import { TwinIncident } from "../../../types/twin";
import { AlertTriangle, Clock } from "lucide-react";

interface IncidentsSectionProps {
  incidents: TwinIncident[];
}

export const IncidentsSection: React.FC<IncidentsSectionProps> = ({ incidents }) => {
  if (incidents.length === 0) {
    return <div className="text-xs text-slate-400 py-6 text-center">No open incidents.</div>;
  }

  const getSeverityColor = (sev: string) => {
    if (sev === "critical" || sev === "high") {
      return "text-red-600 bg-red-50 border-red-200";
    }
    if (sev === "medium") {
      return "text-yellow-600 bg-yellow-50 border-yellow-200";
    }
    return "text-blue-600 bg-blue-50 border-blue-200";
  };

  return (
    <div className="space-y-3 font-sans">
      {incidents.map((inc) => (
        <div key={inc.id} className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
          <div className="flex items-start justify-between gap-3">
            <span className="text-xs font-semibold text-slate-700 leading-normal flex items-start gap-1.5">
              <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
              <span>{inc.title}</span>
            </span>
            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded-full shrink-0 ${getSeverityColor(inc.severity)}`}>
              {inc.severity}
            </span>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {new Date(inc.date).toLocaleDateString()}
            </span>
            <span className="font-semibold uppercase tracking-wider">{inc.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IncidentsSection;
