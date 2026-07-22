import { create } from "../lib/zustand";

export interface ComplianceFilters {
  framework: string;
  plantId: string;
  severity: string;
  status: string;
}

export interface ComplianceState {
  filters: ComplianceFilters;
  activeFramework: string;
  setFilters: (filters: Partial<ComplianceFilters>) => void;
  setActiveFramework: (framework: string) => void;
  resetFilters: () => void;
}

const defaultFilters: ComplianceFilters = {
  framework: "",
  plantId: "",
  severity: "",
  status: "",
};

export const useComplianceStore = create<ComplianceState>((set) => ({
  filters: defaultFilters,
  activeFramework: "ISO-27001",

  setFilters: (updated) => set((state) => ({ filters: { ...state.filters, ...updated } })),
  setActiveFramework: (activeFramework) => set({ activeFramework }),
  resetFilters: () => set({ filters: defaultFilters }),
}));

export default useComplianceStore;
