import { create } from "../lib/zustand";

export interface InvestigationFilters {
  plantId: string;
  severity: string;
  status: string;
}

export interface InvestigationsState {
  filters: InvestigationFilters;
  selectedInvestigationId: string | null;
  activeStep: number; // 0 to 5 for trigger, timeline, evidence, rca, recs, report
  setFilters: (filters: Partial<InvestigationFilters>) => void;
  selectInvestigation: (id: string | null) => void;
  setActiveStep: (step: number) => void;
  resetFilters: () => void;
}

const defaultFilters: InvestigationFilters = {
  plantId: "",
  severity: "",
  status: "",
};

export const useInvestigationsStore = create<InvestigationsState>((set) => ({
  filters: defaultFilters,
  selectedInvestigationId: null,
  activeStep: 0,

  setFilters: (updated) => set((state) => ({ filters: { ...state.filters, ...updated } })),
  selectInvestigation: (id) => set({ selectedInvestigationId: id, activeStep: 0 }),
  setActiveStep: (activeStep) => set({ activeStep }),
  resetFilters: () => set({ filters: defaultFilters }),
}));

export default useInvestigationsStore;
