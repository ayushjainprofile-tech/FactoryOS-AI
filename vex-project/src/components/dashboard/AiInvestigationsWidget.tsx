import React from "react";
import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "../../api/dashboard";
import { Sparkles } from "lucide-react";

export const AiInvestigationsWidget: React.FC = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["activeInvestigations"],
    queryFn: () => dashboardApi.getActiveInvestigations(),
    staleTime: 30000, // 30s stale time
  });

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-white to-[#F5F3FF] border border-[#E5E7EB] rounded-[20px] p-6 shadow-sm animate-pulse h-48" />
    );
  }

  if (isError || !data) {
    return (
      <div className="bg-gradient-to-br from-white to-[#F5F3FF] border border-[#E5E7EB] rounded-[20px] p-6 shadow-sm flex flex-col justify-center items-center text-center h-48">
        <span className="text-xs font-semibold text-red-500">Failed to load Investigations</span>
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
    <div className="bg-gradient-to-br from-white to-[#F5F3FF] border border-[#E5E7EB] rounded-[20px] p-6 shadow-sm flex flex-col justify-between h-48">
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9] mb-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#EEF2FF] flex items-center justify-center">
              <Sparkles className="h-4.5 w-4.5 text-[#4F46E5]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#111827]">Active Investigations</h3>
              <p className="text-[11px] text-[#6B7280]">AI-driven root cause pipelines</p>
            </div>
          </div>
        </div>

        {data.length === 0 ? (
          <div className="text-xs text-[#6B7280] py-4 text-center">No active investigations.</div>
        ) : (
          <div className="space-y-2 max-h-24 overflow-y-auto pr-1">
            {data.slice(0, 3).map((inv) => (
              <div
                key={inv.id}
                className="p-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#374151] shadow-xs flex items-center justify-between"
              >
                <span className="text-xs truncate max-w-[200px]">{inv.title}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600">
                  {inv.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AiInvestigationsWidget;
