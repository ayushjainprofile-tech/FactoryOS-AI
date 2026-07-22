import React from "react";
import { Document } from "../../types/document";
import { CheckCircle2, AlertCircle, RefreshCw, Trash2, ArrowLeft, Terminal } from "lucide-react";

interface DocumentDetailProps {
  document: Document;
  onBack: () => void;
  onDelete: (id: string) => void;
  onRegenerate: (id: string) => void;
}

export const DocumentDetail: React.FC<DocumentDetailProps> = ({
  document,
  onBack,
  onDelete,
  onRegenerate,
}) => {
  const pipelineStages = [
    { key: "uploaded", label: "Upload Completed" },
    { key: "ocr", label: "Optical Character Recognition (OCR)" },
    { key: "parsing", label: "SOP/Data Parsing" },
    { key: "chunking", label: "Text Structural Chunking" },
    { key: "embedding", label: "Vector Embeddings Ingestion" },
    { key: "graph", label: "Neo4j Knowledge Graph Mapping" },
    { key: "ready", label: "Fully Indexed & Operational" },
  ];

  const getStageStatus = (stageKey: string): "complete" | "failed" | "processing" | "pending" => {
    const status = document.status;

    if (status === "ready") return "complete";
    if (status === "failed") return "failed";

    if (stageKey === "uploaded") return "complete";

    // Matching stages based on backend naming convention
    if (status.includes(stageKey)) {
      if (status.endsWith("done")) return "complete";
      if (status.endsWith("failed")) return "failed";
      return "processing";
    }

    // Checking if past completed stages
    const order = ["uploaded", "ocr", "parsing", "chunking", "embedding", "graph", "ready"];
    const currentIdx = order.findIndex((o) => status.startsWith(o));
    const stageIdx = order.indexOf(stageKey);

    if (currentIdx > stageIdx) return "complete";
    return "pending";
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 shadow-sm font-sans space-y-8 max-w-4xl w-full mx-auto">
      {/* Header Bar */}
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

      {/* Grid Metadata details & Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Detail Panel */}
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

        {/* Timeline Trace Stages */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-5">
          <span className="text-xs font-bold text-slate-700 block pb-2 border-b border-slate-200">
            Pipeline Progress
          </span>

          <div className="space-y-4 relative">
            {pipelineStages.map((stage) => {
              const status = getStageStatus(stage.key);
              return (
                <div key={stage.key} className="flex items-start gap-3">
                  {status === "complete" ? (
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#22C55E] mt-0.5 shrink-0" />
                  ) : status === "failed" ? (
                    <AlertCircle className="h-4.5 w-4.5 text-red-500 mt-0.5 shrink-0" />
                  ) : status === "processing" ? (
                    <div className="h-4.5 w-4.5 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin mt-0.5 shrink-0" />
                  ) : (
                    <span className="h-4.5 w-4.5 rounded-full border border-slate-200 bg-white mt-0.5 shrink-0" />
                  )}
                  <div>
                    <span
                      className={`text-[11px] font-semibold block ${
                        status === "pending" ? "text-slate-400" : "text-slate-700"
                      }`}
                    >
                      {stage.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentDetail;
