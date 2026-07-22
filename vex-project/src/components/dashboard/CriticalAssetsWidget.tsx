import React from "react";
import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "../../api/dashboard";
import { Briefcase } from "lucide-react";

export const CriticalAssetsWidget: React.FC = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["criticalAssets"],
    queryFn: () => dashboardApi.getCriticalAssets(),
    staleTime: 60000, // 1 min stale time
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
        <span className="text-xs font-semibold text-red-500">Failed to load Assets</span>
        <button
          onClick={() => refetch()}
          className="mt-3 px-3 py-1 bg-[#4F46E5] text-white text-xs font-bold rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  const criticalCount = data.filter((a) => a.criticality === "critical").length;

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Critical Assets</span>
        <div className="h-10 w-10 rounded-xl bg-[#F5F3FF] flex items-center justify-center">
          <Briefcase className="h-5 w-5 text-[#7C3AED]" />
        </div>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-3xl font-extrabold text-[#111827] tracking-tight">{data.length}</span>
        <span className="text-xs font-semibold text-[#7C3AED] bg-[#F5F3FF] border border-[#DDD6FE] px-2.5 py-1 rounded-full">
          {criticalCount} Critical
        </span>
      </div>
      <p className="text-xs text-[#6B7280] mt-3">All equipment telemetry processing normally</p>
    </div>
  );
};

export default CriticalAssetsWidget;
