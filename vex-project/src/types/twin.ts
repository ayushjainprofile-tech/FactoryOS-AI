export interface Zone {
  id: string;
  name: string;
  polygon: string; // SVG points coordinate format (e.g. "0,0 100,0 100,100")
}

export interface EquipmentPosition {
  id: string;
  name: string;
  type: string; // pump, compressor, boiler, turbine
  status: "normal" | "warning" | "critical";
  x: number;
  y: number;
}

export interface PlantLayout {
  id: string;
  name: string;
  zones: Zone[];
  equipment: EquipmentPosition[];
}

export interface DocumentRef {
  id: string;
  title: string;
  type: "manual" | "sop";
  version: string;
  date: string;
  link: string;
}

export interface MaintenanceOrder {
  id: string;
  date: string;
  type: string;
  outcome: string;
  duration: number; // hours
}

export interface SensorReading {
  id: string;
  name: string;
  type: string;
  value: number;
  unit: string;
  status: "normal" | "warning" | "critical";
}

export interface TwinIncident {
  id: string;
  title: string;
  severity: "low" | "medium" | "high" | "critical";
  status: "open" | "resolved";
  date: string;
}

export interface EquipmentContext {
  id: string;
  name: string;
  type: string;
  location: string;
  status: "normal" | "warning" | "critical";
  manuals: DocumentRef[];
  sops: DocumentRef[];
  maintenanceHistory: MaintenanceOrder[];
  aiAnalysis: {
    healthScore: number;
    anomalies: string[];
    recommendations: string[];
  };
  sensors: SensorReading[];
  incidents: TwinIncident[];
}
