import { apiClient } from "./client";
import { SearchResponse, SearchFilters } from "../types/search";

export const searchApi = {
  async search(
    query: string,
    filters: SearchFilters,
    options?: { page?: number; pageSize?: number; topK?: number }
  ): Promise<SearchResponse> {
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
  },

  async getSuggestions(query: string): Promise<string[]> {
    const res = await apiClient.get<string[]>("/search/suggest", {
      params: { query },
    });
    return res.data;
  },
};

export default searchApi;
