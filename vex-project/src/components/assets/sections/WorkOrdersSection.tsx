import React from "react";
import { WorkOrder } from "../../../types/assets";
import { ClipboardList, User, Calendar } from "lucide-react";

interface WorkOrdersSectionProps {
  workOrders: WorkOrder[];
}

export const WorkOrdersSection: React.FC<WorkOrdersSectionProps> = ({ workOrders }) => {
  if (workOrders.length === 0) {
    return <div className="text-xs text-slate-400 py-6 text-center">No open work orders.</div>;
  }

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
    <div className="space-y-3 font-sans">
      {workOrders.map((wo) => (
        <div key={wo.id} className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl space-y-2.5">
          <div className="flex items-start justify-between gap-3">
            <span className="text-xs font-semibold text-slate-700 leading-normal flex items-start gap-1.5">
              <ClipboardList className="h-4 w-4 text-[#4F46E5] shrink-0 mt-0.5" />
              <span>
                #{wo.workOrderNumber}: {wo.type}
              </span>
            </span>
            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded-full shrink-0 ${getPriorityColor(wo.priority)}`}>
              {wo.priority}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] text-slate-400">
            <span className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" /> Assignee: {wo.assignee}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> Due: {new Date(wo.dueDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkOrdersSection;
