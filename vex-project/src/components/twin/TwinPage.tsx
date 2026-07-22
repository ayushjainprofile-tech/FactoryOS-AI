import React from "react";
import { useTwin } from "../../hooks/useTwin";
import { PlantRenderer } from "./PlantRenderer";
import { EquipmentDetailPanel } from "./EquipmentDetailPanel";
import { ProtectedRoute } from "../auth/ProtectedRoute";
import { LayoutGrid, AlertCircle } from "lucide-react";

export const TwinPage: React.FC = () => {
  const {
    plant,
    isLoading,
    isError,
    refetch,
    selectedEquipmentId,
    activePlantId,
    selectEquipment,
    setPlantId,
  } = useTwin();

  return (
    <ProtectedRoute allowedRoles={["admin", "engineer"]}>
      <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans relative">
        <div className="flex-1 flex flex-col min-w-0 relative h-full">
          {/* Header */}
          <div className="absolute top-6 left-6 z-10 space-y-1">
            <h1 className="text-xl font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
              <LayoutGrid className="h-5 w-5 text-[#4F46E5]" /> Digital Twin Factory Layout
            </h1>
            <p className="text-xs text-slate-500">Live schematic visualizer mapping telemetry and hot incidents.</p>
          </div>

          {/* Plant selector */}
          <div className="absolute top-6 left-80 z-10">
            <select
              value={activePlantId}
              onChange={(e) => setPlantId(e.target.value)}
              className="bg-white border border-[#E5E7EB] text-xs text-slate-700 px-3 py-2 rounded-xl focus:outline-none shadow-xs"
            >
              <option value="plant-01">Gujarat Plant #1</option>
              <option value="plant-02">Maharashtra Plant #2</option>
            </select>
          </div>

          {/* Map canvas */}
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#4F46E5] border-t-transparent" />
            </div>
          ) : isError || !plant ? (
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <AlertCircle className="h-10 w-10 text-red-500" />
              <span className="text-xs font-semibold text-slate-800">Failed to load twin layout schematic</span>
              <button
                onClick={() => refetch()}
                className="px-4 py-2 bg-[#4F46E5] text-white text-xs font-bold rounded-xl"
              >
                Retry
              </button>
            </div>
          ) : (
            <PlantRenderer
              plant={plant}
              selectedEquipmentId={selectedEquipmentId}
              onSelectEquipment={selectEquipment}
            />
          )}
        </div>

        {/* DETAILS DRAWER */}
        {selectedEquipmentId && (
          <EquipmentDetailPanel
            equipmentId={selectedEquipmentId}
            onClose={() => selectEquipment(null)}
          />
        )}
      </div>
    </ProtectedRoute>
  );
};

export default TwinPage;
