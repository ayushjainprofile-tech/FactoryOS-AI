import React from "react";
import { useWorkflows } from "../../hooks/useWorkflows";
import { Play, RotateCcw, Activity } from "lucide-react";

interface WorkflowRunsPageProps {
  onSelect: (id: string) => void;
  onNewRun: () => void;
}

export const WorkflowRunsPage: React.FC<WorkflowRunsPageProps> = ({ onSelect, onNewRun }) => {
  const { runs, templates, isLoading, startWorkflowRun } = useWorkflows();

  const handleStartManual = async (templateId: string) => {
    await startWorkflowRun({
      templateId,
      context: { assetId: "asset-01", plantId: "plant-01", initiator: "Operator" },
    });
  };

  const getStatusColor = (status: string) => {
    if (status === "completed") return "text-green-600 bg-green-50 border-green-200";
    if (status === "failed") return "text-red-600 bg-red-50 border-red-200";
    return "text-blue-600 bg-blue-50 border-blue-200";
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Workflow Runs</h2>
          <p className="text-xs text-slate-400 mt-1">Audit statuses of automated diagnostic pipelines</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onNewRun}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl border border-slate-200 transition-all flex items-center gap-1.5 shadow-xs"
          >
            Builder Designer
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="h-32 flex items-center justify-center">Loading runs...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white border border-[#E5E7EB] rounded-[24px] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#F1F5F9] bg-[#F8FAFC]">
                    <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Workflow</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Asset</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Status</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Started</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9]">
                  {runs.map((run) => (
                    <tr
                      key={run.id}
                      onClick={() => onSelect(run.id)}
                      className="hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Activity className="h-4.5 w-4.5 text-slate-400" />
                          <span className="text-xs font-bold text-slate-800">{run.templateName}</span>
                        </div>
                      </td>
                      <td className="p-4 text-xs font-semibold text-slate-700">{run.assetName}</td>
                      <td className="p-4 text-xs">
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded-full ${getStatusColor(run.status)}`}>
                          {run.status}
                        </span>
                      </td>
                      <td className="p-4 text-xs text-slate-500 font-medium">
                        {new Date(run.startedAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-5 shadow-xs space-y-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase block pb-1 border-b border-[#F1F5F9]">
                Trigger Automated Rule Run
              </span>
              <div className="space-y-2">
                {templates.map((tpl) => (
                  <button
                    key={tpl.id}
                    onClick={() => handleStartManual(tpl.id)}
                    className="w-full p-3 bg-slate-50 hover:bg-indigo-50/50 border border-slate-100 hover:border-indigo-200 rounded-xl text-left transition-all flex items-center justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-slate-800 block truncate max-w-[150px]">{tpl.name}</span>
                      <span className="text-[9px] text-slate-400 mt-0.5 block">{tpl.nodes.length} stages</span>
                    </div>
                    <Play className="h-4.5 w-4.5 text-[#4F46E5] fill-[#4F46E5]" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkflowRunsPage;
