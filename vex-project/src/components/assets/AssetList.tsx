import React from "react";
import { Asset } from "../../types/assets";
import { AssetRow } from "./AssetRow";

interface AssetListProps {
  assets: Asset[];
  onSelect: (id: string) => void;
}

export const AssetList: React.FC<AssetListProps> = ({ assets, onSelect }) => {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] overflow-hidden shadow-xs font-sans">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#F1F5F9] bg-[#F8FAFC]">
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Asset Name</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Type</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Plant Scope</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Health Score</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Status</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Last Maintenance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F5F9]">
            {assets.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-xs text-slate-400">
                  No assets matching selection.
                </td>
              </tr>
            ) : (
              assets.map((asset) => (
                <AssetRow key={asset.id} asset={asset} onSelect={onSelect} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetList;
