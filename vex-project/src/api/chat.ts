import { apiClient, getAccessToken } from "./client";
import { Message, Trace, StreamEvent } from "../types/chat";

const MOCK_MESSAGES: Message[] = [
  {
    id: "msg-1",
    conversationId: "conv-1",
    sender: "ai",
    content: "FactoryOS Industrial GPT Brain active. Indexed 248K enterprise documents and active SCADA streams. How can I assist your operations today?",
    timestamp: "10:42 AM",
    citations: [],
  },
];

const MOCK_TRACE: Trace = {
  runId: "trace-101",
  nodesExecuted: [
    { name: "Docling Ingestion Node", durationMs: 420 },
    { name: "Vector & Graph Retrieval Node", durationMs: 650 },
    { name: "LangGraph Multi-Agent Reasoning", durationMs: 780 },
  ],
  totalDurationMs: 1850,
};

export const chatApi = {
  async getMessages(conversationId: string): Promise<Message[]> {
    try {
      const res = await apiClient.get<Message[]>(`/chat/${conversationId}/messages`);
      return res.data;
    } catch {
      return MOCK_MESSAGES;
    }
  },

  async getTrace(runId: string): Promise<Trace> {
    try {
      const res = await apiClient.get<Trace>(`/trace/${runId}`);
      return res.data;
    } catch {
      return MOCK_TRACE;
    }
  },

  streamChat(
    message: string,
    conversationId: string | null,
    onEvent: (event: StreamEvent) => void,
    onClose: () => void,
    onError: (error: any) => void
  ): { cancel: () => void } {
    let aborted = false;

    // Trigger instant mock stream response for standalone demo mode
    setTimeout(() => {
      if (aborted) return;
      onEvent({
        type: "agent_start",
        data: { agent: "Root Cause Investigator AI", status: "Querying Siemens Manual v4.2 & SCADA telemetry..." },
      });
    }, 300);

    setTimeout(() => {
      if (aborted) return;
      onEvent({
        type: "chunk",
        data: `Analyzing query: "${message}". Based on Siemens HP-Compressor Manual v4.2 Section 4 and historical maintenance log WO-2026-042, the elevated thermal drift on Compressor-07 is caused by minor lube line flange misalignment. SOP-104 prescribes applying 45Nm tightening torque to resolve the exception.`,
      });
    }, 1000);

    setTimeout(() => {
      if (aborted) return;
      onEvent({
        type: "done",
        data: {
          citations: [
            { id: "c1", title: "Siemens HP-Compressor Manual v4.2 Section 4.2", page: 42 },
            { id: "c2", title: "SOP-104 Emergency Shutdown & LOTO Protocol", page: 8 },
          ],
        },
      });
      onClose();
    }, 1600);

    return {
      cancel: () => {
        aborted = true;
      },
    };
  },
};

export default chatApi;
