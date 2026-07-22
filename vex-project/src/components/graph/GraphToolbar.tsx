import React from "react";
import { ZoomIn, ZoomOut, Maximize, RotateCcw, GitPullRequest, Search } from "lucide-react";

interface GraphToolbarProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFit: () => void;
  onReset: () => void;
  onExpandSelected: () => void;
  expandDisabled: boolean;
}

export const GraphToolbar: React.FC<GraphToolbarProps> = ({
  onZoomIn,
  onZoomOut,
  onFit,
  onReset,
  onExpandSelected,
  expandDisabled,
}) => {
  return (
    <div className="absolute top-4 left-4 bg-white border border-[#E5E7EB] rounded-2xl p-2 shadow-sm flex items-center gap-1.5 z-20 font-sans">
      <button
        onClick={onZoomIn}
        className="p-2 text-slate-500 hover:text-[#4F46E5] hover:bg-slate-50 rounded-xl transition-all"
        title="Zoom In"
      >
        <ZoomIn className="h-4 w-4" />
      </button>
      <button
        onClick={onZoomOut}
        className="p-2 text-slate-500 hover:text-[#4F46E5] hover:bg-slate-50 rounded-xl transition-all"
        title="Zoom Out"
      >
        <ZoomOut className="h-4 w-4" />
      </button>
      <button
        onClick={onFit}
        className="p-2 text-slate-500 hover:text-[#4F46E5] hover:bg-slate-50 rounded-xl transition-all"
        title="Fit screen"
      >
        <Maximize className="h-4 w-4" />
      </button>
      <button
        onClick={onReset}
        className="p-2 text-slate-500 hover:text-[#4F46E5] hover:bg-slate-50 rounded-xl transition-all"
        title="Reset layout positions"
      >
        <RotateCcw className="h-4 w-4" />
      </button>

      <span className="w-[1px] h-5 bg-slate-200 mx-1" />

      <button
        onClick={onExpandSelected}
        disabled={expandDisabled}
        className="px-3 py-1.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-[11px] font-semibold rounded-xl flex items-center gap-1.5 transition-all disabled:opacity-50"
        title="Expand select node neighbors"
      >
        <GitPullRequest className="h-3.5 w-3.5" />
        <span>Expand</span>
      </button>
    </div>
  );
};

export default GraphToolbar;
