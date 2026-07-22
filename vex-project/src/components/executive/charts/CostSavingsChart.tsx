import React from "react";
import { CostSavingsData } from "../../../types/executive";

interface CostSavingsChartProps {
  data?: CostSavingsData;
}

export const CostSavingsChart: React.FC<CostSavingsChartProps> = ({ data }) => {
  if (!data) return null;

  const total = data.downtimeAvoided + data.maintenanceOptimized + data.aiDriven;

  const segments = [
    { label: "Downtime Avoided", value: data.downtimeAvoided, color: "bg-[#4F46E5]" },
    { label: "Maintenance Optimization", value: data.maintenanceOptimized, color: "bg-green-500" },
    { label: "AI Driven", value: data.aiDriven, color: "bg-[#7C3AED]" },
  ];

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-5 shadow-xs space-y-4">
      <span className="text-[10px] font-bold text-slate-400 uppercase">Cost Savings Breakdown</span>

      <div className="space-y-3.5">
        {segments.map((seg, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>{seg.label}</span>
              <span>${seg.value.toLocaleString()}</span>
            </div>
            <div className="h-2 w-full bg-slate-50 border border-slate-100 rounded-full overflow-hidden">
              <div
                style={{ width: `${total ? (seg.value / total) * 100 : 0}%` }}
                className={`h-full rounded-full ${seg.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostSavingsChart;
