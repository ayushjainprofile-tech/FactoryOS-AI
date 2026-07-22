import React from "react";
import { useWorkOrders } from "../../hooks/useWorkOrders";
import { ClipboardList, Plus } from "lucide-react";

interface WorkOrdersPageProps {
  onSelect: (id: string) => void;
}

export const WorkOrdersPage: React.FC<WorkOrdersPageProps> = ({ onSelect }) => {
  const { workOrders, isLoading, createWorkOrder } = useWorkOrders();

  const handleCreateNew = async () => {
    const num = Math.floor(1000 + Math.random() * 9000).toString();
    await createWorkOrder({
      workOrderNumber: `WO-${num}`,
      title: `Preventive Maintenance Checkup`,
      assetId: "asset-01",
      assetName: "Pump-21",
      status: "open",
      priority: "medium",
      dueDate: new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10),
      assignee: "Ramesh Kumar",
      tasks: [],
      parts: [],
    });
  };

  const getPriorityColor = (priority: string) => {
    if (priority === "critical" || priority === "high") {
      return "text-red-600 bg-red-50 border-red-200";
    }
    if (priority === "medium") {
      return "text-yellow-600 bg-yellow-50 border-yellow-200";
    }
    return "text-blue-600 bg-blue-50 border-blue-200";
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Work Orders Directory</h2>
          <p className="text-xs text-slate-400 mt-1">SOP checklists, parts logs and technician assignments</p>
        </div>

        <button
          onClick={handleCreateNew}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-850 text-white font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5"
        >
          <Plus className="h-4 w-4" /> Create Work Order
        </button>
      </div>

      {isLoading ? (
        <div className="h-32 flex items-center justify-center">Loading work orders...</div>
      ) : (
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#F1F5F9] bg-[#F8FAFC]">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">WO Number</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Title</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Asset</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Status</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Priority</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Due Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                {workOrders.map((wo) => (
                  <tr
                    key={wo.id}
                    onClick={() => onSelect(wo.id)}
                    className="hover:bg-[#F8FAFC] transition-all cursor-pointer"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <ClipboardList className="h-4 w-4 text-slate-400" />
                        <span className="text-xs font-bold text-slate-800">{wo.workOrderNumber}</span>
                      </div>
                    </td>
                    <td className="p-4 text-xs font-semibold text-slate-700">{wo.title}</td>
                    <td className="p-4 text-xs text-slate-600">{wo.assetName}</td>
                    <td className="p-4 text-xs">
                      <span className="text-[10px] font-bold uppercase text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {wo.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded-full ${getPriorityColor(wo.priority)}`}>
                        {wo.priority}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-slate-500 font-medium">
                      {new Date(wo.dueDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkOrdersPage;
