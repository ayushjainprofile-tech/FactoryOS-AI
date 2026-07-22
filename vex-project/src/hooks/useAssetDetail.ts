import { useQuery } from "@tanstack/react-query";
import { assetsApi } from "../api/assets";

export const useAssetDetail = (assetId: string) => {
  const assetQuery = useQuery({
    queryKey: ["asset", assetId],
    queryFn: () => assetsApi.getAsset(assetId),
    enabled: !!assetId,
  });

  const healthQuery = useQuery({
    queryKey: ["assetHealth", assetId],
    queryFn: () => assetsApi.getAssetHealth(assetId),
    enabled: !!assetId,
  });

  const timelineQuery = useQuery({
    queryKey: ["assetTimeline", assetId],
    queryFn: () => assetsApi.getMaintenanceTimeline(assetId),
    enabled: !!assetId,
  });

  const aiQuery = useQuery({
    queryKey: ["assetAi", assetId],
    queryFn: () => assetsApi.getAiRecommendations(assetId),
    enabled: !!assetId,
  });

  const documentsQuery = useQuery({
    queryKey: ["assetDocuments", assetId],
    queryFn: () => assetsApi.getAssetDocuments(assetId),
    enabled: !!assetId,
  });

  const workOrdersQuery = useQuery({
    queryKey: ["assetWorkOrders", assetId],
    queryFn: () => assetsApi.getAssetWorkOrders(assetId),
    enabled: !!assetId,
  });

  return {
    asset: assetQuery.data,
    health: healthQuery.data,
    timeline: timelineQuery.data || [],
    aiRecommendations: aiQuery.data || [],
    documents: documentsQuery.data || [],
    workOrders: workOrdersQuery.data || [],
    isLoading:
      assetQuery.isLoading ||
      healthQuery.isLoading ||
      timelineQuery.isLoading ||
      aiQuery.isLoading ||
      documentsQuery.isLoading ||
      workOrdersQuery.isLoading,
    isError: assetQuery.isError,
  };
};

export default useAssetDetail;
