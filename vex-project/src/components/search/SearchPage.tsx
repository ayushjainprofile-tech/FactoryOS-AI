import React, { useState, useEffect } from "react";
import { useSearchStore } from "../../store/search";
import { useSearch } from "../../hooks/useSearch";
import { useSearchSuggestions } from "../../hooks/useSearchSuggestions";
import { SearchBar } from "./SearchBar";
import { SearchFilters } from "./SearchFilters";
import { SearchResultsList } from "./SearchResultsList";
import { SearchSuggestions } from "./SearchSuggestions";
import { Loader2 } from "lucide-react";
import { ProtectedRoute } from "../auth/ProtectedRoute";

export const SearchPage: React.FC = () => {
  const {
    query,
    filters,
    recentSearches,
    setQuery,
    setFilters,
    addRecentSearch,
    clearHistory,
    resetFilters,
  } = useSearchStore();

  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Debounce query input to avoid spamming the backend API
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 250);
    return () => clearTimeout(handler);
  }, [query]);

  const { suggestions } = useSearchSuggestions(debouncedQuery);
  const { results, total, isLoading, isError, refetch } = useSearch(debouncedQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      addRecentSearch(query);
      refetch();
    }
  };

  const handleSuggestionSelect = (q: string) => {
    setQuery(q);
    addRecentSearch(q);
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#F8FAFC] p-8 font-sans space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-[#111827] tracking-tight">Semantic Hybrid Search</h1>
          <p className="text-xs text-[#6B7280]">
            Search across files, incidents, SOPs, and assets using Vector and GraphRAG. Focus with{" "}
            <kbd className="px-1.5 py-0.5 bg-white border border-[#E5E7EB] rounded text-[10px] font-bold">Ctrl+K</kbd>
          </p>
        </div>

        <SearchBar value={query} onChange={setQuery} onSubmit={handleSearchSubmit} />

        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto items-start">
          <SearchFilters filters={filters} onChange={setFilters} onReset={resetFilters} />

          <div className="flex-1 w-full space-y-4">
            {isLoading ? (
              <div className="h-64 flex items-center justify-center bg-white border border-[#E5E7EB] rounded-[24px]">
                <Loader2 className="h-8 w-8 animate-spin text-[#4F46E5]" />
              </div>
            ) : isError ? (
              <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 text-center space-y-4">
                <span className="text-xs font-semibold text-red-500 block">Failed to retrieve search results.</span>
                <button
                  onClick={() => refetch()}
                  className="px-4 py-2 bg-[#4F46E5] text-white text-xs font-semibold rounded-xl"
                >
                  Retry Search
                </button>
              </div>
            ) : query.length === 0 ? (
              <SearchSuggestions
                suggestions={suggestions}
                recentSearches={recentSearches}
                onSelect={handleSuggestionSelect}
                onClearHistory={clearHistory}
              />
            ) : results.length === 0 ? (
              <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 text-center text-slate-400 text-xs">
                No matching results found in Vector Store or Neo4j.
              </div>
            ) : (
              <SearchResultsList results={results} total={total} />
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default SearchPage;
