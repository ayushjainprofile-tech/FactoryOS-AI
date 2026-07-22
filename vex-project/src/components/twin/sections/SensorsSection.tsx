import React from "react";
import { SensorReading } from "../../../types/twin";
import { Activity } from "lucide-react";

interface SensorsSectionProps {
  sensors: SensorReading[];
}

export const SensorsSection: React.FC<SensorsSectionProps> = ({ sensors }) => {
  if (sensors.length === 0) {
    return <div className="text-xs text-slate-400 py-6 text-center">No sensors connected.</div>;
  }

  const getStatusColor = (status: string) => {
    if (status === "normal") return "text-green-600 bg-green-50 border-green-200";
    if (status === "warning") return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  return (
    <div className="space-y-3 font-sans">
      {sensors.map((s) => (
        <div key={s.id} className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Activity className="h-4.5 w-4.5 text-slate-400" />
            <div>
              <span className="text-xs font-semibold text-slate-700 block">{s.name}</span>
              <span className="text-[9px] text-slate-400 block mt-0.5 uppercase">{s.type}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-slate-800">
              {s.value} {s.unit}
            </span>
            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded-full ${getStatusColor(s.status)}`}>
              {s.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SensorsSection;
