import React from "react";
import { Document } from "../../types/documents";
import { File, RefreshCw, Trash2, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface DocumentRowProps {
  document: Document;
  onSelect: (doc: Document) => void;
  onDelete: (id: string) => void;
  onRegenerate: (id: string) => void;
}

export const DocumentRow: React.FC<DocumentRowProps> = ({
  document,
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
    if (status === "failed") {
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
    <tr
      className="hover:bg-[#F8FAFC] transition-colors cursor-pointer group"
      onClick={() => onSelect(document)}
    >
      <td className="p-4 flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-[#F1F5F9] flex items-center justify-center text-slate-500 shrink-0">
          <File className="h-4.5 w-4.5" />
        </div>
        <div className="min-w-0">
          <div className="text-xs font-semibold text-slate-800 truncate max-w-[200px]" title={document.name}>
            {document.name}
          </div>
          <div className="text-[10px] text-slate-400 uppercase mt-0.5">
            {document.fileType} • {(document.size / 1024).toFixed(1)} KB
          </div>
        </div>
      </td>

      <td className="p-4">
        <div className="text-xs text-slate-700">
          {document.plantId ? `Plant: ${document.plantId}` : "Global Scope"}
        </div>
        {document.equipmentId && (
          <div className="text-[10px] text-slate-400 mt-0.5">Asset: {document.equipmentId}</div>
        )}
      </td>

      <td className="p-4">{getStatusBadge(document.status)}</td>

      <td className="p-4 text-xs text-slate-500">
        {new Date(document.uploadedAt).toLocaleDateString()}
      </td>

      <td className="p-4 text-right" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => onRegenerate(document.id)}
            className="p-1.5 text-slate-400 hover:text-[#4F46E5] hover:bg-indigo-50 rounded-lg transition-all"
            title="Reprocess Pipeline"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(document.id)}
            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
            title="Delete Document"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default DocumentRow;
