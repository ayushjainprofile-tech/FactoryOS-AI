import { useQuery } from "@tanstack/react-query";
import { complianceApi } from "../api/compliance";
import { useComplianceStore } from "../store/compliance";

export const useCompliance = () => {
  const { filters, activeFramework, setFilters, setActiveFramework, resetFilters } = useComplianceStore();

  const summaryQuery = useQuery({
    queryKey: ["complianceSummary"],
    queryFn: () => complianceApi.getComplianceSummary(),
    staleTime: 30000,
  });

  const frameworkQuery = useQuery({
    queryKey: ["frameworkCompliance", activeFramework],
    queryFn: () => complianceApi.getFrameworkCompliance(activeFramework),
    enabled: !!activeFramework,
  });

  const violationsQuery = useQuery({
    queryKey: ["complianceViolations", filters],
    queryFn: () => complianceApi.getViolations(filters),
    staleTime: 10000,
  });

  const inspectionsQuery = useQuery({
    queryKey: ["complianceInspections", filters],
    queryFn: () => complianceApi.getInspections(filters),
    staleTime: 15000,
  });

  const certificatesQuery = useQuery({
    queryKey: ["complianceCertificates", filters],
    queryFn: () => complianceApi.getCertificates(filters),
    staleTime: 30000,
  });

  const readinessQuery = useQuery({
    queryKey: ["auditReadiness"],
    queryFn: () => complianceApi.getAuditReadiness(),
    staleTime: 30000,
  });

  return {
    summary: summaryQuery.data,
    frameworkDetails: frameworkQuery.data,
    violations: violationsQuery.data || [],
    inspections: inspectionsQuery.data || [],
    certificates: certificatesQuery.data || [],
    readiness: readinessQuery.data,
    activeFramework,
    filters,
    setFilters,
    setActiveFramework,
    resetFilters,
    isLoading:
      summaryQuery.isLoading ||
      frameworkQuery.isLoading ||
      violationsQuery.isLoading ||
      inspectionsQuery.isLoading ||
      certificatesQuery.isLoading ||
      readinessQuery.isLoading,
  };
};

export default useCompliance;
