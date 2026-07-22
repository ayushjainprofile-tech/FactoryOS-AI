import { useQuery } from "@tanstack/react-query";
import { searchApi } from "../api/search";
import { useSearchStore } from "../store/search";

export const useSearch = (debouncedQuery: string) => {
  const { filters, addRecentSearch } = useSearchStore();

  const searchQuery = useQuery({
    queryKey: ["searchResults", { query: debouncedQuery, filters }],
    queryFn: () => searchApi.search(debouncedQuery, filters),
    enabled: debouncedQuery.length > 0,
    staleTime: 5000,
  });

  return {
    results: searchQuery.data?.results || [],
    total: searchQuery.data?.total || 0,
    isLoading: searchQuery.isLoading,
    isError: searchQuery.isError,
    refetch: searchQuery.refetch,
    addRecentSearch,
  };
};

export default useSearch;
