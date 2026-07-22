import { apiClient, getAccessToken } from "./client";
import { Message, Trace, StreamEvent } from "../types/chat";

export const chatApi = {
  async getMessages(conversationId: string): Promise<Message[]> {
    const res = await apiClient.get<Message[]>(`/chat/${conversationId}/messages`);
    return res.data;
  },

  async getTrace(runId: string): Promise<Trace> {
    const res = await apiClient.get<Trace>(`/trace/${runId}`);
    return res.data;
  },

  streamChat(
    message: string,
    conversationId: string | null,
    onEvent: (event: StreamEvent) => void,
    onClose: () => void,
    onError: (error: any) => void
  ): { cancel: () => void } {
    const controller = new AbortController();
    const token = getAccessToken();

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    fetch("/api/v1/chat", {
      method: "POST",
      headers,
      body: JSON.stringify({ message, conversation_id: conversationId }),
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}`);
        }
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        if (!reader) {
          throw new Error("Response body is not readable");
        }

        let buffer = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          // Keep the last partial line in the buffer
          buffer = lines.pop() || "";

          for (const line of lines) {
            const cleanLine = line.trim();
            if (!cleanLine) continue;

            if (cleanLine.startsWith("data: ")) {
              try {
                const eventData: StreamEvent = JSON.parse(cleanLine.slice(6));
                onEvent(eventData);
              } catch (err) {
                console.error("Error parsing stream line", err);
              }
            }
          }
        }
        onClose();
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          onError(err);
        }
      });

    return {
      cancel: () => controller.abort(),
    };
  },
};

export default chatApi;
