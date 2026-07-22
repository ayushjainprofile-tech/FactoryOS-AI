import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { investigationsApi } from "../api/investigations";
import { useInvestigationsStore } from "../store/investigations";
import { Investigation } from "../types/investigations";

export const useInvestigations = () => {
  const queryClient = useQueryClient();
  const { filters, selectedInvestigationId, selectInvestigation, setFilters, resetFilters } =
    useInvestigationsStore();

  const listQuery = useQuery({
    queryKey: ["investigationsList", filters],
    queryFn: () => investigationsApi.getInvestigations(filters),
    staleTime: 10000,
  });

  const createMutation = useMutation({
    mutationFn: (payload: Partial<Investigation>) => investigationsApi.createInvestigation(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["investigationsList"] });
    },
  });

  return {
    investigations: listQuery.data || [],
    isLoading: listQuery.isLoading,
    isError: listQuery.isError,
    refetch: listQuery.refetch,
    filters,
    setFilters,
    resetFilters,
    selectedInvestigationId,
    selectInvestigation,
    createInvestigation: createMutation.mutateAsync,
  };
};

export default useInvestigations;
