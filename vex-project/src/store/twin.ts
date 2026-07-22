import { create } from "../lib/zustand";

export interface TwinState {
  selectedEquipmentId: string | null;
  activePlantId: string;
  activeTab: string;
  selectEquipment: (id: string | null) => void;
  setPlantId: (plantId: string) => void;
  setActiveTab: (tab: string) => void;
}

export const useTwinStore = create<TwinState>((set) => ({
  selectedEquipmentId: null,
  activePlantId: "plant-01",
  activeTab: "overview",

  selectEquipment: (id) => set({ selectedEquipmentId: id, activeTab: "overview" }),
  setPlantId: (activePlantId) => set({ activePlantId, selectedEquipmentId: null }),
  setActiveTab: (activeTab) => set({ activeTab }),
}));

export default useTwinStore;
