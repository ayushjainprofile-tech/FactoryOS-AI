import React from "react";
import { AssetHealth } from "../../../types/assets";

interface HealthSectionProps {
  health?: AssetHealth;
}

export const HealthSection: React.FC<HealthSectionProps> = ({ health }) => {
  if (!health) {
    return <div className="text-xs text-slate-400 py-6 text-center">No health data available.</div>;
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-50 border-green-200";
    if (score >= 50) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  const getBarColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl">
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase">Overall Asset Health Score</span>
          <span className="text-xs text-slate-500 block mt-0.5">Calculated from sensor anomalies</span>
        </div>
        <span className={`text-base font-extrabold px-3 py-1 rounded-xl border ${getScoreColor(health.overallScore)}`}>
          {health.overallScore}%
        </span>
      </div>

      <div className="space-y-4">
        <span className="text-[10px] font-bold text-slate-400 uppercase block">Component Subscores</span>
        <div className="space-y-3">
          {health.components.map((comp, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <span>{comp.name}</span>
                <span>{comp.score}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${getBarColor(comp.score)} rounded-full`} style={{ width: `${comp.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthSection;
