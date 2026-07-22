import React, { useState } from "react";
import { useMaintenanceStore } from "../../store/maintenance";
import { PredictiveAlertsPage } from "./PredictiveAlertsPage";
import { RcaPage } from "./RcaPage";
import { MaintenanceCalendarPage } from "./MaintenanceCalendarPage";
import { WorkOrdersPage } from "./WorkOrdersPage";
import { WorkOrderDetailPage } from "./WorkOrderDetailPage";
import { AiRecommendationsPage } from "./AiRecommendationsPage";
import { TechniciansPage } from "./TechniciansPage";

export const MaintenanceCenterPage: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState("work-orders");
  const { selectedWorkOrderId, selectWorkOrder } = useMaintenanceStore();

  const subTabs = [
    { key: "work-orders", label: "Work Orders" },
    { key: "predictive", label: "Predictive alerts" },
    { key: "rca", label: "Root Cause (RCA)" },
    { key: "calendar", label: "Calendar" },
    { key: "ai", label: "AI Recommendations" },
    { key: "technicians", label: "Technicians" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8 font-sans space-y-8">
      {/* Sub tabs list slider */}
      <div className="flex border-b border-[#E5E7EB] shrink-0 select-none no-scrollbar gap-2 mb-6">
        {subTabs.map((t) => (
          <button
            key={t.key}
            onClick={() => {
              setActiveSubTab(t.key);
              selectWorkOrder(null); // clear work order selection on tab change
            }}
            className={`px-4 py-3 text-[11px] font-semibold tracking-tight border-b-2 whitespace-nowrap transition-all ${
              activeSubTab === t.key
                ? "border-[#4F46E5] text-[#4F46E5]"
                : "border-transparent text-slate-400 hover:text-slate-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div>
        {activeSubTab === "work-orders" && (
          selectedWorkOrderId ? (
            <WorkOrderDetailPage onBack={() => selectWorkOrder(null)} />
          ) : (
            <WorkOrdersPage onSelect={selectWorkOrder} />
          )
        )}
        {activeSubTab === "predictive" && <PredictiveAlertsPage />}
        {activeSubTab === "rca" && <RcaPage />}
        {activeSubTab === "calendar" && <MaintenanceCalendarPage />}
        {activeSubTab === "ai" && <AiRecommendationsPage />}
        {activeSubTab === "technicians" && <TechniciansPage />}
      </div>
    </div>
  );
};

export default MaintenanceCenterPage;
