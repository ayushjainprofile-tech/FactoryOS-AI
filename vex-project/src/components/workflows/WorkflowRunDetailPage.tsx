import React from "react";
import { useWorkflows } from "../../hooks/useWorkflows";
import { ArrowLeft, Check, AlertTriangle, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface WorkflowRunDetailPageProps {
  onBack: () => void;
}

export const WorkflowRunDetailPage: React.FC<WorkflowRunDetailPageProps> = ({ onBack }) => {
  const { runDetail, completeWorkflowNode } = useWorkflows();

  if (!runDetail) {
    return <div className="h-64 flex items-center justify-center font-sans">Loading workflow execution trace...</div>;
  }

  const handleCompleteNode = async (nodeId: string) => {
    await completeWorkflowNode({ nodeId, payload: { verified: true } });
  };

  const getStatusColor = (status?: string) => {
    if (status === "completed") return "border-green-400 bg-green-50/50 text-green-700";
    if (status === "failed") return "border-red-400 bg-red-50/50 text-red-700";
    if (status === "running") return "border-[#4F46E5] bg-indigo-50/30 text-indigo-700 ring-2 ring-indigo-100";
    return "border-[#E5E7EB] bg-white text-slate-400";
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-6 shadow-sm font-sans space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
        <button onClick={onBack} className="text-xs text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1.5">
          <ArrowLeft className="h-4 w-4" /> Back to Runs
        </button>

        <span className="text-[10px] font-bold uppercase text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
          Run Status: {runDetail.status}
        </span>
      </div>

      <div>
        <h2 className="text-base font-bold text-slate-800">{runDetail.templateName}</h2>
        <span className="text-[10px] text-slate-400 block mt-0.5">Asset: {runDetail.assetName} • Plant ID: {runDetail.plantId}</span>
      </div>

      {/* Visual Execution Graph */}
      <div className="bg-slate-50 border border-[#E5E7EB] rounded-[24px] p-6 flex flex-col md:flex-row items-center justify-center gap-4 overflow-x-auto no-scrollbar select-none">
        {runDetail.nodes.map((node, idx) => (
          <React.Fragment key={node.id}>
            {idx > 0 && <ArrowRight className="h-5 w-5 text-slate-300 hidden md:block shrink-0" />}
            <div className={`p-4 border rounded-2xl w-48 shadow-xs space-y-2 relative transition-all ${getStatusColor(node.status)}`}>
              <span className="text-[9px] font-bold uppercase tracking-wider block">
                {node.type}
              </span>
              <h4 className="text-xs font-bold text-slate-800">{node.name}</h4>
              <p className="text-[10px] text-slate-500 leading-normal">{node.description}</p>

              {node.status === "running" && (
                <button
                  onClick={() => handleCompleteNode(node.id)}
                  className="w-full mt-2 py-1 bg-slate-900 hover:bg-slate-850 text-white font-bold text-[9px] rounded-lg transition-all flex items-center justify-center gap-0.5"
                >
                  <Check className="h-3 w-3" /> Complete Stage
                </button>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Linked workspaces shortcuts */}
      <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-3.5">
        <span className="text-[10px] font-bold text-slate-400 uppercase block">Linked Ingested Reports</span>
        <div className="flex items-center gap-4">
          <Link to="/documents" className="text-xs text-[#4F46E5] hover:underline font-semibold">
            Ingestion Pipeline
          </Link>
          <span className="text-slate-300">•</span>
          <Link to="/maintenance" className="text-xs text-[#4F46E5] hover:underline font-semibold">
            Maintenance Center
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkflowRunDetailPage;
