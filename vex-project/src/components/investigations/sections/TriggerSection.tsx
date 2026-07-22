import React from "react";
import { InvestigationDetail } from "../../../types/investigations";
import { AlertCircle } from "lucide-react";

interface TriggerSectionProps {
  investigation: InvestigationDetail;
}

export const TriggerSection: React.FC<TriggerSectionProps> = ({ investigation }) => {
  return (
    <div className="space-y-4 font-sans">
      <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <AlertCircle className="h-4.5 w-4.5 text-red-500" />
          <span>Source Alarm / Incident: {investigation.alarmRef}</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed font-semibold">
          Initial trigger event: Pressure release safety valve failure occurred at Gujarat Plant #1. Diagnostic telemetry logged temperature values exceeding 140°C on component Pump-21.
        </p>
      </div>

      <div className="space-y-2">
        <span className="text-[10px] font-bold text-slate-400 uppercase block">Linked Incidents</span>
        <div className="p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-600 flex items-center justify-between font-medium">
          <span>ALARM-4091: High Core Heat Limit</span>
          <span className="text-[9px] font-bold uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded">Critical</span>
        </div>
      </div>
    </div>
  );
};

export default TriggerSection;
