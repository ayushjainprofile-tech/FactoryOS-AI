import React from "react";
import { SearchFilters as Filters, SearchEntityType } from "../../types/search";
import { Checkbox } from "@/components/ui/checkbox";

interface SearchFiltersProps {
  filters: Filters;
  onChange: (filters: Partial<Filters>) => void;
  onReset: () => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onChange,
  onReset,
}) => {
  const entityOptions: { value: SearchEntityType; label: string }[] = [
    { value: "document", label: "Documents" },
    { value: "asset", label: "Assets" },
    { value: "incident", label: "Incidents" },
    { value: "sop", label: "SOPs" },
    { value: "report", label: "Reports" },
    { value: "equipment", label: "Equipment" },
    { value: "engineer", label: "Engineers" },
  ];

  const handleEntityToggle = (type: SearchEntityType) => {
    const active = filters.entityTypes;
    const next = active.includes(type)
      ? active.filter((t) => t !== type)
      : [...active, type];
    onChange({ entityTypes: next });
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 space-y-6 font-sans shrink-0 w-full lg:w-64">
      <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
        <span className="text-xs font-bold text-slate-800">Search Filters</span>
        <button onClick={onReset} className="text-[10px] font-bold text-[#4F46E5] hover:text-[#4338CA]">
          Reset
        </button>
      </div>

      {/* Entity Selection Group */}
      <div className="space-y-2.5">
        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Entity Types</span>
        {entityOptions.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer text-xs text-[#374151] hover:text-slate-800 font-semibold select-none">
            <input
              type="checkbox"
              checked={filters.entityTypes.includes(opt.value)}
              onChange={() => handleEntityToggle(opt.value)}
              className="h-4 w-4 rounded border-slate-300 text-[#4F46E5] focus:ring-[#4F46E5]/20 focus:ring-2 cursor-pointer"
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>

      {/* Plant Scope selector */}
      <div className="space-y-2">
        <label className="text-[10px] uppercase font-bold text-slate-400 block">Plant Scope</label>
        <select
          value={filters.plantId || ""}
          onChange={(e) => onChange({ plantId: e.target.value })}
          className="w-full bg-[#F8FAFC] border border-[#E5E7EB] text-xs text-slate-700 px-3 py-2 rounded-xl focus:outline-none"
        >
          <option value="">All Plants</option>
          <option value="plant-01">Gujarat Plant #1</option>
          <option value="plant-02">Maharashtra Plant #2</option>
        </select>
      </div>

      {/* Date Pickers */}
      <div className="space-y-3">
        <span className="text-[10px] uppercase font-bold text-slate-400 block">Date Ingested</span>
        <div>
          <label className="text-[9px] text-slate-400 block mb-1">Start Date</label>
          <input
            type="date"
            value={filters.startDate || ""}
            onChange={(e) => onChange({ startDate: e.target.value })}
            className="w-full bg-[#F8FAFC] border border-[#E5E7EB] text-xs text-slate-700 px-3 py-1.5 rounded-xl focus:outline-none"
          />
        </div>
        <div>
          <label className="text-[9px] text-slate-400 block mb-1">End Date</label>
          <input
            type="date"
            value={filters.endDate || ""}
            onChange={(e) => onChange({ endDate: e.target.value })}
            className="w-full bg-[#F8FAFC] border border-[#E5E7EB] text-xs text-slate-700 px-3 py-1.5 rounded-xl focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
