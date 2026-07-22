import { useQuery } from "@tanstack/react-query";
import { searchApi } from "../api/search";

export const useSearchSuggestions = (query: string) => {
  const suggestionsQuery = useQuery({
    queryKey: ["searchSuggestions", query],
    queryFn: () => searchApi.getSuggestions(query),
    enabled: query.length > 2,
    staleTime: 60000, // cache suggestions for 1 minute
  });

  return {
    suggestions: suggestionsQuery.data || [],
    isLoading: suggestionsQuery.isLoading,
  };
};

export default useSearchSuggestions;
