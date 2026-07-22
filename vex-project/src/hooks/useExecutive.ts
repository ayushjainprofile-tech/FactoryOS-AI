import { useQuery } from "@tanstack/react-query";
import { executiveApi } from "../api/executive";
import { useExecutiveStore } from "../store/executive";

export const useExecutive = () => {
  const { filters, setFilters, resetFilters } = useExecutiveStore();

  const summaryQuery = useQuery({
    queryKey: ["executiveSummary"],
    queryFn: () => executiveApi.getExecutiveSummary(),
    staleTime: 30000,
  });

  const healthQuery = useQuery({
    queryKey: ["executivePlantHealth", filters],
    queryFn: () => executiveApi.getPlantHealth(filters),
    staleTime: 30000,
  });

  const downtimeQuery = useQuery({
    queryKey: ["executiveDowntime", filters],
    queryFn: () => executiveApi.getDowntime(filters),
    staleTime: 30000,
  });

  const savingsQuery = useQuery({
    queryKey: ["executiveCostSavings", filters],
    queryFn: () => executiveApi.getCostSavings(filters),
    staleTime: 30000,
  });

  const aiQuery = useQuery({
    queryKey: ["executiveAiUsage", filters],
    queryFn: () => executiveApi.getAiUsage(filters),
    staleTime: 30000,
  });

  const complianceQuery = useQuery({
    queryKey: ["executiveComplianceTrend", filters],
    queryFn: () => executiveApi.getCompliance(filters),
    staleTime: 30000,
  });

  const riskQuery = useQuery({
    queryKey: ["executiveRiskScore", filters],
    queryFn: () => executiveApi.getRiskScore(filters),
    staleTime: 30000,
  });

  const roiQuery = useQuery({
    queryKey: ["executiveRoi", filters],
    queryFn: () => executiveApi.getRoi(filters),
    staleTime: 30000,
  });

  return {
    summary: summaryQuery.data,
    plantHealth: healthQuery.data || [],
    downtime: downtimeQuery.data || [],
    costSavings: savingsQuery.data,
    aiUsage: aiQuery.data,
    compliance: complianceQuery.data || [],
    riskScore: riskQuery.data,
    roi: roiQuery.data,
    filters,
    setFilters,
    resetFilters,
    isLoading:
      summaryQuery.isLoading ||
      healthQuery.isLoading ||
      downtimeQuery.isLoading ||
      savingsQuery.isLoading ||
      aiQuery.isLoading ||
      complianceQuery.isLoading ||
      riskQuery.isLoading ||
      roiQuery.isLoading,
  };
};

export default useExecutive;
