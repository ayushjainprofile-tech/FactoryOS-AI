import { useQuery } from "@tanstack/react-query";
import { maintenanceApi } from "../api/maintenance";
import { useMaintenanceStore } from "../store/maintenance";

export const useMaintenance = () => {
  const { filters, selectedRcaId, selectRca, resetFilters } = useMaintenanceStore();

  const predictiveQuery = useQuery({
    queryKey: ["predictiveAlerts", filters],
    queryFn: () => maintenanceApi.getPredictiveAlerts(filters),
    staleTime: 10000,
  });

  const rcaQuery = useQuery({
    queryKey: ["rcaSummaries", filters],
    queryFn: () => maintenanceApi.getRcaSummaries(filters),
    staleTime: 30000,
  });

  const techniciansQuery = useQuery({
    queryKey: ["technicians", filters],
    queryFn: () => maintenanceApi.getTechnicians(filters),
    staleTime: 30000,
  });

  const recommendationsQuery = useQuery({
    queryKey: ["maintenanceRecommendations", filters],
    queryFn: () => maintenanceApi.getAiRecommendations(filters),
    staleTime: 30000,
  });

  return {
    predictiveAlerts: predictiveQuery.data || [],
    rcaSummaries: rcaQuery.data || [],
    technicians: techniciansQuery.data || [],
    recommendations: recommendationsQuery.data || [],
    selectedRcaId,
    selectRca,
    filters,
    resetFilters,
    isLoading:
      predictiveQuery.isLoading ||
      rcaQuery.isLoading ||
      techniciansQuery.isLoading ||
      recommendationsQuery.isLoading,
  };
};

export default useMaintenance;
