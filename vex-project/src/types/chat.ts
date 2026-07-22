export interface Citation {
  id: string;
  documentId: string;
  title: string;
  snippet: string;
  pageNumber?: number;
}

export interface AgentStep {
  nodeName: string;
  toolUsed?: string;
  decision?: string;
  timestamp: string;
}

export interface Message {
  id: string;
  conversationId: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
  citations?: Citation[];
  confidence?: number; // 0 to 1
  suggestedQuestions?: string[];
  runId?: string;
}

export interface Trace {
  runId: string;
  steps: AgentStep[];
  retrievalMetadata?: {
    totalChunks: number;
    avgScore: number;
  };
}

export interface StreamEvent {
  type: "token" | "citations" | "confidence" | "suggested_questions" | "agent_step" | "done" | "error";
  token?: string;
  citations?: Citation[];
  confidence?: number;
  suggested_questions?: string[];
  agent_step?: AgentStep;
  error?: string;
}
