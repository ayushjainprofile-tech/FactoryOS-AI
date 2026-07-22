import React, { useState, useEffect, useRef } from "react";
import { useChatStore } from "../../store/chat";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { SuggestedQuestions } from "./SuggestedQuestions";
import { AgentTracePanel } from "./AgentTracePanel";
import { ConversationList } from "./ConversationList";
import { Trash2, Sparkles, Sidebar } from "lucide-react";

export const ChatPage: React.FC = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const {
    conversationId,
    messages,
    activeSteps,
    isStreaming,
    sendMessage,
    cancelStream,
    clearConversation,
    loadHistory,
    startNewConversation,
  } = useChatStore();

  const handleSend = async (text: string) => {
    await sendMessage(text);
  };

  const handleRegenerate = async () => {
    const userMsgs = messages.filter((m) => m.sender === "user");
    if (userMsgs.length === 0) return;
    const lastUserText = userMsgs[userMsgs.length - 1].text;
    await sendMessage(lastUserText);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isStreaming]);

  // Mock list of conversation items
  const mockConversations = [
    { id: "conv-1", title: "Gujarat Boiler Failure", timestamp: new Date().toISOString() },
    { id: "conv-2", title: "ISO 9001 Compliance Audit", timestamp: new Date().toISOString() },
  ];

  const lastAssistantMessage = messages.slice().reverse().find((m) => m.sender === "assistant");
  const suggestions = lastAssistantMessage?.suggestedQuestions || [];

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans">
      {/* LEFT SIDEBAR: CONVERSATION LIST */}
      <ConversationList
        conversations={mockConversations}
        activeId={conversationId}
        onSelect={(id) => loadHistory(id)}
        onNew={() => startNewConversation()}
      />

      <div className="flex-1 flex flex-col min-w-0">
        {/* HEADER */}
        <header className="h-16 border-b border-[#E5E7EB] bg-white flex items-center justify-between px-8 z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-[#4F46E5] to-[#6366F1] flex items-center justify-center shadow-md">
              <Sparkles className="h-4.5 w-4.5 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#111827]">Industrial AI Assistant</h2>
              <p className="text-[10px] text-slate-500">Connected to FactoryOS LangGraph RAG Agent</p>
            </div>
          </div>

          <button
            onClick={() => clearConversation()}
            className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
            title="Clear Chat History"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </header>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto py-8 space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center max-w-sm mx-auto px-4">
              <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-[#4F46E5] mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">Every Document. Every Machine. One AI Brain.</h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Query FactoryOS about turbine metrics, compliance scores, drawing schematics, or active alerts.
              </p>
            </div>
          ) : (
            <>
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
              {!isStreaming && suggestions.length > 0 && (
                <SuggestedQuestions questions={suggestions} onQuestionClick={handleSend} />
              )}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* INPUT CONTAINER */}
        <div className="p-6 border-t border-[#E5E7EB] bg-white shrink-0">
          <ChatInput
            onSend={handleSend}
            onCancel={() => cancelStream?.()}
            onRegenerate={handleRegenerate}
            isStreaming={isStreaming}
            canRegenerate={messages.length > 1}
          />
        </div>
      </div>

      {/* RIGHT SIDE PANEL: LIVE LANGGRAPH EXECUTION STEPS */}
      <AgentTracePanel steps={activeSteps} />
    </div>
  );
};

export default ChatPage;
