import React from "react";
import { useAssets } from "../../hooks/useAssets";
import { AssetList } from "./AssetList";
import { AssetDetailPage } from "./AssetDetailPage";
import { Search, RotateCcw, AlertCircle } from "lucide-react";
import { ProtectedRoute } from "../auth/ProtectedRoute";

export const AssetsPage: React.FC = () => {
  const {
    assets,
    isLoading,
    isError,
    refetch,
    filters,
    setFilters,
    resetFilters,
    selectedAssetId,
    selectAsset,
  } = useAssets();

  return (
    <ProtectedRoute allowedRoles={["admin", "engineer"]}>
      <div className="min-h-screen bg-[#F8FAFC] p-8 font-sans space-y-8">
        {selectedAssetId ? (
          <AssetDetailPage assetId={selectedAssetId} onBack={() => selectAsset(null)} />
        ) : (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-[#111827] tracking-tight">Asset Inventory</h1>
                <p className="text-xs text-[#6B7280]">
                  Manage structural equipment, mechanical pumps, and AI health indexes.
                </p>
              </div>
            </div>

            {/* Filters dashboard panel */}
            <div className="bg-white border border-[#E5E7EB] p-5 rounded-2xl shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search equipment by name or tag..."
                    value={filters.search}
                    onChange={(e) => setFilters({ search: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] focus:border-[#4F46E5] text-xs text-[#111827] pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10"
                  />
                </div>

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
                    value={filters.type}
                    onChange={(e) => setFilters({ type: e.target.value })}
                    className="bg-[#F8FAFC] border border-[#E5E7EB] text-xs text-slate-700 px-3 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 w-full sm:w-40"
                  >
                    <option value="">All Types</option>
                    <option value="pump">Pump</option>
                    <option value="compressor">Compressor</option>
                    <option value="boiler">Boiler</option>
                  </select>

                  <select
                    value={filters.status}
                    onChange={(e) => setFilters({ status: e.target.value })}
                    className="bg-[#F8FAFC] border border-[#E5E7EB] text-xs text-slate-700 px-3 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 w-full sm:w-40"
                  >
                    <option value="">All Statuses</option>
                    <option value="operational">Operational</option>
                    <option value="warning">Warning</option>
                    <option value="critical">Critical</option>
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
                <span className="text-xs font-semibold text-slate-800">Failed to load asset inventory</span>
                <button
                  onClick={() => refetch()}
                  className="px-4 py-2 bg-[#4F46E5] text-white text-xs font-bold rounded-xl"
                >
                  Retry List
                </button>
              </div>
            ) : (
              <AssetList assets={assets} onSelect={selectAsset} />
            )}
          </>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default AssetsPage;
