import React from "react";
import { useQuery } from "@tanstack/react-query";
import { documentsApi } from "../../api/documents";
import { Activity, Clock, AlertTriangle, Layers } from "lucide-react";

export const PipelineHealthWidget: React.FC = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["pipelineHealth"],
    queryFn: () => documentsApi.getPipelineHealth(),
    refetchInterval: 10000,
    staleTime: 5000,
  });

  if (isLoading) {
    return (
      <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-6 shadow-sm animate-pulse h-48" />
    );
  }

  if (isError || !data) {
    return (
      <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-6 shadow-sm flex flex-col justify-center items-center text-center h-48">
        <span className="text-xs font-semibold text-red-500">Failed to load Pipeline Health</span>
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
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-6 shadow-sm flex flex-col justify-between h-48">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9] mb-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#F5F3FF] flex items-center justify-center">
              <Activity className="h-4.5 w-4.5 text-[#7C3AED]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#111827]">Pipeline Ingestion Health</h3>
              <p className="text-[11px] text-[#6B7280]">Celery worker queues telemetry</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-center">
            <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-slate-400">
              <Layers className="h-3 w-3" /> Queue
            </div>
            <span className="text-sm font-bold text-slate-800 mt-1 block">{data.queueDepth} jobs</span>
          </div>

          <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-center">
            <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-slate-400">
              <Clock className="h-3 w-3" /> Latency
            </div>
            <span className="text-sm font-bold text-slate-800 mt-1 block">{data.avgProcessingTime}s</span>
          </div>

          <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-center">
            <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-slate-400">
              <AlertTriangle className="h-3 w-3" /> Errors
            </div>
            <span className={`text-sm font-bold mt-1 block ${data.failureRate > 5 ? "text-red-600" : "text-[#166534]"}`}>
              {data.failureRate}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineHealthWidget;
