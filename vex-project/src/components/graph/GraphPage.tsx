import React, { useState, useEffect } from "react";
import { useGraph } from "../../hooks/useGraph";
import { GraphRenderer } from "./GraphRenderer";
import { GraphToolbar } from "./GraphToolbar";
import { GraphLegend } from "./GraphLegend";
import { GraphSearchBar } from "./GraphSearchBar";
import { RelationshipPanel } from "./RelationshipPanel";
import { NodeContextMenu } from "./NodeContextMenu";
import { ProtectedRoute } from "../auth/ProtectedRoute";
import { useNavigate } from "@tanstack/react-router";

export const GraphPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    nodes,
    edges,
    selectedNodeId,
    searchFocusedNodeId,
    isLoading,
    loadAssetGraph,
    selectNode,
    focusNode,
    expandNode,
    resetGraph,
  } = useGraph();

  const [zoom, setZoom] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });

  // Context Menu state
  const [contextMenu, setContextMenu] = useState<{
    nodeId: string;
    x: number;
    y: number;
  } | null>(null);

  // Initial load
  useEffect(() => {
    loadAssetGraph("asset-01");
    return () => resetGraph();
  }, [loadAssetGraph, resetGraph]);

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || null;

  const handleNodeSelect = (nodeId: string | null) => {
    selectNode(nodeId);
    setContextMenu(null);
  };

  const handleNodeRightClick = (nodeId: string, clientX: number, clientY: number) => {
    setContextMenu({
      nodeId,
      x: clientX - 80,
      y: clientY - 80,
    });
  };

  const getTargetLink = (type: string) => {
    if (type === "document") return "/documents";
    if (type === "asset") return "/dashboard";
    return "/dashboard";
  };

  const contextMenuNode = nodes.find((n) => n.id === contextMenu?.nodeId) || null;

  return (
    <ProtectedRoute allowedRoles={["admin", "engineer"]}>
      <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans relative">
        <div className="flex-1 flex flex-col min-w-0 relative h-full">
          {/* Header overlay */}
          <div className="absolute top-4 left-40 z-10">
            <h1 className="text-base font-bold text-slate-800 tracking-tight">FactoryOS Knowledge Graph</h1>
            <p className="text-[10px] text-slate-500">Neo4j entities & relationships explorer</p>
          </div>

          {/* Search bar */}
          <GraphSearchBar
            onNodeSelect={(node) => {
              focusNode(node.id);
              selectNode(node.id);
            }}
          />

          {/* Toolbar */}
          <GraphToolbar
            onZoomIn={() => setZoom((z) => Math.min(z + 0.1, 2.5))}
            onZoomOut={() => setZoom((z) => Math.max(z - 0.1, 0.4))}
            onFit={() => {
              setZoom(1);
              setPanOffset({ x: 0, y: 0 });
            }}
            onReset={() => {
              loadAssetGraph("asset-01");
            }}
            onExpandSelected={() => {
              if (selectedNodeId) expandNode(selectedNodeId);
            }}
            expandDisabled={!selectedNodeId}
          />

          {/* Canvas Graph Renderer */}
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#4F46E5] border-t-transparent" />
            </div>
          ) : (
            <div className="w-full h-full relative" onContextMenu={(e) => e.preventDefault()}>
              <GraphRenderer
                nodes={nodes}
                edges={edges}
                selectedId={selectedNodeId}
                focusedId={searchFocusedNodeId}
                onSelectNode={(id) => {
                  handleNodeSelect(id);
                  if (id) {
                    // Simulate custom double-click/right-click coordinates inside simple SVG trigger
                    const mockEvent = window.event as MouseEvent;
                    if (mockEvent && mockEvent.button === 2) {
                      handleNodeRightClick(id, mockEvent.clientX, mockEvent.clientY);
                    }
                  }
                }}
                zoom={zoom}
                panOffset={panOffset}
                onPan={setPanOffset}
              />
            </div>
          )}

          {/* Context Menu overlay */}
          {contextMenu && contextMenuNode && (
            <NodeContextMenu
              node={contextMenuNode}
              x={contextMenu.x}
              y={contextMenu.y}
              onExpand={() => {
                expandNode(contextMenu.nodeId);
                setContextMenu(null);
              }}
              onViewRelationships={() => {
                selectNode(contextMenu.nodeId);
                setContextMenu(null);
              }}
              onNavigate={() => {
                navigate({ to: getTargetLink(contextMenuNode.type) });
                setContextMenu(null);
              }}
              onClose={() => setContextMenu(null)}
            />
          )}

          {/* Legend */}
          <GraphLegend />
        </div>

        {/* RELATIONSHIP EXPLORER SIDE PANEL */}
        {selectedNode && (
          <RelationshipPanel
            selectedNode={selectedNode}
            edges={edges}
            nodes={nodes}
            onFocusNode={(id) => {
              focusNode(id);
              selectNode(id);
            }}
            onClose={() => selectNode(null)}
          />
        )}
      </div>
    </ProtectedRoute>
  );
};

export default GraphPage;
