export interface GraphNode {
  id: string;
  type: string;
  label: string;
  metadata?: Record<string, any>;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  type: string;
  metadata?: Record<string, any>;
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export interface GraphQuery {
  queryType: "expand" | "relationships" | "search";
  params: Record<string, any>;
  maxNodes?: number;
  maxEdges?: number;
}
