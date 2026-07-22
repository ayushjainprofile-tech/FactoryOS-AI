import { create } from "../lib/zustand";
import { SearchFilters, SearchEntityType } from "../types/search";

export interface SearchState {
  query: string;
  filters: SearchFilters;
  recentSearches: string[];
  setQuery: (q: string) => void;
  setFilters: (filters: Partial<SearchFilters>) => void;
  addRecentSearch: (q: string) => void;
  clearHistory: () => void;
  resetFilters: () => void;
}

const defaultFilters: SearchFilters = {
  entityTypes: ["document", "asset", "incident", "sop", "report", "equipment", "engineer"],
  plantId: "",
  startDate: "",
  endDate: "",
  status: "",
  tags: [],
};

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  filters: defaultFilters,
  recentSearches: [],

  setQuery: (query) => set({ query }),

  setFilters: (updated) =>
    set((state) => ({
      filters: { ...state.filters, ...updated },
    })),

  addRecentSearch: (q) => {
    if (!q.trim()) return;
    set((state) => {
      const filtered = state.recentSearches.filter((item) => item !== q);
      return {
        recentSearches: [q, ...filtered].slice(0, 10), // keep last 10 searches
      };
    });
  },

  clearHistory: () => set({ recentSearches: [] }),

  resetFilters: () => set({ filters: defaultFilters }),
}));
export default useSearchStore;
