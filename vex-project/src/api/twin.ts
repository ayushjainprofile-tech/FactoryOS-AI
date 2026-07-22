import { apiClient } from "./client";
import { PlantLayout, EquipmentContext } from "../types/twin";

export const twinApi = {
  async getPlantLayout(plantId: string): Promise<PlantLayout> {
    const res = await apiClient.get<PlantLayout>(`/twin/plants/${plantId}`);
    return res.data;
  },

  async getEquipmentContext(equipmentId: string): Promise<EquipmentContext> {
    const res = await apiClient.get<EquipmentContext>(`/twin/equipment/${equipmentId}`);
    return res.data;
  },
};

export default twinApi;
