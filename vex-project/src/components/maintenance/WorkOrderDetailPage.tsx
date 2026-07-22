import React, { useState } from "react";
import { useWorkOrders } from "../../hooks/useWorkOrders";
import { ArrowLeft, UserPlus, Play, CheckCircle } from "lucide-react";

interface WorkOrderDetailPageProps {
  onBack: () => void;
}

export const WorkOrderDetailPage: React.FC<WorkOrderDetailPageProps> = ({ onBack }) => {
  const { selectedWorkOrder, updateWorkOrder } = useWorkOrders();
  const [assignee, setAssignee] = useState("");

  if (!selectedWorkOrder) {
    return <div className="h-64 flex items-center justify-center font-sans">No work order context loaded.</div>;
  }

  const handleUpdateStatus = async (status: string) => {
    await updateWorkOrder({ id: selectedWorkOrder.id, changes: { status: status as any } });
  };

  const handleUpdateAssignee = async (e: React.FormEvent) => {
    e.preventDefault();
    if (assignee.trim()) {
      await updateWorkOrder({ id: selectedWorkOrder.id, changes: { assignee } });
      setAssignee("");
    }
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-6 shadow-sm font-sans space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
        <button onClick={onBack} className="text-xs text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1.5">
          <ArrowLeft className="h-4 w-4" /> Back to Directory
        </button>

        <div className="flex items-center gap-2">
          {selectedWorkOrder.status !== "in_progress" && selectedWorkOrder.status !== "completed" && (
            <button
              onClick={() => handleUpdateStatus("in_progress")}
              className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-850 text-white font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5"
            >
              <Play className="h-3.5 w-3.5 fill-white" /> Start Work
            </button>
          )}

          {selectedWorkOrder.status !== "completed" && (
            <button
              onClick={() => handleUpdateStatus("completed")}
              className="px-3.5 py-1.5 bg-green-50 hover:bg-green-100 text-green-600 font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5"
            >
              <CheckCircle className="h-3.5 w-3.5" /> Mark Completed
            </button>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-base font-bold text-slate-800">
            {selectedWorkOrder.workOrderNumber}: {selectedWorkOrder.title}
          </h2>
          <p className="text-xs text-slate-400 mt-1">Asset: {selectedWorkOrder.assetName}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Priority</span>
            <span className="text-xs font-semibold text-slate-700 block capitalize">{selectedWorkOrder.priority}</span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Assignee</span>
            <span className="text-xs font-semibold text-slate-700 block">{selectedWorkOrder.assignee}</span>
          </div>
        </div>

        {/* Change assignee form */}
        <form onSubmit={handleUpdateAssignee} className="flex items-center gap-2 max-w-sm">
          <input
            type="text"
            placeholder="Assign technician..."
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            className="flex-1 bg-[#F8FAFC] border border-[#E5E7EB] focus:border-[#4F46E5] text-xs text-[#111827] px-3.5 py-2 rounded-xl focus:outline-none"
          />
          <button
            type="submit"
            className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-[#4F46E5] font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5 border border-[#E5E7EB]"
          >
            <UserPlus className="h-4 w-4" /> Assign
          </button>
        </form>

        {/* Parts requirements */}
        {selectedWorkOrder.parts && selectedWorkOrder.parts.length > 0 && (
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">Required Materials</span>
            <div className="space-y-1.5">
              {selectedWorkOrder.parts.map((part) => (
                <div key={part.id} className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between text-xs font-medium text-slate-700">
                  <span>{part.name}</span>
                  <span>Qty: {part.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkOrderDetailPage;
