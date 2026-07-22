import React from "react";
import { GraphNode, GraphEdge } from "../../types/graph";
import { Link } from "@tanstack/react-router";
import { GitPullRequest, ArrowRight, User } from "lucide-react";

interface RelationshipPanelProps {
  selectedNode: GraphNode | null;
  edges: GraphEdge[];
  nodes: GraphNode[];
  onFocusNode: (id: string) => void;
  onClose: () => void;
}

export const RelationshipPanel: React.FC<RelationshipPanelProps> = ({
  selectedNode,
  edges,
  nodes,
  onFocusNode,
  onClose,
}) => {
  if (!selectedNode) return null;

  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  // Find direct relationships for selected node
  const activeEdges = edges.filter(
    (e) => e.source === selectedNode.id || e.target === selectedNode.id
  );

  const getTargetLink = (node: GraphNode) => {
    // Navigates based on node category types
    if (node.type === "document") return `/documents`;
    if (node.type === "asset") return `/dashboard`;
    return `/dashboard`;
  };

  return (
    <div className="bg-white border-l border-[#E5E7EB] w-80 h-full flex flex-col shrink-0 font-sans z-25">
      <div className="p-4 border-b border-[#E5E7EB] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GitPullRequest className="h-4 w-4 text-[#4F46E5]" />
          <h3 className="text-sm font-bold text-slate-800">Node Relationships</h3>
        </div>
        <button onClick={onClose} className="text-xs text-slate-400 hover:text-slate-700">
          Close
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Focus Node</span>
          <h4 className="text-sm font-bold text-slate-800">{selectedNode.label}</h4>
          <span className="inline-block text-[9px] uppercase font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded mt-1.5">
            {selectedNode.type}
          </span>

          <div className="mt-3">
            <Link
              to={getTargetLink(selectedNode)}
              className="text-xs text-[#4F46E5] hover:text-[#4338CA] font-semibold flex items-center gap-1"
            >
              Go to Detail Workspace <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">Connected Connections</span>
          {activeEdges.length === 0 ? (
            <div className="text-xs text-slate-400 py-4 text-center">No active relations in subgraph.</div>
          ) : (
            <div className="space-y-2.5">
              {activeEdges.map((e) => {
                const isSource = e.source === selectedNode.id;
                const targetId = isSource ? e.target : e.source;
                const targetNode = nodeMap.get(targetId);

                if (!targetNode) return null;

                return (
                  <button
                    key={e.id}
                    onClick={() => onFocusNode(targetNode.id)}
                    className="w-full text-left p-3 bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/20 rounded-xl transition-all flex items-start justify-between"
                  >
                    <div>
                      <span className="text-[9px] uppercase font-bold text-[#4F46E5] block mb-0.5">
                        {e.type} ({isSource ? "Outgoing" : "Incoming"})
                      </span>
                      <span className="text-xs font-semibold text-slate-700 block truncate max-w-[170px]">
                        {targetNode.label}
                      </span>
                    </div>
                    <span className="text-[9px] uppercase font-bold text-slate-400">{targetNode.type}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RelationshipPanel;
