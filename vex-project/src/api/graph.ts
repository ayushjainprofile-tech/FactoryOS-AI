import { apiClient } from "./client";
import { GraphData, GraphNode, GraphEdge } from "../types/graph";

const MOCK_GRAPH: GraphData = {
  nodes: [
    { id: "node-1", label: "Compressor-07", type: "Asset", properties: { category: "Compressor", location: "Unit-A Bay 4" } },
    { id: "node-2", label: "Siemens Maintenance Manual v4.2", type: "Document", properties: { docType: "Manual", version: "4.2" } },
    { id: "node-3", label: "SOP-104 LOTO Protocol", type: "SOP", properties: { sopCode: "SOP-104", priority: "High" } },
    { id: "node-4", label: "Incident #201: Thermal Drift", type: "Incident", properties: { date: "2026-07-22", severity: "Medium" } },
    { id: "node-5", label: "Rahul Sharma", type: "Engineer", properties: { role: "Senior Mechanical Engineer" } },
  ],
  edges: [
    { id: "e1", source: "node-1", target: "node-2", label: "HAS_MANUAL" },
    { id: "e2", source: "node-1", target: "node-3", label: "PRESCRIBES_SOP" },
    { id: "e3", source: "node-4", target: "node-1", label: "REPORTS_OUTAGE" },
    { id: "e4", source: "node-4", target: "node-5", label: "ASSIGNED_TO" },
  ],
};

export const graphApi = {
  async getAssetGraph(
    assetId: string,
    options?: { maxNodes?: number; maxEdges?: number }
  ): Promise<GraphData> {
    try {
      const res = await apiClient.get<GraphData>(`/graph/asset/${assetId}`, {
        params: {
          max_nodes: options?.maxNodes || 100,
          max_edges: options?.maxEdges || 150,
        },
      });
      return res.data;
    } catch {
      return MOCK_GRAPH;
    }
  },

  async searchGraph(
    query: string,
    options?: { entityTypes?: string[]; maxResults?: number }
  ): Promise<GraphNode[]> {
    try {
      const res = await apiClient.get<GraphNode[]>("/graph/search", {
        params: {
          query,
          entity_types: options?.entityTypes || [],
          max_results: options?.maxResults || 20,
        },
      });
      return res.data;
    } catch {
      return MOCK_GRAPH.nodes;
    }
  },

  async expandNode(
    nodeId: string,
    direction: "incoming" | "outgoing" | "both",
    depth: number
  ): Promise<GraphData> {
    try {
      const res = await apiClient.post<GraphData>("/graph/query", {
        query_type: "expand",
        params: { node_id: nodeId, direction, depth },
      });
      return res.data;
    } catch {
      return MOCK_GRAPH;
    }
  },

  async getRelationships(nodeId: string): Promise<GraphEdge[]> {
    try {
      const res = await apiClient.post<GraphEdge[]>("/graph/query", {
        query_type: "relationships",
        params: { node_id: nodeId },
      });
      return res.data;
    } catch {
      return MOCK_GRAPH.edges;
    }
  },
};

export default graphApi;
