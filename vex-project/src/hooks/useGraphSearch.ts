import { useQuery } from "@tanstack/react-query";
import { graphApi } from "../api/graph";

export const useGraphSearch = (query: string) => {
  const graphSearchQuery = useQuery({
    queryKey: ["graphSearch", query],
    queryFn: () => graphApi.searchGraph(query),
    enabled: query.length > 2,
    staleTime: 30000,
  });

  return {
    results: graphSearchQuery.data || [],
    isLoading: graphSearchQuery.isLoading,
    isError: graphSearchQuery.isError,
  };
};

export default useGraphSearch;
