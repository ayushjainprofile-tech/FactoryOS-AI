import React from "react";
import { useMaintenance } from "../../hooks/useMaintenance";
import { useWorkOrders } from "../../hooks/useWorkOrders";
import { AlertCircle, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const PredictiveAlertsPage: React.FC = () => {
  const { predictiveAlerts, isLoading } = useMaintenance();
  const { createWorkOrder } = useWorkOrders();

  const handleConvert = async (alert: any) => {
    await createWorkOrder({
      workOrderNumber: `WO-${Date.now().toString().slice(-4)}`,
      title: `Preventive Calibration: ${alert.failureMode}`,
      assetId: alert.assetId,
      assetName: alert.assetName,
      status: "scheduled",
      priority: "high",
      dueDate: new Date(Date.now() + alert.timeToFailure * 3600000).toISOString().slice(0, 10),
      assignee: "Unassigned",
      tasks: [],
      parts: [],
    });
    alert.status = "work_order_created";
  };

  if (isLoading) {
    return <div className="h-64 flex items-center justify-center font-sans">Loading predictive alerts...</div>;
  }

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h2 className="text-lg font-bold text-slate-800">Predictive Maintenance Alerts</h2>
        <p className="text-xs text-slate-400 mt-1">AI calculated remaining useful life (RUL) warnings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {predictiveAlerts.map((alert) => (
          <div key={alert.id} className="p-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                <AlertCircle className="h-4 w-4 text-[#4F46E5]" /> {alert.assetName}
              </span>
              <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                Confidence: {alert.confidence}%
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-700 block">Failure Mode: {alert.failureMode}</span>
              <span className="text-[10px] text-red-600 font-bold block">Remaining useful life: {alert.timeToFailure} hrs</span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-50 text-[10px] text-slate-400">
              <span>Downtime avoided: {alert.estimatedDowntimeAvoided} hrs</span>
              <div className="flex items-center gap-2">
                <Link to="/assets" className="text-[#4F46E5] hover:underline font-bold">
                  View Asset
                </Link>
                {alert.status === "new" && (
                  <button
                    onClick={() => handleConvert(alert)}
                    className="px-3 py-1 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-850 flex items-center gap-1"
                  >
                    <Play className="h-3 w-3 fill-white" /> Issue WO
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PredictiveAlertsPage;
