import React from "react";
import { Document } from "../../types/document";
import { File, RefreshCw, Trash2, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface DocumentListProps {
  documents: Document[];
  onSelect: (doc: Document) => void;
  onDelete: (id: string) => void;
  onRegenerate: (id: string) => void;
}

export const DocumentList: React.FC<DocumentListProps> = ({
  documents,
  onSelect,
  onDelete,
  onRegenerate,
}) => {
  const getStatusBadge = (status: string) => {
    if (status === "ready") {
      return (
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
          <CheckCircle2 className="h-3 w-3" /> READY
        </span>
      );
    }
    if (status.endsWith("failed") || status === "failed") {
      return (
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
          <AlertCircle className="h-3 w-3" /> FAILED
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">
        <Loader2 className="h-3 w-3 animate-spin" /> PROCESSING
      </span>
    );
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] overflow-hidden shadow-sm font-sans">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#F1F5F9] bg-[#F8FAFC]">
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Name / Type</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Scoping</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Status</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Uploaded At</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F5F9]">
            {documents.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-xs text-slate-400">
                  No documents found matching the filters.
                </td>
              </tr>
            ) : (
              documents.map((doc) => (
                <tr
                  key={doc.id}
                  className="hover:bg-[#F8FAFC] transition-colors cursor-pointer group"
                  onClick={() => onSelect(doc)}
                >
                  <td className="p-4 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-[#F1F5F9] flex items-center justify-center text-slate-500 shrink-0">
                      <File className="h-4.5 w-4.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-slate-800 truncate max-w-[200px]" title={doc.name}>
                        {doc.name}
                      </div>
                      <div className="text-[10px] text-slate-400 uppercase mt-0.5">
                        {doc.fileType} • {(doc.size / 1024).toFixed(1)} KB
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    <div className="text-xs text-slate-700">
                      {doc.plantId ? `Plant: ${doc.plantId}` : "Global Scope"}
                    </div>
                    {doc.equipmentId && (
                      <div className="text-[10px] text-slate-400 mt-0.5">Asset: {doc.equipmentId}</div>
                    )}
                  </td>

                  <td className="p-4">{getStatusBadge(doc.status)}</td>

                  <td className="p-4 text-xs text-slate-500">
                    {new Date(doc.uploadedAt).toLocaleDateString()}
                  </td>

                  <td className="p-4 text-right" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => onRegenerate(doc.id)}
                        className="p-1.5 text-slate-400 hover:text-[#4F46E5] hover:bg-indigo-50 rounded-lg transition-all"
                        title="Reprocess Pipeline"
                      >
                        <RefreshCw className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => onDelete(doc.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete Document"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentList;
