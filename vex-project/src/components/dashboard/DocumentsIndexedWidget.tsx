import React from "react";
import { useQuery } from "@tanstack/react-query";
import { documentsApi } from "../../api/documents";
import { FileText } from "lucide-react";

export const DocumentsIndexedWidget: React.FC = () => {
  const { data: documents = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["documentsSummary"],
    queryFn: () => documentsApi.list(),
    staleTime: 60000,
  });

  if (isLoading) {
    return (
      <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-6 shadow-sm animate-pulse h-48" />
    );
  }

  if (isError) {
    return (
      <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-6 shadow-sm flex flex-col justify-center items-center text-center h-48">
        <span className="text-xs font-semibold text-red-500">Failed to load Knowledge statistics</span>
        <button
          onClick={() => refetch()}
          className="mt-3 px-3 py-1 bg-[#4F46E5] text-white text-xs font-bold rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  const total = documents.length;
  const ready = documents.filter((d) => d.status === "ready").length;
  const failed = documents.filter((d) => d.status === "failed").length;
  const processing = total - ready - failed;

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-6 shadow-sm flex flex-col justify-between h-48">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9] mb-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center">
              <FileText className="h-4.5 w-4.5 text-[#2563EB]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#111827]">Knowledge Index</h3>
              <p className="text-[11px] text-[#6B7280]">Total documents ingested in memory</p>
            </div>
          </div>
          <span className="text-lg font-extrabold text-[#111827]">{total}</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#F0FDF4] border border-[#DCFCE7] p-2.5 rounded-xl text-center">
            <span className="text-[10px] font-bold text-[#166534] block">Ready</span>
            <span className="text-sm font-bold text-[#15803d] mt-1 block">{ready}</span>
          </div>

          <div className="bg-[#EFF6FF] border border-[#DBEAFE] p-2.5 rounded-xl text-center">
            <span className="text-[10px] font-bold text-[#1E40AF] block">Processing</span>
            <span className="text-sm font-bold text-[#1d4ed8] mt-1 block">{processing}</span>
          </div>

          <div className="bg-[#FEF2F2] border border-[#FEE2E2] p-2.5 rounded-xl text-center">
            <span className="text-[10px] font-bold text-[#991B1B] block">Failed</span>
            <span className="text-sm font-bold text-[#b91c1c] mt-1 block">{failed}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsIndexedWidget;
