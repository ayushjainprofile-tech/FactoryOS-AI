import { useTwinStore } from "../store/twin";
import { useQuery } from "@tanstack/react-query";
import { twinApi } from "../api/twin";

export const useTwin = () => {
  const { selectedEquipmentId, activePlantId, selectEquipment, setPlantId } = useTwinStore();

  const plantLayoutQuery = useQuery({
    queryKey: ["plantLayout", activePlantId],
    queryFn: () => twinApi.getPlantLayout(activePlantId),
  });

  return {
    plant: plantLayoutQuery.data,
    isLoading: plantLayoutQuery.isLoading,
    isError: plantLayoutQuery.isError,
    refetch: plantLayoutQuery.refetch,
    selectedEquipmentId,
    activePlantId,
    selectEquipment,
    setPlantId,
  };
};

export default useTwin;
