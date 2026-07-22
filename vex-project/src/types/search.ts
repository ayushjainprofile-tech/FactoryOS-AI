export type SearchEntityType =
  | "document"
  | "asset"
  | "incident"
  | "sop"
  | "report"
  | "equipment"
  | "engineer";

export interface SearchFilters {
  entityTypes: SearchEntityType[];
  plantId?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  tags?: string[];
}

export interface SearchQuery {
  query: string;
  filters: SearchFilters;
  page?: number;
  pageSize?: number;
}

export interface SearchResultItem {
  entityType: SearchEntityType;
  id: string;
  title: string;
  snippet: string;
  score: number;
  sourceReferences?: string[];
  link: string;
  plantId?: string;
  date?: string;
  owner?: string;
}

export interface SearchResponse {
  results: SearchResultItem[];
  total: number;
  page: number;
  pageSize: number;
}
