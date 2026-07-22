import React from "react";

export const GraphLegend: React.FC = () => {
  const nodeLegends = [
    { type: "asset", label: "Asset", color: "bg-purple-500" },
    { type: "document", label: "Document", color: "bg-blue-500" },
    { type: "sop", label: "SOP", color: "bg-green-500" },
    { type: "incident", label: "Incident", color: "bg-red-500" },
    { type: "engineer", label: "Engineer", color: "bg-indigo-500" },
    { type: "report", label: "Report", color: "bg-orange-500" },
  ];

  const edgeLegends = [
    { label: "OWNS", style: "border-indigo-500" },
    { label: "LOCATED_IN", style: "border-slate-400" },
    { label: "RELATED_TO", style: "border-dashed border-indigo-500" },
  ];

  return (
    <div className="absolute bottom-4 left-4 bg-white border border-[#E5E7EB] rounded-2xl p-4 shadow-sm z-20 font-sans space-y-3.5 w-48">
      <div>
        <span className="text-[9px] uppercase font-bold text-slate-400 block mb-2">Nodes</span>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          {nodeLegends.map((item) => (
            <div key={item.type} className="flex items-center gap-1.5 font-medium text-slate-700">
              <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <span className="text-[9px] uppercase font-bold text-slate-400 block mb-2">Relationships</span>
        <div className="space-y-1.5 text-[10px]">
          {edgeLegends.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-slate-700 font-medium">
              <span className={`w-6 border-b-2 ${item.style}`} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphLegend;
