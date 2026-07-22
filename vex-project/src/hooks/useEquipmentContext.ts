import { useQuery } from "@tanstack/react-query";
import { twinApi } from "../api/twin";

export const useEquipmentContext = (equipmentId: string) => {
  const contextQuery = useQuery({
    queryKey: ["equipmentContext", equipmentId],
    queryFn: () => twinApi.getEquipmentContext(equipmentId),
    refetchInterval: 15000,
    staleTime: 5000,
  });

  return {
    context: contextQuery.data,
    isLoading: contextQuery.isLoading,
    isError: contextQuery.isError,
    refetch: contextQuery.refetch,
  };
};

export default useEquipmentContext;
