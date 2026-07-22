import React from "react";
import { useCompliance } from "../../hooks/useCompliance";
import { ClipboardCheck, Calendar, User } from "lucide-react";

export const InspectionsPage: React.FC = () => {
  const { inspections, isLoading } = useCompliance();

  const getStatusColor = (status: string) => {
    if (status === "overdue") return "text-red-600 bg-red-50 border-red-200";
    if (status === "due_soon") return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-green-600 bg-green-50 border-green-200";
  };

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h2 className="text-lg font-bold text-slate-800">Inspection Schedule</h2>
        <p className="text-xs text-slate-400 mt-1">Upcoming and overdue calibration and safety inspection tickets</p>
      </div>

      {isLoading ? (
        <div className="h-32 flex items-center justify-center">Loading inspections...</div>
      ) : (
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#F1F5F9] bg-[#F8FAFC]">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Inspection Type</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Asset</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Plant Scope</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Due Date</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Status</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Inspector</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                {inspections.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-xs text-slate-400">
                      No scheduled inspections found.
                    </td>
                  </tr>
                ) : (
                  inspections.map((ins) => (
                    <tr key={ins.id} className="hover:bg-[#F8FAFC] transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <ClipboardCheck className="h-4 w-4 text-slate-400" />
                          <span className="text-xs font-bold text-slate-800">{ins.type}</span>
                        </div>
                      </td>
                      <td className="p-4 text-xs font-semibold text-slate-700">{ins.assetName}</td>
                      <td className="p-4 text-xs text-slate-600">{ins.plantId}</td>
                      <td className="p-4 text-xs text-slate-500 font-medium">
                        {new Date(ins.dueDate).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded-full ${getStatusColor(ins.status)}`}>
                          {ins.status}
                        </span>
                      </td>
                      <td className="p-4 text-xs text-slate-500 font-semibold">{ins.assignee}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default InspectionsPage;
