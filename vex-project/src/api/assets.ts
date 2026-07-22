import { apiClient } from "./client";
import {
  Asset,
  AssetHealth,
  MaintenanceEvent,
  AiRecommendation,
  AssetDocument,
  WorkOrder,
} from "../types/assets";

export const assetsApi = {
  async getAssetList(filters?: {
    plantId?: string;
    type?: string;
    status?: string;
    criticality?: string;
    search?: string;
  }): Promise<Asset[]> {
    const res = await apiClient.get<Asset[]>("/assets", {
      params: filters,
    });
    return res.data;
  },

  async getAsset(assetId: string): Promise<Asset> {
    const res = await apiClient.get<Asset>(`/assets/${assetId}`);
    return res.data;
  },

  async getAssetHealth(assetId: string): Promise<AssetHealth> {
    const res = await apiClient.get<AssetHealth>(`/assets/${assetId}/health`);
    return res.data;
  },

  async getMaintenanceTimeline(assetId: string): Promise<MaintenanceEvent[]> {
    const res = await apiClient.get<MaintenanceEvent[]>(`/assets/${assetId}/maintenance`);
    return res.data;
  },

  async getAiRecommendations(assetId: string): Promise<AiRecommendation[]> {
    const res = await apiClient.get<AiRecommendation[]>(`/assets/${assetId}/ai`);
    return res.data;
  },

  async getAssetDocuments(assetId: string): Promise<AssetDocument[]> {
    const res = await apiClient.get<AssetDocument[]>(`/assets/${assetId}/documents`);
    return res.data;
  },

  async getAssetWorkOrders(assetId: string): Promise<WorkOrder[]> {
    const res = await apiClient.get<WorkOrder[]>(`/assets/${assetId}/work-orders`);
    return res.data;
  },
};

export default assetsApi;
