import { create } from "../lib/zustand";

export interface WorkflowFilters {
  plantId: string;
  status: string;
}

export interface WorkflowsState {
  filters: WorkflowFilters;
  selectedRunId: string | null;
  setFilters: (filters: Partial<WorkflowFilters>) => void;
  selectRun: (id: string | null) => void;
  resetFilters: () => void;
}

const defaultFilters: WorkflowFilters = {
  plantId: "",
  status: "",
};

export const useWorkflowsStore = create<WorkflowsState>((set) => ({
  filters: defaultFilters,
  selectedRunId: null,

  setFilters: (updated) => set((state) => ({ filters: { ...state.filters, ...updated } })),
  selectRun: (id) => set({ selectedRunId: id }),
  resetFilters: () => set({ filters: defaultFilters }),
}));

export default useWorkflowsStore;
