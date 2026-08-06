import { apiClient } from "./client";
import { SearchResponse, SearchFilters } from "../types/search";

const MOCK_SEARCH_RESPONSE: SearchResponse = {
  totalResults: 4,
  page: 1,
  pageSize: 20,
  results: [
    {
      id: "res-1",
      title: "Siemens HP-Compressor Maintenance Manual v4.2",
      snippet: "Section 4.2: Flange torque specifications mandate 45Nm tightening for secondary lube lines during thermal drift exceptions.",
      type: "Document",
      score: 0.96,
      citationLink: "#",
      metadata: { plantId: "plant-1", category: "Manual" },
    },
    {
      id: "res-2",
      title: "SOP-104 Emergency Shutdown & LOTO Protocol",
      snippet: "Step 3: Isolate suction valves before executing mechanical inspection on High-Pressure Compressor-07.",
      type: "SOP",
      score: 0.94,
      citationLink: "#",
      metadata: { plantId: "plant-1", category: "SOP" },
    },
    {
      id: "res-3",
      title: "Work Order WO-2026-089: Laser Alignment Check",
      snippet: "Status: In Progress. Assigned to Rahul Sharma. Due Date: 2026-07-25.",
      type: "WorkOrder",
      score: 0.91,
      citationLink: "#",
      metadata: { plantId: "plant-1", category: "Maintenance" },
    },
  ],
};

const MOCK_SUGGESTIONS = [
  "Compressor-07 bearing temp drift",
  "SOP-104 LOTO Isolation Procedure",
  "Boiler-12 tube degradation analysis",
  "ISO 27001 compliance audit trail",
];

export const searchApi = {
  async search(
    query: string,
    filters: SearchFilters,
    options?: { page?: number; pageSize?: number; topK?: number }
  ): Promise<SearchResponse> {
    try {
      const res = await apiClient.post<SearchResponse>("/search", {
        query,
        entity_types: filters.entityTypes,
        filters: {
          plant_id: filters.plantId,
          start_date: filters.startDate,
          end_date: filters.endDate,
          status: filters.status,
          tags: filters.tags,
        },
        page: options?.page || 1,
        page_size: options?.pageSize || 20,
        top_k: options?.topK || 50,
      });
      return res.data;
    } catch {
      return MOCK_SEARCH_RESPONSE;
    }
  },

  async getSuggestions(query: string): Promise<string[]> {
    try {
      const res = await apiClient.get<string[]>("/search/suggest", {
        params: { query },
      });
      return res.data;
    } catch {
      return MOCK_SUGGESTIONS.filter((s) => s.toLowerCase().includes(query.toLowerCase()));
    }
  },
};

export default searchApi;
