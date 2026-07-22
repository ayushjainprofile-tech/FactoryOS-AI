import React from "react";
import { AgentStep } from "../../types/chat";
import { GitCommit, Activity, Terminal } from "lucide-react";

interface AgentTracePanelProps {
  steps: AgentStep[];
}

export const AgentTracePanel: React.FC<AgentTracePanelProps> = ({ steps }) => {
  if (steps.length === 0) return null;

  return (
    <div className="bg-slate-900 border-l border-slate-800 w-80 h-full hidden lg:flex flex-col flex-shrink-0 text-slate-300 font-sans">
      <div className="p-4 border-b border-slate-800 flex items-center gap-2">
        <Activity className="h-4.5 w-4.5 text-indigo-400" />
        <h3 className="text-sm font-bold text-white">LangGraph Execution Trace</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {steps.map((step, idx) => (
          <div key={idx} className="relative pl-6 pb-2 border-l border-slate-800 last:border-l-0">
            {/* Step indicator node icon */}
            <span className="absolute -left-1.5 top-0.5 h-3.5 w-3.5 rounded-full bg-slate-900 border border-indigo-500 flex items-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            </span>

            <div>
              <div className="text-xs font-semibold text-white uppercase tracking-wider">{step.nodeName}</div>
              <div className="text-[10px] text-slate-500">
                {new Date(step.timestamp).toLocaleTimeString()}
              </div>

              {step.toolUsed && (
                <div className="mt-1.5 flex items-center gap-1.5 px-2 py-1 bg-slate-950 border border-slate-800 rounded-md text-[10px] text-indigo-300 font-mono">
                  <Terminal className="h-3 w-3 text-indigo-400" />
                  <span>Tool: {step.toolUsed}</span>
                </div>
              )}

              {step.decision && (
                <p className="mt-1 text-[10px] text-slate-400">
                  Decision: {step.decision}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentTracePanel;
