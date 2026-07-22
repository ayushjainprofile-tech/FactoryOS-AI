import React from "react";
import { RiskScoreData } from "../../../types/executive";

interface RiskScoreChartProps {
  data?: RiskScoreData;
}

export const RiskScoreChart: React.FC<RiskScoreChartProps> = ({ data }) => {
  if (!data) return null;

  const categories = [
    { label: "Safety Risk", value: data.safety, color: "bg-red-500" },
    { label: "Reliability Risk", value: data.reliability, color: "bg-yellow-500" },
    { label: "Compliance Risk", value: data.compliance, color: "bg-green-500" },
    { label: "Cyber Security Risk", value: data.cyber, color: "bg-[#4F46E5]" },
  ];

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-5 shadow-xs space-y-4">
      <span className="text-[10px] font-bold text-slate-400 uppercase">Risk Index Components</span>

      <div className="space-y-3.5">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>{cat.label}</span>
              <span>{cat.value}/100</span>
            </div>
            <div className="h-2 w-full bg-slate-50 border border-slate-100 rounded-full overflow-hidden">
              <div
                style={{ width: `${cat.value}%` }}
                className={`h-full rounded-full ${cat.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskScoreChart;
