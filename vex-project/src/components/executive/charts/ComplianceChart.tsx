import React from "react";
import { ComplianceTrend } from "../../../types/executive";

interface ComplianceChartProps {
  data: ComplianceTrend[];
}

export const ComplianceChart: React.FC<ComplianceChartProps> = ({ data }) => {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-5 shadow-xs space-y-4">
      <span className="text-[10px] font-bold text-slate-400 uppercase">Framework Compliance and Violations Count</span>

      <div className="h-48 flex items-end gap-6 pt-4">
        {data.map((trend, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full bg-slate-50 border border-slate-100 rounded-lg h-32 flex flex-col justify-end relative overflow-hidden">
              <div
                style={{ height: `${trend.iso}%` }}
                className="w-full bg-green-500 hover:bg-green-600 transition-all rounded-b-lg"
              />
              <span className="absolute inset-x-0 bottom-2 text-center text-[10px] font-extrabold text-slate-700">
                {trend.iso}%
              </span>
            </div>
            <span className="text-[10px] font-bold text-slate-500">
              {new Date(trend.date).toLocaleDateString(undefined, { month: "short" })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplianceChart;
