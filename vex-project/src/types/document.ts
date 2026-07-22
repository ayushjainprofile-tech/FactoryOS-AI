export type PipelineStatus =
  | "uploaded"
  | "ocr_in_progress"
  | "ocr_done"
  | "ocr_failed"
  | "parsing_in_progress"
  | "parsing_done"
  | "parsing_failed"
  | "chunking_in_progress"
  | "chunking_done"
  | "chunking_failed"
  | "embedding_in_progress"
  | "embedding_done"
  | "embedding_failed"
  | "graph_in_progress"
  | "graph_done"
  | "graph_failed"
  | "ready"
  | "failed";

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
  size: number; // bytes
  fileType: string; // pdf, docx, xlsx, png, jpg, eml, dxf, dwg etc
  status: PipelineStatus;
  uploadedAt: string;
  owner: string;
  plantId?: string;
  equipmentId?: string;
  tags: string[];
  extractedText?: string;
  errorMessage?: string;
}

export interface DocumentChunk {
  id: string;
  documentId: string;
  index: number;
  content: string;
  pageNumber?: number;
}

export interface PipelineHealth {
  queueDepth: number;
  avgProcessingTime: number; // seconds
  failureRate: number; // percentage
}
