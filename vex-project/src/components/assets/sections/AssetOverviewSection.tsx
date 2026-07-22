import React from "react";

interface AssetOverviewSectionProps {
  owner: string;
}

export const AssetOverviewSection: React.FC<AssetOverviewSectionProps> = ({ owner }) => {
  return (
    <div className="space-y-4 text-xs text-slate-600 leading-relaxed font-sans">
      <p>This assets equipment is located in the Gujarat factory segment zone.</p>
      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
        <span>Assigned Operations Lead</span>
        <span className="font-bold text-slate-700">{owner}</span>
      </div>
    </div>
  );
};

export default AssetOverviewSection;
