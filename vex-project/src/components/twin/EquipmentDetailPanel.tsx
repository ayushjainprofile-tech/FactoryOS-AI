import React from "react";
import { useEquipmentContext } from "../../hooks/useEquipmentContext";
import { useTwinStore } from "../../store/twin";
import { ManualsSection } from "./sections/ManualsSection";
import { SopsSection } from "./sections/SopsSection";
import { MaintenanceSection } from "./sections/MaintenanceSection";
import { AiAnalysisSection } from "./sections/AiAnalysisSection";
import { SensorsSection } from "./sections/SensorsSection";
import { IncidentsSection } from "./sections/IncidentsSection";
import { Loader2, Settings, AlertOctagon } from "lucide-react";

interface EquipmentDetailPanelProps {
  equipmentId: string;
  onClose: () => void;
}

export const EquipmentDetailPanel: React.FC<EquipmentDetailPanelProps> = ({
  equipmentId,
  onClose,
}) => {
  const { activeTab, setActiveTab } = useTwinStore();
  const { context, isLoading, isError, refetch } = useEquipmentContext(equipmentId);

  if (isLoading) {
    return (
      <div className="bg-white border-l border-[#E5E7EB] w-96 h-full flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#4F46E5]" />
      </div>
    );
  }

  if (isError || !context) {
    return (
      <div className="bg-white border-l border-[#E5E7EB] w-96 h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
        <AlertOctagon className="h-10 w-10 text-red-500" />
        <span className="text-xs font-semibold text-slate-800">Failed to load equipment context details</span>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-[#4F46E5] text-white text-xs font-bold rounded-xl"
        >
          Retry Load
        </button>
      </div>
    );
  }

  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "manuals", label: "Manuals" },
    { key: "sops", label: "SOPs" },
    { key: "maintenance", label: "Maintenance" },
    { key: "ai", label: "AI Analysis" },
    { key: "sensors", label: "Sensors" },
    { key: "incidents", label: "Incidents" },
  ];

  return (
    <div className="bg-white border-l border-[#E5E7EB] w-96 h-full flex flex-col shrink-0 font-sans z-25">
      {/* Header */}
      <div className="p-5 border-b border-[#E5E7EB] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Settings className="h-4.5 w-4.5 text-[#4F46E5]" />
          <div>
            <h3 className="text-sm font-bold text-slate-800">{context.name}</h3>
            <p className="text-[10px] text-slate-400 mt-0.5">Location: {context.location}</p>
          </div>
        </div>
        <button onClick={onClose} className="text-xs text-slate-400 hover:text-slate-700">
          Close
        </button>
      </div>

      {/* Tabs list slider */}
      <div className="flex border-b border-[#E5E7EB] overflow-x-auto shrink-0 select-none no-scrollbar">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`px-4 py-3 text-[11px] font-semibold tracking-tight border-b-2 whitespace-nowrap transition-all ${
              activeTab === t.key
                ? "border-[#4F46E5] text-[#4F46E5]"
                : "border-transparent text-slate-400 hover:text-slate-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div className="flex-1 overflow-y-auto p-5">
        {activeTab === "overview" && (
          <div className="space-y-4">
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
              <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Equipment Type</span>
              <span className="text-xs font-semibold text-slate-700 block capitalize">{context.type}</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
              <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Status Badge</span>
              <span className="inline-block text-[9px] uppercase font-bold text-green-600 bg-green-50 px-2.5 py-0.5 rounded border border-green-200 mt-1">
                {context.status}
              </span>
            </div>
          </div>
        )}

        {activeTab === "manuals" && <ManualsSection manuals={context.manuals} />}
        {activeTab === "sops" && <SopsSection sops={context.sops} />}
        {activeTab === "maintenance" && <MaintenanceSection orders={context.maintenanceHistory} />}
        {activeTab === "ai" && <AiAnalysisSection analysis={context.aiAnalysis} />}
        {activeTab === "sensors" && <SensorsSection sensors={context.sensors} />}
        {activeTab === "incidents" && <IncidentsSection incidents={context.incidents} />}
      </div>
    </div>
  );
};

export default EquipmentDetailPanel;
