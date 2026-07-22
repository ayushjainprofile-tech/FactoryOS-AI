export type PipelineStage =
  | "uploaded"
  | "ocr"
  | "parsing"
  | "chunking"
  | "embedding"
  | "graph"
  | "ready"
  | "failed";

export type DocumentStatus = "uploaded" | "processing" | "ready" | "failed";

export interface DocumentMetadata {
  title: string;
  plantId?: string;
  equipmentId?: string;
  tags?: string[];
  owner?: string;
}

export interface Document {
  id: string;
  name: string;
  size: number;
  fileType: string;
  status: DocumentStatus;
  pipelineStage: PipelineStage;
  uploadedAt: string;
  owner: string;
  plantId?: string;
  equipmentId?: string;
  tags: string[];
  extractedText?: string;
  errorMessage?: string;
}

export interface PipelineHealth {
  queueDepth: number;
  avgProcessingTime: number;
  failureRate: number;
}
