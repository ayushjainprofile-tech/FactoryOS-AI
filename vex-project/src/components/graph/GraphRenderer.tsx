import React, { useEffect, useRef, useState } from "react";
import { GraphNode, GraphEdge } from "../../types/graph";

interface GraphRendererProps {
  nodes: GraphNode[];
  edges: GraphEdge[];
  selectedId: string | null;
  focusedId: string | null;
  onSelectNode: (id: string | null) => void;
  zoom: number;
  panOffset: { x: number; y: number };
  onPan: (offset: { x: number; y: number }) => void;
}

export const GraphRenderer: React.FC<GraphRendererProps> = ({
  nodes,
  edges,
  selectedId,
  focusedId,
  onSelectNode,
  zoom,
  panOffset,
  onPan,
}) => {
  const containerRef = useRef<SVGSVGElement>(null);
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>({});
  const [draggedNodeId, setDraggedNodeId] = useState<string | null>(null);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Initialize nodes coordinates
  useEffect(() => {
    const nextPositions: Record<string, { x: number; y: number }> = {};
    nodes.forEach((n, idx) => {
      nextPositions[n.id] = {
        x: n.x ?? 400 + Math.cos(idx) * 120,
        y: n.y ?? 300 + Math.sin(idx) * 120,
      };
    });
    setPositions(nextPositions);
  }, [nodes]);

  // Force-directed physics loop
  useEffect(() => {
    if (Object.keys(positions).length === 0) return;

    let animFrame: number;
    const nodeIds = nodes.map((n) => n.id);
    const nodeCount = nodeIds.length;

    // Velocities
    const vx: Record<string, number> = {};
    const vy: Record<string, number> = {};
    nodeIds.forEach((id) => {
      vx[id] = 0;
      vy[id] = 0;
    });

    const runPhysicsTick = () => {
      setPositions((prev) => {
        const next = { ...prev };

        // 1. Repulsion force between all nodes (Coulomb law)
        for (let i = 0; i < nodeCount; i++) {
          const idA = nodeIds[i];
          const posA = next[idA];
          if (!posA) continue;

          for (let j = i + 1; j < nodeCount; j++) {
            const idB = nodeIds[j];
            const posB = next[idB];
            if (!posB) continue;

            const dx = posB.x - posA.x;
            const dy = posB.y - posA.y;
            const distSq = dx * dx + dy * dy + 0.1;
            const dist = Math.sqrt(distSq);

            if (dist < 250) {
              const force = (1200 / distSq) * 0.1;
              const fx = (dx / dist) * force;
              const fy = (dy / dist) * force;

              if (idA !== draggedNodeId) {
                vx[idA] -= fx;
                vy[idA] -= fy;
              }
              if (idB !== draggedNodeId) {
                vx[idB] += fx;
                vy[idB] += fy;
              }
            }
          }
        }

        // 2. Attraction force along active edge springs (Hooke law)
        edges.forEach((edge) => {
          const posA = next[edge.source];
          const posB = next[edge.target];
          if (!posA || !posB) return;

          const dx = posB.x - posA.x;
          const dy = posB.y - posA.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.1;

          // Rest length: 80px
          const force = (dist - 80) * 0.03;
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;

          if (edge.source !== draggedNodeId) {
            vx[edge.source] += fx;
            vy[edge.source] += fy;
          }
          if (edge.target !== draggedNodeId) {
            vx[edge.target] -= fx;
            vy[edge.target] -= fy;
          }
        });

        // 3. Gravity center force (towards 400, 300)
        nodeIds.forEach((id) => {
          if (id === draggedNodeId) return;
          const pos = next[id];
          if (!pos) return;

          vx[id] += (400 - pos.x) * 0.005;
          vy[id] += (300 - pos.y) * 0.005;
        });

        // 4. Update coordinates applying dampening
        nodeIds.forEach((id) => {
          if (id === draggedNodeId) return;
          const pos = next[id];
          if (!pos) return;

          // Dampening coefficient: 0.85
          vx[id] *= 0.85;
          vy[id] *= 0.85;

          next[id] = {
            x: pos.x + vx[id],
            y: pos.y + vy[id],
          };
        });

        return next;
      });

      animFrame = requestAnimationFrame(runPhysicsTick);
    };

    animFrame = requestAnimationFrame(runPhysicsTick);
    return () => cancelAnimationFrame(animFrame);
  }, [nodes, edges, draggedNodeId]);

  // Handle Dragging
  const handleMouseDown = (e: React.MouseEvent, nodeId: string) => {
    e.stopPropagation();
    setDraggedNodeId(nodeId);
    onSelectNode(nodeId);
    const pos = positions[nodeId];
    if (pos) {
      dragStartRef.current = {
        x: e.clientX - pos.x,
        y: e.clientY - pos.y,
      };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggedNodeId) {
      setPositions((prev) => ({
        ...prev,
        [draggedNodeId]: {
          x: e.clientX - dragStartRef.current.x,
          y: e.clientY - dragStartRef.current.y,
        },
      }));
    } else if (e.buttons === 1) {
      // Pan background drag
      onPan({
        x: panOffset.x + e.movementX,
        y: panOffset.y + e.movementY,
      });
    }
  };

  const handleMouseUp = () => {
    setDraggedNodeId(null);
  };

  const getNodeColor = (type: string) => {
    switch (type) {
      case "asset":
        return "#A855F7"; // Purple
      case "document":
        return "#3B82F6"; // Blue
      case "sop":
        return "#22C55E"; // Green
      case "incident":
        return "#EF4444"; // Red
      case "engineer":
        return "#6366F1"; // Indigo
      case "report":
        return "#F97316"; // Orange
      default:
        return "#64748B"; // Slate
    }
  };

  return (
    <svg
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="w-full h-full bg-[#F8FAFC] cursor-grab active:cursor-grabbing select-none"
    >
      <g transform={`translate(${panOffset.x}, ${panOffset.y}) scale(${zoom})`}>
        {/* Edges */}
        {edges.map((edge) => {
          const start = positions[edge.source];
          const end = positions[edge.target];

          if (!start || !end) return null;

          return (
            <g key={edge.id}>
              <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="#CBD5E1"
                strokeWidth={2}
                className="transition-all"
              />
              {/* Edge label */}
              <text
                x={(start.x + end.x) / 2}
                y={(start.y + end.y) / 2 - 5}
                textAnchor="middle"
                className="fill-slate-400 font-bold text-[8px]"
              >
                {edge.type}
              </text>
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const pos = positions[node.id];
          if (!pos) return null;

          const isSelected = selectedId === node.id;
          const isFocused = focusedId === node.id;

          return (
            <g
              key={node.id}
              transform={`translate(${pos.x}, ${pos.y})`}
              onMouseDown={(e) => handleMouseDown(e, node.id)}
              className="cursor-pointer group"
            >
              {/* Highlight halo */}
              {(isSelected || isFocused) && (
                <circle r={24} fill="none" stroke="#4F46E5" strokeWidth={3} className="animate-pulse" />
              )}

              {/* Node body */}
              <circle r={14} fill={getNodeColor(node.type)} className="stroke-white stroke-2 group-hover:scale-110 transition-transform duration-200" />

              {/* Node label */}
              <text
                y={28}
                textAnchor="middle"
                className="fill-slate-800 font-bold text-[10px] bg-white px-1 shadow-sm select-none pointer-events-none"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};

export default GraphRenderer;
