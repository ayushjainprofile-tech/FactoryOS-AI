import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import { WorkflowBuilderPage } from "../components/workflows/WorkflowBuilderPage";
import { WorkflowRunsPage } from "../components/workflows/WorkflowRunsPage";
import { WorkflowRunDetailPage } from "../components/workflows/WorkflowRunDetailPage";
import { useWorkflowsStore } from "../store/workflows";

const WorkflowsPage: React.FC = () => {
  const [view, setView] = useState<"runs" | "builder">("runs");
  const { selectedRunId, selectRun } = useWorkflowsStore();

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8 font-sans space-y-8">
      {/* Sub tabs list slider */}
      <div className="flex border-b border-[#E5E7EB] shrink-0 select-none no-scrollbar gap-2 mb-6">
        <button
          onClick={() => {
            setView("runs");
            selectRun(null);
          }}
          className={`px-4 py-3 text-[11px] font-semibold tracking-tight border-b-2 whitespace-nowrap transition-all ${
            view === "runs"
              ? "border-[#4F46E5] text-[#4F46E5]"
              : "border-transparent text-slate-400 hover:text-slate-700"
          }`}
        >
          Workflow Runs
        </button>
        <button
          onClick={() => {
            setView("builder");
            selectRun(null);
          }}
          className={`px-4 py-3 text-[11px] font-semibold tracking-tight border-b-2 whitespace-nowrap transition-all ${
            view === "builder"
              ? "border-[#4F46E5] text-[#4F46E5]"
              : "border-transparent text-slate-400 hover:text-slate-700"
          }`}
        >
          Workflow Builder
        </button>
      </div>

      <div>
        {view === "runs" && (
          selectedRunId ? (
            <WorkflowRunDetailPage onBack={() => selectRun(null)} />
          ) : (
            <WorkflowRunsPage onSelect={selectRun} onNewRun={() => setView("builder")} />
          )
        )}
        {view === "builder" && <WorkflowBuilderPage />}
      </div>
    </div>
  );
};

export const Route = createFileRoute("/workflows")({
  component: () => (
    <ProtectedRoute allowedRoles={["admin", "engineer"]}>
      <WorkflowsPage />
    </ProtectedRoute>
  ),
});
