import React from "react";
import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "../../api/dashboard";
import { CheckCircle } from "lucide-react";

export const ComplianceScoreWidget: React.FC = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["complianceScore"],
    queryFn: () => dashboardApi.getComplianceScore(),
    staleTime: 300000, // 5 min stale time
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
        <span className="text-xs font-semibold text-red-500">Failed to load Compliance</span>
        <button
          onClick={() => refetch()}
          className="mt-3 px-3 py-1 bg-[#4F46E5] text-white text-xs font-bold rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Compliance Score</span>
        <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] flex items-center justify-center">
          <CheckCircle className="h-5 w-5 text-[#22C55E]" />
        </div>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-3xl font-extrabold text-[#111827] tracking-tight">{data.score}%</span>
        <span className="text-xs font-semibold text-[#166534] bg-[#F0FDF4] border border-[#DCFCE7] px-2.5 py-1 rounded-full">
          {data.status.toUpperCase()}
        </span>
      </div>
      <p className="text-xs text-[#6B7280] mt-3">Last audit check: {new Date(data.lastAudited).toLocaleDateString()}</p>
    </div>
  );
};

export default ComplianceScoreWidget;
