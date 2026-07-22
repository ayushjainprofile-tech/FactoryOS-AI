import { create } from "../lib/zustand";

export interface MaintenanceFilters {
  plantId: string;
  status: string;
  priority: string;
}

export interface MaintenanceState {
  filters: MaintenanceFilters;
  selectedWorkOrderId: string | null;
  selectedRcaId: string | null;
  calendarRange: { start: string; end: string } | null;
  setFilters: (filters: Partial<MaintenanceFilters>) => void;
  selectWorkOrder: (id: string | null) => void;
  selectRca: (id: string | null) => void;
  setCalendarRange: (range: { start: string; end: string } | null) => void;
  resetFilters: () => void;
}

const defaultFilters: MaintenanceFilters = {
  plantId: "",
  status: "",
  priority: "",
};

export const useMaintenanceStore = create<MaintenanceState>((set) => ({
  filters: defaultFilters,
  selectedWorkOrderId: null,
  selectedRcaId: null,
  calendarRange: null,

  setFilters: (updated) => set((state) => ({ filters: { ...state.filters, ...updated } })),
  selectWorkOrder: (id) => set({ selectedWorkOrderId: id }),
  selectRca: (id) => set({ selectedRcaId: id }),
  setCalendarRange: (calendarRange) => set({ calendarRange }),
  resetFilters: () => set({ filters: defaultFilters }),
}));

export default useMaintenanceStore;
