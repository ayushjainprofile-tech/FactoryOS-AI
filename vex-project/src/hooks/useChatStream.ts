import { useChatStore } from "../store/chat";
import { parseSseStream } from "../lib/sse";
import { StreamEvent } from "../types/chat";

export const useChatStream = () => {
  const store = useChatStore();

  const startStream = (
    message: string,
    conversationId: string | null,
    onEvent: (event: StreamEvent) => void,
    onClose: () => void,
    onError: (err: any) => void
  ) => {
    return parseSseStream("/api/v1/chat", {
      method: "POST",
      body: { message, conversation_id: conversationId },
      onMessage: (data) => {
        try {
          const event: StreamEvent = JSON.parse(data);
          onEvent(event);
        } catch (err) {
          console.error("Failed to parse SSE event data", err);
        }
      },
      onClose,
      onError,
    });
  };

  return {
    ...store,
    startStream,
  };
};

export default useChatStream;
