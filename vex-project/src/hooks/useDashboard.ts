import { useQuery, useQueryClient } from "@tanstack/react-query";
import { dashboardApi } from "../api/dashboard";

export const useDashboard = (plantId: string = "plant-01") => {
  const queryClient = useQueryClient();

  const prefetchDashboard = async () => {
    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: ["plantHealth", plantId],
        queryFn: () => dashboardApi.getPlantHealth(plantId),
      }),
      queryClient.prefetchQuery({
        queryKey: ["criticalAssets"],
        queryFn: () => dashboardApi.getCriticalAssets(),
      }),
      queryClient.prefetchQuery({
        queryKey: ["activeAlerts"],
        queryFn: () => dashboardApi.getActiveAlerts(),
      }),
      queryClient.prefetchQuery({
        queryKey: ["complianceScore"],
        queryFn: () => dashboardApi.getComplianceScore(),
      }),
    ]);
  };

  return {
    prefetchDashboard,
    invalidateDashboard: () => {
      queryClient.invalidateQueries({ queryKey: ["plantHealth"] });
      queryClient.invalidateQueries({ queryKey: ["criticalAssets"] });
      queryClient.invalidateQueries({ queryKey: ["activeAlerts"] });
      queryClient.invalidateQueries({ queryKey: ["complianceScore"] });
      queryClient.invalidateQueries({ queryKey: ["activeInvestigations"] });
      queryClient.invalidateQueries({ queryKey: ["indexedDocuments"] });
    },
  };
};

export default useDashboard;
