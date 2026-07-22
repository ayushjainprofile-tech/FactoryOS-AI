import { create } from "../lib/zustand";
import { GraphNode, GraphEdge } from "../types/graph";
import { graphApi } from "../api/graph";

export interface GraphState {
  nodes: GraphNode[];
  edges: GraphEdge[];
  selectedNodeId: string | null;
  searchFocusedNodeId: string | null;
  isLoading: boolean;
  loadAssetGraph: (assetId: string) => Promise<void>;
  selectNode: (id: string | null) => void;
  focusNode: (id: string | null) => void;
  expandNode: (id: string) => Promise<void>;
  resetGraph: () => void;
}

export const useGraphStore = create<GraphState>((set, get) => ({
  nodes: [],
  edges: [],
  selectedNodeId: null,
  searchFocusedNodeId: null,
  isLoading: false,

  loadAssetGraph: async (assetId: string) => {
    set({ isLoading: true });
    try {
      const data = await graphApi.getAssetGraph(assetId);
      // Initialize layout positions
      const positionedNodes = data.nodes.map((n, idx) => ({
        ...n,
        x: n.x ?? 400 + Math.cos(idx) * 150,
        y: n.y ?? 300 + Math.sin(idx) * 150,
      }));
      set({ nodes: positionedNodes, edges: data.edges, selectedNodeId: null, searchFocusedNodeId: null });
    } catch (err) {
      console.error("Failed to load asset subgraph", err);
    } finally {
      set({ isLoading: false });
    }
  },

  selectNode: (selectedNodeId) => set({ selectedNodeId }),

  focusNode: (searchFocusedNodeId) => set({ searchFocusedNodeId }),

  expandNode: async (nodeId: string) => {
    const { nodes, edges } = get();
    try {
      const data = await graphApi.expandNode(nodeId, "both", 1);

      // Merge new nodes/edges avoiding duplicates
      const nodeMap = new Map(nodes.map((n) => [n.id, n]));
      const edgeMap = new Map(edges.map((e) => [e.id, e]));

      let addedCount = 0;
      data.nodes.forEach((n) => {
        if (!nodeMap.has(n.id)) {
          // Spawn near expanded node to look animated/anchored
          const parentNode = nodeMap.get(nodeId);
          nodeMap.set(n.id, {
            ...n,
            x: (parentNode?.x ?? 400) + (Math.random() - 0.5) * 50,
            y: (parentNode?.y ?? 300) + (Math.random() - 0.5) * 50,
          });
          addedCount++;
        }
      });

      data.edges.forEach((e) => {
        if (!edgeMap.has(e.id)) {
          edgeMap.set(e.id, e);
        }
      });

      set({
        nodes: Array.from(nodeMap.values()),
        edges: Array.from(edgeMap.values()),
      });
    } catch (err) {
      console.error("Failed to expand graph node", err);
    }
  },

  resetGraph: () => set({ nodes: [], edges: [], selectedNodeId: null, searchFocusedNodeId: null }),
}));
export default useGraphStore;
