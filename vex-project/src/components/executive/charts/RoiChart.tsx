import React from "react";
import { RoiData } from "../../../types/executive";

interface RoiChartProps {
  data?: RoiData;
}

export const RoiChart: React.FC<RoiChartProps> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-5 shadow-xs space-y-4">
      <span className="text-[10px] font-bold text-slate-400 uppercase">ROI Benefits vs Integration Costs</span>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
          <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Integration Costs</span>
          <span className="text-xs font-extrabold text-red-600 block">${data.costs.toLocaleString()}</span>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
          <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Calculated Net Savings</span>
          <span className="text-xs font-extrabold text-green-600 block">${data.netSavings.toLocaleString()}</span>
        </div>
      </div>

      <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl text-center">
        <span className="text-[9px] uppercase font-bold text-indigo-500 block mb-0.5">Estimated Payback Period</span>
        <span className="text-sm font-extrabold text-[#4F46E5] block">{data.paybackPeriod} Months</span>
      </div>
    </div>
  );
};

export default RoiChart;
