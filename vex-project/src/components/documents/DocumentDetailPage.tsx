import React from "react";
import { Document } from "../../types/documents";
import { DocumentPipelineStatus } from "./DocumentPipelineStatus";
import { AlertCircle, RefreshCw, Trash2, ArrowLeft } from "lucide-react";

interface DocumentDetailPageProps {
  document: Document;
  onBack: () => void;
  onDelete: (id: string) => void;
  onRegenerate: (id: string) => void;
}

export const DocumentDetailPage: React.FC<DocumentDetailPageProps> = ({
  document,
  onBack,
  onDelete,
  onRegenerate,
}) => {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 shadow-sm font-sans space-y-8 max-w-4xl w-full mx-auto">
      <div className="flex items-center justify-between pb-6 border-b border-[#F1F5F9]">
        <button
          onClick={onBack}
          className="text-xs text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Files List
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onRegenerate(document.id)}
            className="px-3.5 py-1.5 bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#4F46E5] font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5"
          >
            <RefreshCw className="h-3.5 w-3.5" /> Reprocess Pipeline
          </button>
          <button
            onClick={() => onDelete(document.id)}
            className="px-3.5 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5"
          >
            <Trash2 className="h-3.5 w-3.5" /> Delete File
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-800">{document.name}</h2>
            <p className="text-xs text-slate-400 mt-1 uppercase">
              ID: {document.id} • {document.fileType} • {(document.size / 1024).toFixed(1)} KB
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Scoping</span>
              <span className="text-xs font-semibold text-slate-700">
                {document.plantId ? `Plant: ${document.plantId}` : "Global Scope"}
              </span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Asset Tag</span>
              <span className="text-xs font-semibold text-slate-700">{document.equipmentId || "None"}</span>
            </div>
          </div>

          {document.extractedText && (
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-700 block">Extracted Content Preview</span>
              <div className="bg-slate-950 text-slate-300 font-mono text-xs p-4 rounded-xl max-h-56 overflow-y-auto leading-relaxed border border-slate-800">
                {document.extractedText}
              </div>
            </div>
          )}

          {document.errorMessage && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs space-y-1">
              <span className="font-bold flex items-center gap-1">
                <AlertCircle className="h-4 w-4" /> Processing Error
              </span>
              <p className="font-mono mt-1 text-[11px] leading-relaxed">{document.errorMessage}</p>
            </div>
          )}
        </div>

        <div>
          <DocumentPipelineStatus pipelineStage={document.pipelineStage} status={document.status} />
        </div>
      </div>
    </div>
  );
};

export default DocumentDetailPage;
