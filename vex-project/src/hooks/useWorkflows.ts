import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { workflowsApi } from "../api/workflows";
import { useWorkflowsStore } from "../store/workflows";

export const useWorkflows = () => {
  const queryClient = useQueryClient();
  const { filters, selectedRunId, selectRun, setFilters, resetFilters } = useWorkflowsStore();

  const templatesQuery = useQuery({
    queryKey: ["workflowTemplates"],
    queryFn: () => workflowsApi.getWorkflows(),
    staleTime: 30000,
  });

  const runsQuery = useQuery({
    queryKey: ["workflowRuns", filters],
    queryFn: () => workflowsApi.getWorkflowRuns(filters),
    staleTime: 10000,
  });

  const runDetailQuery = useQuery({
    queryKey: ["workflowRunDetail", selectedRunId],
    queryFn: () => workflowsApi.getWorkflowRun(selectedRunId || ""),
    enabled: !!selectedRunId,
  });

  const createTemplateMutation = useMutation({
    mutationFn: (template: any) => workflowsApi.createWorkflow(template),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workflowTemplates"] });
    },
  });

  const startRunMutation = useMutation({
    mutationFn: ({ templateId, context }: { templateId: string; context?: any }) =>
      workflowsApi.startWorkflowRun(templateId, context),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workflowRuns"] });
    },
  });

  const completeNodeMutation = useMutation({
    mutationFn: ({ nodeId, payload }: { nodeId: string; payload?: any }) =>
      workflowsApi.completeWorkflowNode(selectedRunId || "", nodeId, payload),
    onSuccess: (data) => {
      queryClient.setQueryData(["workflowRunDetail", selectedRunId], data);
      queryClient.invalidateQueries({ queryKey: ["workflowRuns"] });
    },
  });

  return {
    templates: templatesQuery.data || [],
    runs: runsQuery.data || [],
    runDetail: runDetailQuery.data,
    selectedRunId,
    selectRun,
    filters,
    setFilters,
    resetFilters,
    isLoading: templatesQuery.isLoading || runsQuery.isLoading || (!!selectedRunId && runDetailQuery.isLoading),
    createWorkflowTemplate: createTemplateMutation.mutateAsync,
    startWorkflowRun: startRunMutation.mutateAsync,
    completeWorkflowNode: completeNodeMutation.mutateAsync,
  };
};

export default useWorkflows;
