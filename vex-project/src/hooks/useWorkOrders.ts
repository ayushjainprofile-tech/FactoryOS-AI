import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { maintenanceApi } from "../api/maintenance";
import { useMaintenanceStore } from "../store/maintenance";
import { WorkOrder } from "../types/maintenance";

export const useWorkOrders = () => {
  const queryClient = useQueryClient();
  const { filters, selectedWorkOrderId, selectWorkOrder } = useMaintenanceStore();

  const workOrdersQuery = useQuery({
    queryKey: ["workOrders", filters],
    queryFn: () => maintenanceApi.getWorkOrders(filters),
    staleTime: 10000,
  });

  const singleWorkOrderQuery = useQuery({
    queryKey: ["workOrder", selectedWorkOrderId],
    queryFn: () => maintenanceApi.getWorkOrder(selectedWorkOrderId || ""),
    enabled: !!selectedWorkOrderId,
  });

  const createMutation = useMutation({
    mutationFn: (payload: Partial<WorkOrder>) => maintenanceApi.createWorkOrder(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workOrders"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, changes }: { id: string; changes: Partial<WorkOrder> }) =>
      maintenanceApi.updateWorkOrder(id, changes),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workOrders"] });
      queryClient.invalidateQueries({ queryKey: ["workOrder", selectedWorkOrderId] });
    },
  });

  return {
    workOrders: workOrdersQuery.data || [],
    selectedWorkOrder: singleWorkOrderQuery.data,
    selectedWorkOrderId,
    selectWorkOrder,
    isLoading: workOrdersQuery.isLoading || (!!selectedWorkOrderId && singleWorkOrderQuery.isLoading),
    createWorkOrder: createMutation.mutateAsync,
    updateWorkOrder: updateMutation.mutateAsync,
  };
};

export default useWorkOrders;
