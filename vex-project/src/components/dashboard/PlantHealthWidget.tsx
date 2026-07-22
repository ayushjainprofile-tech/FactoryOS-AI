import React from "react";
import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "../../api/dashboard";
import { Heart, Activity } from "lucide-react";

interface PlantHealthWidgetProps {
  plantId: string;
}

export const PlantHealthWidget: React.FC<PlantHealthWidgetProps> = ({ plantId }) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["plantHealth", plantId],
    queryFn: () => dashboardApi.getPlantHealth(plantId),
    refetchInterval: 15000, // refresh every 15s
    staleTime: 10000,
  });

  if (isLoading) {
    return (
      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-sm animate-pulse">
        <div className="h-4 bg-slate-200 rounded w-1/3 mb-4" />
        <div className="h-8 bg-slate-200 rounded w-1/2" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-sm flex flex-col justify-between items-center text-center">
        <span className="text-xs font-semibold text-red-500">Failed to load Plant Health</span>
        <button
          onClick={() => refetch()}
          className="mt-3 px-3 py-1 bg-[#4F46E5] text-white text-xs font-bold rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  const statusColors = {
    optimal: "text-[#22C55E] bg-[#F0FDF4] border-[#DCFCE7]",
    warning: "text-[#F59E0B] bg-[#FFFBEB] border-[#FEF3C7]",
    critical: "text-[#EF4444] bg-[#FEF2F2] border-[#FEE2E2]",
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Plant Health</span>
        <div className="h-10 w-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center">
          <Heart className="h-5 w-5 text-[#4F46E5]" />
        </div>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-3xl font-extrabold text-[#111827] tracking-tight">{data.healthScore}%</span>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusColors[data.status]}`}>
          {data.status.toUpperCase()}
        </span>
      </div>
      <p className="text-xs text-[#6B7280] mt-3 flex items-center gap-1.5">
        <Activity className="h-3 w-3 text-[#6B7280] animate-pulse" />
        Last synchronized: {new Date(data.lastChecked).toLocaleTimeString()}
      </p>
    </div>
  );
};

export default PlantHealthWidget;
