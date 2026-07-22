import { useQuery } from "@tanstack/react-query";
import { assetsApi } from "../api/assets";
import { useAssetsStore } from "../store/assets";

export const useAssets = () => {
  const { filters, setFilters, resetFilters, selectedAssetId, selectAsset } = useAssetsStore();

  const assetsQuery = useQuery({
    queryKey: ["assets", filters],
    queryFn: () => assetsApi.getAssetList(filters),
    staleTime: 30000,
  });

  return {
    assets: assetsQuery.data || [],
    isLoading: assetsQuery.isLoading,
    isError: assetsQuery.isError,
    refetch: assetsQuery.refetch,
    filters,
    setFilters,
    resetFilters,
    selectedAssetId,
    selectAsset,
  };
};

export default useAssets;
