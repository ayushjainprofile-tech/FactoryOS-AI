import { create } from "../lib/zustand";

export interface AssetsFilters {
  plantId: string;
  type: string;
  status: string;
  criticality: string;
  search: string;
}

export interface AssetsState {
  filters: AssetsFilters;
  selectedAssetId: string | null;
  activeTab: string;
  setFilters: (filters: Partial<AssetsFilters>) => void;
  resetFilters: () => void;
  selectAsset: (id: string | null) => void;
  setActiveTab: (tab: string) => void;
}

const defaultFilters: AssetsFilters = {
  plantId: "",
  type: "",
  status: "",
  criticality: "",
  search: "",
};

export const useAssetsStore = create<AssetsState>((set) => ({
  filters: defaultFilters,
  selectedAssetId: null,
  activeTab: "overview",

  setFilters: (updated) =>
    set((state) => ({
      filters: { ...state.filters, ...updated },
    })),

  resetFilters: () => set({ filters: defaultFilters }),

  selectAsset: (id) => set({ selectedAssetId: id, activeTab: "overview" }),

  setActiveTab: (activeTab) => set({ activeTab }),
}));

export default useAssetsStore;
