import React from "react";
import { useAssetDetail } from "../../hooks/useAssetDetail";
import { useAssetsStore } from "../../store/assets";
import { AssetOverviewSection } from "./sections/AssetOverviewSection";
import { AssetHealthSection } from "./sections/AssetHealthSection";
import { MaintenanceTimelineSection } from "./sections/MaintenanceTimelineSection";
import { AiRecommendationsSection } from "./sections/AiRecommendationsSection";
import { AssetDocumentsSection } from "./sections/AssetDocumentsSection";
import { AssetWorkOrdersSection } from "./sections/AssetWorkOrdersSection";
import { Loader2, ArrowLeft, Settings, ClipboardPlus, LayoutGrid } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface AssetDetailPageProps {
  assetId: string;
  onBack: () => void;
}

export const AssetDetailPage: React.FC<AssetDetailPageProps> = ({ assetId, onBack }) => {
  const { activeTab, setActiveTab } = useAssetsStore();
  const {
    asset,
    health,
    timeline,
    aiRecommendations,
    documents,
    workOrders,
    isLoading,
    isError,
  } = useAssetDetail(assetId);

  if (isLoading) {
    return (
      <div className="h-64 flex items-center justify-center bg-white border border-[#E5E7EB] rounded-2xl max-w-4xl mx-auto">
        <Loader2 className="h-8 w-8 animate-spin text-[#4F46E5]" />
      </div>
    );
  }

  if (isError || !asset) {
    return (
      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 text-center space-y-4 max-w-4xl mx-auto">
        <span className="text-xs font-semibold text-red-500 block">Failed to load asset details</span>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-[#4F46E5] text-white text-xs font-semibold rounded-xl"
        >
          Back to List
        </button>
      </div>
    );
  }

  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "health", label: "Health Score" },
    { key: "maintenance", label: "Maintenance history" },
    { key: "ai", label: "AI Recommendations" },
    { key: "documents", label: "Documents" },
    { key: "work-orders", label: "Work Orders" },
  ];

  const getStatusColor = (status: string) => {
    if (status === "operational") return "text-green-600 bg-green-50 border-green-200";
    if (status === "warning") return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 shadow-sm font-sans space-y-8 max-w-4xl w-full mx-auto">
      <div className="flex items-center justify-between pb-6 border-b border-[#F1F5F9]">
        <button
          onClick={onBack}
          className="text-xs text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Assets List
        </button>

        <div className="flex items-center gap-2">
          <Link
            to="/twin"
            className="px-3.5 py-1.5 bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#4F46E5] font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5"
          >
            <LayoutGrid className="h-3.5 w-3.5" /> View in Twin
          </Link>
          <button className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-850 text-white font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5">
            <ClipboardPlus className="h-3.5 w-3.5" /> Issue Workorder
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Settings className="h-5 w-5 text-slate-400" /> {asset.name}
            </h2>
            <p className="text-xs text-slate-400 mt-1 uppercase">
              ID: {asset.id} • Type: {asset.type} • {asset.location}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Criticality</span>
              <span className="text-xs font-semibold text-slate-700 block capitalize">{asset.criticality}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Status</span>
              <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded-full mt-1 ${getStatusColor(asset.status)}`}>
                {asset.status}
              </span>
            </div>
          </div>

          {/* Render Active Tab Pane */}
          <div className="pt-4 border-t border-slate-100">
            {activeTab === "overview" && <AssetOverviewSection owner={asset.owner} />}
            {activeTab === "health" && <AssetHealthSection health={health} />}
            {activeTab === "maintenance" && <MaintenanceTimelineSection timeline={timeline} />}
            {activeTab === "ai" && <AiRecommendationsSection recommendations={aiRecommendations} />}
            {activeTab === "documents" && <AssetDocumentsSection documents={documents} />}
            {activeTab === "work-orders" && <AssetWorkOrdersSection workOrders={workOrders} />}
          </div>
        </div>

        {/* Tab sliders links panel */}
        <div className="flex flex-col gap-1 border-l border-slate-100 pl-4">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === t.key
                  ? "bg-indigo-50/70 text-[#4F46E5] font-bold"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssetDetailPage;
