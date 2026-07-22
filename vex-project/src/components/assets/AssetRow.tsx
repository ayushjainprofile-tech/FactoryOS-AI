import React from "react";
import { Asset } from "../../types/assets";
import { FileSpreadsheet } from "lucide-react";

interface AssetRowProps {
  asset: Asset;
  onSelect: (id: string) => void;
}

export const AssetRow: React.FC<AssetRowProps> = ({ asset, onSelect }) => {
  const getStatusBadge = (status: string) => {
    if (status === "operational") {
      return (
        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-200 uppercase">
          OPERATIONAL
        </span>
      );
    }
    if (status === "warning") {
      return (
        <span className="text-[10px] font-bold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded border border-yellow-200 uppercase">
          WARNING
        </span>
      );
    }
    return (
      <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200 uppercase">
        CRITICAL
      </span>
    );
  };

  const getHealthColor = (score: number) => {
    if (score >= 80) return "text-green-600 font-extrabold";
    if (score >= 50) return "text-yellow-600 font-extrabold";
    return "text-red-600 font-extrabold";
  };

  return (
    <tr
      onClick={() => onSelect(asset.id)}
      className="hover:bg-[#F8FAFC] transition-all cursor-pointer font-sans"
    >
      <td className="p-4">
        <div className="flex items-center gap-2.5">
          <div className="h-8.5 w-8.5 rounded-lg bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
            <FileSpreadsheet className="h-4 w-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-800 block">{asset.name}</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">{asset.location}</span>
          </div>
        </div>
      </td>
      <td className="p-4 text-xs text-slate-700 capitalize">{asset.type}</td>
      <td className="p-4 text-xs text-slate-700">{asset.plantId}</td>
      <td className="p-4 text-xs">
        <span className={getHealthColor(asset.healthScore)}>{asset.healthScore}%</span>
      </td>
      <td className="p-4">{getStatusBadge(asset.status)}</td>
      <td className="p-4 text-xs text-slate-500 font-medium">
        {new Date(asset.lastMaintenance).toLocaleDateString()}
      </td>
    </tr>
  );
};

export default AssetRow;
