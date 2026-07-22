import { create } from "../lib/zustand";

export interface ExecutiveFilters {
  timeRange: "30" | "90" | "180" | "ytd";
  plantId: string;
}

export interface ExecutiveState {
  filters: ExecutiveFilters;
  setFilters: (filters: Partial<ExecutiveFilters>) => void;
  resetFilters: () => void;
}

const defaultFilters: ExecutiveFilters = {
  timeRange: "90",
  plantId: "",
};

export const useExecutiveStore = create<ExecutiveState>((set) => ({
  filters: defaultFilters,

  setFilters: (updated) => set((state) => ({ filters: { ...state.filters, ...updated } })),
  resetFilters: () => set({ filters: defaultFilters }),
}));

export default useExecutiveStore;
