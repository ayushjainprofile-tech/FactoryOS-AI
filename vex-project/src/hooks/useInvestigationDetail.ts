import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { investigationsApi } from "../api/investigations";
import { useInvestigationsStore } from "../store/investigations";
import { InvestigationDetail } from "../types/investigations";

export const useInvestigationDetail = () => {
  const queryClient = useQueryClient();
  const { selectedInvestigationId, activeStep, setActiveStep } = useInvestigationsStore();

  const detailQuery = useQuery({
    queryKey: ["investigationDetail", selectedInvestigationId],
    queryFn: () => investigationsApi.getInvestigation(selectedInvestigationId || ""),
    enabled: !!selectedInvestigationId,
  });

  const updateMutation = useMutation({
    mutationFn: (changes: Partial<InvestigationDetail>) =>
      investigationsApi.updateInvestigation(selectedInvestigationId || "", changes),
    onSuccess: (data) => {
      queryClient.setQueryData(["investigationDetail", selectedInvestigationId], data);
      queryClient.invalidateQueries({ queryKey: ["investigationsList"] });
    },
  });

  const aiTimelineMutation = useMutation({
    mutationFn: (options?: any) => investigationsApi.runAiTimeline(selectedInvestigationId || "", options),
    onSuccess: (data) => {
      queryClient.setQueryData(["investigationDetail", selectedInvestigationId], data);
    },
  });

  const aiRcaMutation = useMutation({
    mutationFn: (options?: any) => investigationsApi.runAiRca(selectedInvestigationId || "", options),
    onSuccess: (data) => {
      queryClient.setQueryData(["investigationDetail", selectedInvestigationId], data);
    },
  });

  const aiRecommendationsMutation = useMutation({
    mutationFn: (options?: any) =>
      investigationsApi.runAiRecommendations(selectedInvestigationId || "", options),
    onSuccess: (data) => {
      queryClient.setQueryData(["investigationDetail", selectedInvestigationId], data);
    },
  });

  const reportMutation = useMutation({
    mutationFn: (options?: any) => investigationsApi.generateReport(selectedInvestigationId || "", options),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["investigationDetail", selectedInvestigationId] });
    },
  });

  return {
    investigation: detailQuery.data,
    isLoading: detailQuery.isLoading,
    isError: detailQuery.isError,
    activeStep,
    setActiveStep,
    updateInvestigation: updateMutation.mutateAsync,
    runAiTimeline: aiTimelineMutation.mutateAsync,
    runAiRca: aiRcaMutation.mutateAsync,
    runAiRecommendations: aiRecommendationsMutation.mutateAsync,
    generateReport: reportMutation.mutateAsync,
  };
};

export default useInvestigationDetail;
