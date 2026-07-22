import { apiClient } from "./client";
import { GraphData, GraphNode, GraphEdge } from "../types/graph";

export const graphApi = {
  async getAssetGraph(
    assetId: string,
    options?: { maxNodes?: number; maxEdges?: number }
  ): Promise<GraphData> {
    const res = await apiClient.get<GraphData>(`/graph/asset/${assetId}`, {
      params: {
        max_nodes: options?.maxNodes || 100,
        max_edges: options?.maxEdges || 150,
      },
    });
    return res.data;
  },

  async searchGraph(
    query: string,
    options?: { entityTypes?: string[]; maxResults?: number }
  ): Promise<GraphNode[]> {
    const res = await apiClient.get<GraphNode[]>("/graph/search", {
      params: {
        query,
        entity_types: options?.entityTypes || [],
        max_results: options?.maxResults || 20,
      },
    });
    return res.data;
  },

  async expandNode(
    nodeId: string,
    direction: "incoming" | "outgoing" | "both",
    depth: number
  ): Promise<GraphData> {
    const res = await apiClient.post<GraphData>("/graph/query", {
      query_type: "expand",
      params: { node_id: nodeId, direction, depth },
    });
    return res.data;
  },

  async getRelationships(nodeId: string): Promise<GraphEdge[]> {
    const res = await apiClient.post<GraphEdge[]>("/graph/query", {
      query_type: "relationships",
      params: { node_id: nodeId },
    });
    return res.data;
  },
};

export default graphApi;
