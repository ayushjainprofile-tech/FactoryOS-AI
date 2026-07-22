import React from "react";
import { AiUsageData } from "../../../types/executive";

interface AiUsageChartProps {
  data?: AiUsageData;
}

export const AiUsageChart: React.FC<AiUsageChartProps> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-5 shadow-xs space-y-4">
      <span className="text-[10px] font-bold text-slate-400 uppercase">AI Adoption Rate by Role</span>

      <div className="space-y-3.5">
        {data.roleAdoption.map((role, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>{role.role}</span>
              <span>{role.percentage}%</span>
            </div>
            <div className="h-2 w-full bg-slate-50 border border-slate-100 rounded-full overflow-hidden">
              <div
                style={{ width: `${role.percentage}%` }}
                className="h-full rounded-full bg-[#4F46E5]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiUsageChart;
