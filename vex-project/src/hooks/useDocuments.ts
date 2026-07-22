import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { documentsApi } from "../api/documents";

export const useDocuments = (filters?: {
  search?: string;
  type?: string;
  status?: string;
  plantId?: string;
}) => {
  const queryClient = useQueryClient();

  const documentsQuery = useQuery({
    queryKey: ["documents", filters],
    queryFn: () => documentsApi.list(filters),
    staleTime: 30000,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => documentsApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["documents"] });
    },
  });

  const regenerateMutation = useMutation({
    mutationFn: (id: string) => documentsApi.regenerate(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["documents"] });
    },
  });

  return {
    documents: documentsQuery.data || [],
    isLoading: documentsQuery.isLoading,
    isError: documentsQuery.isError,
    refetch: documentsQuery.refetch,
    deleteDocument: deleteMutation.mutateAsync,
    regeneratePipeline: regenerateMutation.mutateAsync,
  };
};

export default useDocuments;
