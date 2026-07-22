import React from "react";
import { useInvestigations } from "../../hooks/useInvestigations";
import { InvestigationDetailPage } from "./InvestigationDetailPage";
import { Search, RotateCcw, AlertCircle, Plus, FileText } from "lucide-react";
import { ProtectedRoute } from "../auth/ProtectedRoute";

export const InvestigationsPage: React.FC = () => {
  const {
    investigations,
    isLoading,
    isError,
    refetch,
    filters,
    setFilters,
    resetFilters,
    selectedInvestigationId,
    selectInvestigation,
    createInvestigation,
  } = useInvestigations();

  const handleCreateNew = async () => {
    const num = Math.floor(1000 + Math.random() * 9000).toString();
    await createInvestigation({
      title: `Critical Incident Analysis: Pump-${num} Heat Spike`,
      alarmRef: `ALARM-${num}`,
      plantId: "plant-01",
      severity: "high",
      status: "new",
      assignee: " Ramesh Kumar",
    });
  };

  const getSeverityBadgeColor = (sev: string) => {
    if (sev === "critical" || sev === "high") {
      return "text-red-600 bg-red-50 border-red-200";
    }
    if (sev === "medium") {
      return "text-yellow-600 bg-yellow-50 border-yellow-200";
    }
    return "text-blue-600 bg-blue-50 border-blue-200";
  };

  return (
    <ProtectedRoute allowedRoles={["admin", "engineer"]}>
      <div className="min-h-screen bg-[#F8FAFC] p-8 font-sans space-y-8">
        {selectedInvestigationId ? (
          <InvestigationDetailPage onBack={() => selectInvestigation(null)} />
        ) : (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-[#111827] tracking-tight">AI Incident Investigations</h1>
                <p className="text-xs text-[#6B7280]">
                  ICAM timeline analysis and root cause checks
                </p>
              </div>

              <button
                onClick={handleCreateNew}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-850 text-white font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5 shadow-xs"
              >
                <Plus className="h-4 w-4" /> Start Investigation
              </button>
            </div>

            {/* Filters dashboard panel */}
            <div className="bg-white border border-[#E5E7EB] p-5 rounded-2xl shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <select
                    value={filters.plantId}
                    onChange={(e) => setFilters({ plantId: e.target.value })}
                    className="bg-[#F8FAFC] border border-[#E5E7EB] text-xs text-slate-700 px-3 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 w-full sm:w-40"
                  >
                    <option value="">All Plants</option>
                    <option value="plant-01">Gujarat Plant #1</option>
                    <option value="plant-02">Maharashtra Plant #2</option>
                  </select>

                  <select
                    value={filters.severity}
                    onChange={(e) => setFilters({ severity: e.target.value })}
                    className="bg-[#F8FAFC] border border-[#E5E7EB] text-xs text-slate-700 px-3 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 w-full sm:w-40"
                  >
                    <option value="">All Severities</option>
                    <option value="critical">Critical</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>

                  <select
                    value={filters.status}
                    onChange={(e) => setFilters({ status: e.target.value })}
                    className="bg-[#F8FAFC] border border-[#E5E7EB] text-xs text-slate-700 px-3 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 w-full sm:w-40"
                  >
                    <option value="">All Statuses</option>
                    <option value="new">New</option>
                    <option value="in_progress">In Progress</option>
                    <option value="in_review">In Review</option>
                    <option value="finalized">Finalized</option>
                  </select>

                  <button
                    onClick={resetFilters}
                    className="p-2.5 text-slate-400 hover:text-slate-700 hover:bg-slate-50 border border-[#E5E7EB] rounded-xl transition-all"
                    title="Reset Filters"
                  >
                    <RotateCcw className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* List results */}
            {isLoading ? (
              <div className="h-64 flex items-center justify-center bg-white border border-[#E5E7EB] rounded-[24px]">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#4F46E5] border-t-transparent" />
              </div>
            ) : isError ? (
              <div className="h-64 flex flex-col items-center justify-center bg-white border border-[#E5E7EB] rounded-[24px] text-center p-6 space-y-4">
                <AlertCircle className="h-10 w-10 text-red-500" />
                <span className="text-xs font-semibold text-slate-800">Failed to load incident investigations</span>
                <button
                  onClick={() => refetch()}
                  className="px-4 py-2 bg-[#4F46E5] text-white text-xs font-bold rounded-xl"
                >
                  Retry List
                </button>
              </div>
            ) : (
              <div className="bg-white border border-[#E5E7EB] rounded-[24px] overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#F1F5F9] bg-[#F8FAFC]">
                        <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Investigation</th>
                        <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Trigger Alarm</th>
                        <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Plant</th>
                        <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Severity</th>
                        <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Status</th>
                        <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Assignee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F1F5F9]">
                      {investigations.map((inv) => (
                        <tr
                          key={inv.id}
                          onClick={() => selectInvestigation(inv.id)}
                          className="hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                        >
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4.5 w-4.5 text-slate-400" />
                              <span className="text-xs font-bold text-slate-800">{inv.title}</span>
                            </div>
                          </td>
                          <td className="p-4 text-xs font-semibold text-slate-700">{inv.alarmRef}</td>
                          <td className="p-4 text-xs text-slate-600">{inv.plantId}</td>
                          <td className="p-4">
                            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded-full ${getSeverityBadgeColor(inv.severity)}`}>
                              {inv.severity}
                            </span>
                          </td>
                          <td className="p-4 text-xs">
                            <span className="text-[10px] font-bold uppercase text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                              {inv.status}
                            </span>
                          </td>
                          <td className="p-4 text-xs text-slate-500 font-semibold">{inv.assignee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default InvestigationsPage;
