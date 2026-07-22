import React from "react";
import { DocumentRef } from "../../types/twin";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface SopsSectionProps {
  sops: DocumentRef[];
}

export const SopsSection: React.FC<SopsSectionProps> = ({ sops }) => {
  if (sops.length === 0) {
    return <div className="text-xs text-slate-400 py-6 text-center">No SOP manuals indexed.</div>;
  }

  return (
    <div className="space-y-3 font-sans">
      {sops.map((s) => (
        <div key={s.id} className="p-3 bg-slate-50 border border-slate-100 hover:border-indigo-200 rounded-xl transition-all flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <BookOpen className="h-4 w-4 text-green-500 shrink-0" />
            <div className="min-w-0">
              <span className="text-xs font-semibold text-slate-700 truncate block max-w-[190px]" title={s.title}>
                {s.title}
              </span>
              <span className="text-[9px] text-slate-400 block mt-0.5">
                Version: {s.version} • {new Date(s.date).toLocaleDateString()}
              </span>
            </div>
          </div>
          <Link
            to="/documents"
            className="p-1.5 bg-white hover:bg-[#EEF2FF] text-[#4F46E5] rounded-lg border border-[#E5E7EB] hover:border-indigo-200 transition-all shrink-0"
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SopsSection;
