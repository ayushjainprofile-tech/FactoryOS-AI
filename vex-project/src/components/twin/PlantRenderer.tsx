import React from "react";
import { PlantLayout } from "../../types/twin";
import { EquipmentMarker } from "./EquipmentMarker";

interface PlantRendererProps {
  plant: PlantLayout;
  selectedEquipmentId: string | null;
  onSelectEquipment: (id: string) => void;
}

export const PlantRenderer: React.FC<PlantRendererProps> = ({
  plant,
  selectedEquipmentId,
  onSelectEquipment,
}) => {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-8">
      {/* SVG 2D layout schematic */}
      <svg className="w-full max-w-3xl aspect-[4/3] bg-white border border-[#E5E7EB] rounded-[24px] shadow-sm overflow-hidden p-4">
        {/* Zones */}
        {plant.zones.map((zone) => (
          <g key={zone.id} className="group">
            <polygon
              points={zone.polygon}
              className="fill-slate-50 stroke-slate-200 stroke-2 hover:fill-indigo-50/30 transition-all duration-300 cursor-pointer"
            />
            <text
              x={20}
              y={40}
              className="fill-slate-400 font-extrabold text-[9px] uppercase opacity-70"
            >
              {zone.name}
            </text>
          </g>
        ))}

        {/* Machines */}
        {plant.equipment.map((eq) => (
          <EquipmentMarker
            key={eq.id}
            equipment={eq}
            isSelected={selectedEquipmentId === eq.id}
            onClick={() => onSelectEquipment(eq.id)}
          />
        ))}
      </svg>
    </div>
  );
};

export default PlantRenderer;
