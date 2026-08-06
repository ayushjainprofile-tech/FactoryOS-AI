import { apiClient } from "./client";
import { PlantLayout, EquipmentContext } from "../types/twin";

const MOCK_PLANT_LAYOUT: PlantLayout = {
  id: "plant-1",
  name: "Gujarat Plant #1 — Industrial Complex",
  zones: [
    { id: "z1", name: "High-Pressure Bay A", polygon: "50,50 350,50 350,250 50,250" },
    { id: "z2", name: "Boiler & Steam Complex B", polygon: "380,50 680,50 680,250 380,250" },
    { id: "z3", name: "Powerhouse & Substation C", polygon: "50,280 680,280 680,480 50,480" },
  ],
  equipment: [
    { id: "eq-1", name: "High-Pressure Compressor-07", type: "compressor", status: "warning", x: 150, y: 150 },
    { id: "eq-2", name: "Boiler Feed Pump-21", type: "pump", status: "normal", x: 250, y: 180 },
    { id: "eq-3", name: "Main Steam Boiler-12", type: "boiler", status: "critical", x: 450, y: 120 },
    { id: "eq-4", name: "Turbine Generator-02", type: "turbine", status: "normal", x: 550, y: 380 },
    { id: "eq-5", name: "Cooling Tower Fan-04", type: "pump", status: "normal", x: 200, y: 360 },
  ],
};

const MOCK_EQUIPMENT_CONTEXT: EquipmentContext = {
  id: "eq-1",
  name: "High-Pressure Compressor-07",
  type: "compressor",
  location: "Unit-A Bay 4, Gujarat Plant #1",
  status: "warning",
  manuals: [
    { id: "doc-1", title: "Siemens HP-Compressor Maintenance Manual v4.2", type: "manual", version: "v4.2", date: "2025-11-10", link: "#" },
  ],
  sops: [
    { id: "sop-1", title: "SOP-104: Emergency Shutdown & LOTO Isolation Procedure", type: "sop", version: "v2.0", date: "2026-01-15", link: "#" },
  ],
  maintenanceHistory: [
    { id: "m-101", date: "2026-06-12", type: "Preventive Lube Check", outcome: "Completed", duration: 2.5 },
    { id: "m-88", date: "2026-03-04", type: "Vibration Sensor Recalibration", outcome: "Completed", duration: 4.0 },
  ],
  aiAnalysis: {
    healthScore: 78,
    anomalies: [
      "Bearing temperature elevated +2.4°C above baseline",
      "Oil line pressure drop of 0.3 bar detected at 08:30 AM",
    ],
    recommendations: [
      "Inspect lube oil supply valve flange alignment for minor leakage",
      "Perform torque check on secondary housing bolts (SOP-104)",
    ],
  },
  sensors: [
    { id: "s-1", name: "Bearing Temp Sensor 1", type: "Temperature", value: 84.2, unit: "°C", status: "warning" },
    { id: "s-2", name: "Vibration Monitor A", type: "Vibration", value: 3.1, unit: "mm/s", status: "normal" },
    { id: "s-3", name: "Oil Pressure Gauge", type: "Pressure", value: 4.2, unit: "bar", status: "normal" },
  ],
  incidents: [
    { id: "inc-201", title: "Minor thermal drift alert flagged by AI Agent", severity: "medium", status: "open", date: "Today, 08:30 AM" },
  ],
};

export const twinApi = {
  async getPlantLayout(plantId: string): Promise<PlantLayout> {
    try {
      const res = await apiClient.get<PlantLayout>(`/twin/plants/${plantId}`);
      return res.data;
    } catch {
      return MOCK_PLANT_LAYOUT;
    }
  },

  async getEquipmentContext(equipmentId: string): Promise<EquipmentContext> {
    try {
      const res = await apiClient.get<EquipmentContext>(`/twin/equipment/${equipmentId}`);
      return res.data;
    } catch {
      return MOCK_EQUIPMENT_CONTEXT;
    }
  },
};

export default twinApi;
