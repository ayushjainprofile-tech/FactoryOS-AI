import React from "react";
import { PipelineStage, DocumentStatus } from "../../types/documents";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface DocumentPipelineStatusProps {
  pipelineStage: PipelineStage;
  status: DocumentStatus;
}

export const DocumentPipelineStatus: React.FC<DocumentPipelineStatusProps> = ({
  pipelineStage,
  status,
}) => {
  const stages = [
    { key: "uploaded", label: "File Upload Complete" },
    { key: "ocr", label: "Image Optical Character Scan (OCR)" },
    { key: "parsing", label: "SOP Document Parsing" },
    { key: "chunking", label: "Structural Text Chunking" },
    { key: "embedding", label: "Vector Ingestion Embeddings" },
    { key: "graph", label: "Neo4j Knowledge Mapping" },
    { key: "ready", label: "Fully Indexed & Operational" },
  ];

  const getStageStatus = (stageKey: string): "complete" | "failed" | "processing" | "pending" => {
    if (status === "ready") return "complete";
    if (status === "failed") return "failed";

    if (stageKey === "uploaded") return "complete";

    if (pipelineStage === stageKey) {
      return "processing";
    }

    const order = ["uploaded", "ocr", "parsing", "chunking", "embedding", "graph", "ready"];
    const currentIdx = order.indexOf(pipelineStage);
    const stageIdx = order.indexOf(stageKey);

    if (currentIdx > stageIdx) return "complete";
    return "pending";
  };

  return (
    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-5 font-sans">
      <span className="text-xs font-bold text-slate-700 block pb-2 border-b border-slate-200">
        Pipeline Progress Trace
      </span>

      <div className="space-y-4">
        {stages.map((stage) => {
          const s = getStageStatus(stage.key);
          return (
            <div key={stage.key} className="flex items-start gap-3">
              {s === "complete" ? (
                <CheckCircle2 className="h-4.5 w-4.5 text-[#22C55E] mt-0.5 shrink-0" />
              ) : s === "failed" ? (
                <AlertCircle className="h-4.5 w-4.5 text-red-500 mt-0.5 shrink-0" />
              ) : s === "processing" ? (
                <div className="h-4.5 w-4.5 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin mt-0.5 shrink-0" />
              ) : (
                <span className="h-4.5 w-4.5 rounded-full border border-slate-200 bg-white mt-0.5 shrink-0" />
              )}
              <div>
                <span
                  className={`text-[11px] font-semibold block ${
                    s === "pending" ? "text-slate-400" : "text-slate-700"
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
  );
};

export default DocumentPipelineStatus;
