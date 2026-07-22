import React from "react";
import { EquipmentPosition } from "../../types/twin";

interface EquipmentMarkerProps {
  equipment: EquipmentPosition;
  isSelected: boolean;
  onClick: () => void;
}

export const EquipmentMarker: React.FC<EquipmentMarkerProps> = ({
  equipment,
  isSelected,
  onClick,
}) => {
  const getStatusColor = (status: string) => {
    if (status === "normal") return "fill-[#22C55E] stroke-[#16A34A]";
    if (status === "warning") return "fill-[#F59E0B] stroke-[#D97706]";
    return "fill-[#EF4444] stroke-[#DC2626]";
  };

  return (
    <g
      transform={`translate(${equipment.x}, ${equipment.y})`}
      onClick={onClick}
      className="cursor-pointer group"
    >
      {/* Highlight circle halo */}
      {isSelected && (
        <circle r={18} className="fill-none stroke-[#4F46E5] stroke-2 animate-pulse" />
      )}

      {/* Status dot */}
      <circle r={8} className={`${getStatusColor(equipment.status)} stroke-2 transition-transform duration-200 group-hover:scale-125`} />

      {/* Machine label */}
      <text
        y={20}
        textAnchor="middle"
        className="fill-slate-700 font-bold text-[9px] select-none pointer-events-none"
      >
        {equipment.name}
      </text>
    </g>
  );
};

export default EquipmentMarker;
