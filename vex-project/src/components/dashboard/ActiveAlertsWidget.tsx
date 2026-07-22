import React from "react";
import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "../../api/dashboard";
import { Zap } from "lucide-react";

export const ActiveAlertsWidget: React.FC = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["activeAlerts"],
    queryFn: () => dashboardApi.getActiveAlerts(),
    refetchInterval: 10000, // refresh every 10s
    staleTime: 5000,
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
        <span className="text-xs font-semibold text-red-500">Failed to load Alerts</span>
        <button
          onClick={() => refetch()}
          className="mt-3 px-3 py-1 bg-[#4F46E5] text-white text-xs font-bold rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  const criticalAlertsCount = data.filter((a) => a.severity === "critical").length;

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Active Alerts</span>
        <div className="h-10 w-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
          <Zap className="h-5 w-5 text-[#2563EB]" />
        </div>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-3xl font-extrabold text-[#111827] tracking-tight">{data.length}</span>
        {criticalAlertsCount > 0 ? (
          <span className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">
            {criticalAlertsCount} Critical
          </span>
        ) : (
          <span className="text-xs font-semibold text-[#166534] bg-[#F0FDF4] border border-[#DCFCE7] px-2.5 py-1 rounded-full">
            No Critical
          </span>
        )}
      </div>
      <p className="text-xs text-[#6B7280] mt-3">Monitoring active telemetry nodes</p>
    </div>
  );
};

export default ActiveAlertsWidget;
