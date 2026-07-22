import React from "react";
import { GraphNode } from "../../types/graph";
import { GitPullRequest, ArrowRight, X } from "lucide-react";

interface NodeContextMenuProps {
  node: GraphNode;
  x: number;
  y: number;
  onExpand: () => void;
  onViewRelationships: () => void;
  onNavigate: () => void;
  onClose: () => void;
}

export const NodeContextMenu: React.FC<NodeContextMenuProps> = ({
  node,
  x,
  y,
  onExpand,
  onViewRelationships,
  onNavigate,
  onClose,
}) => {
  return (
    <div
      style={{ top: y, left: x }}
      className="absolute bg-white border border-[#E5E7EB] rounded-xl shadow-lg p-2.5 z-30 font-sans space-y-1 w-48"
    >
      <div className="flex items-center justify-between px-2 pb-1.5 border-b border-[#F1F5F9] mb-1">
        <span className="text-[10px] font-bold text-slate-800 truncate max-w-[120px]">{node.label}</span>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
          <X className="h-3 w-3" />
        </button>
      </div>

      <button
        onClick={onExpand}
        className="w-full text-left text-xs text-slate-700 hover:text-[#4F46E5] hover:bg-slate-50 px-2 py-1.5 rounded-lg flex items-center gap-2 font-medium"
      >
        <GitPullRequest className="h-3.5 w-3.5" />
        <span>Expand Neighborhood</span>
      </button>

      <button
        onClick={onViewRelationships}
        className="w-full text-left text-xs text-slate-700 hover:text-[#4F46E5] hover:bg-slate-50 px-2 py-1.5 rounded-lg flex items-center gap-2 font-medium"
      >
        <span>View Relationships</span>
      </button>

      <button
        onClick={onNavigate}
        className="w-full text-left text-xs text-[#4F46E5] hover:bg-indigo-50/50 px-2 py-1.5 rounded-lg flex items-center gap-2 font-bold"
      >
        <span>Go to Workspace</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default NodeContextMenu;
