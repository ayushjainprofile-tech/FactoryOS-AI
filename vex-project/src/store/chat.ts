import { create } from "../lib/zustand";
import { chatApi } from "../api/chat";
import { Message, AgentStep } from "../types/chat";

export interface ChatState {
  conversationId: string | null;
  messages: Message[];
  activeSteps: AgentStep[];
  isStreaming: boolean;
  activeRunId: string | null;
  cancelStream: (() => void) | null;
  sendMessage: (text: string) => Promise<void>;
  loadHistory: (id: string) => Promise<void>;
  startNewConversation: () => void;
  clearConversation: () => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  conversationId: null,
  messages: [],
  activeSteps: [],
  isStreaming: false,
  activeRunId: null,
  cancelStream: null,

  sendMessage: async (text: string) => {
    const { conversationId, messages } = get();

    // User message
    const userMsg: Message = {
      id: `user_${Date.now()}`,
      conversationId: conversationId || "new",
      sender: "user",
      text,
      timestamp: new Date().toISOString(),
    };

    // Assistant placeholder
    const assistantMsgId = `assistant_${Date.now()}`;
    const assistantMsg: Message = {
      id: assistantMsgId,
      conversationId: conversationId || "new",
      sender: "assistant",
      text: "",
      timestamp: new Date().toISOString(),
      citations: [],
      suggestedQuestions: [],
    };

    set({
      messages: [...messages, userMsg, assistantMsg],
      activeSteps: [],
      isStreaming: true,
      activeRunId: null,
    });

    const handleStreamEvent = (event: any) => {
      set((state) => {
        const nextMsgs = state.messages.map((m) => {
          if (m.id === assistantMsgId) {
            const updated = { ...m };
            if (event.type === "token" && event.token) {
              updated.text += event.token;
            } else if (event.type === "citations" && event.citations) {
              updated.citations = [...(updated.citations || []), ...event.citations];
            } else if (event.type === "confidence" && event.confidence !== undefined) {
              updated.confidence = event.confidence;
            } else if (event.type === "suggested_questions" && event.suggested_questions) {
              updated.suggestedQuestions = event.suggested_questions;
            }
            return updated;
          }
          return m;
        });

        const nextSteps = [...state.activeSteps];
        if (event.type === "agent_step" && event.agent_step) {
          nextSteps.push(event.agent_step);
        }

        return {
          messages: nextMsgs,
          activeSteps: nextSteps,
        };
      });
    };

    const streamObj = chatApi.streamChat(
      text,
      conversationId,
      handleStreamEvent,
      () => {
        // Stream completed
        set({ isStreaming: false, cancelStream: null });
      },
      (err) => {
        // Stream failed
        set((state) => ({
          isStreaming: false,
          cancelStream: null,
          messages: state.messages.map((m) => {
            if (m.id === assistantMsgId) {
              return {
                ...m,
                text: m.text + "\n\n[Stream disconnected abnormally. Please retry.]",
              };
            }
            return m;
          }),
        }));
      }
    );

    set({ cancelStream: () => streamObj.cancel() });
  },

  loadHistory: async (id: string) => {
    try {
      const history = await chatApi.getMessages(id);
      set({ conversationId: id, messages: history, activeSteps: [], activeRunId: null });
    } catch (err) {
      console.error("Failed to load conversation history", err);
    }
  },

  startNewConversation: () => {
    set({ conversationId: null, messages: [], activeSteps: [], activeRunId: null, isStreaming: false });
  },

  clearConversation: () => {
    set({ messages: [], activeSteps: [], activeRunId: null, isStreaming: false });
  },
}));
