import React from "react";
import { DowntimeData } from "../../../types/executive";

interface DowntimeChartProps {
  data: DowntimeData[];
}

export const DowntimeChart: React.FC<DowntimeChartProps> = ({ data }) => {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-5 shadow-xs space-y-4">
      <span className="text-[10px] font-bold text-slate-400 uppercase">Downtime Hours and Impact Costs</span>

      <div className="h-48 flex items-end gap-6 pt-4">
        {data.map((plant) => (
          <div key={plant.plantId} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full bg-slate-50 border border-slate-100 rounded-lg h-32 flex flex-col justify-end relative overflow-hidden">
              <div
                style={{ height: `${Math.min(100, plant.hours * 2)}%` }}
                className="w-full bg-red-500 hover:bg-red-600 transition-all rounded-b-lg"
              />
              <span className="absolute inset-x-0 bottom-2 text-center text-[10px] font-extrabold text-slate-700">
                {plant.hours} hrs
              </span>
            </div>
            <span className="text-[10px] font-bold text-slate-500 truncate max-w-[80px]">
              {plant.plantName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DowntimeChart;
