import React, { useState } from "react";
import { Send, StopCircle, RefreshCw } from "lucide-react";

interface ChatInputProps {
  onSend: (text: string) => void;
  onCancel?: () => void;
  onRegenerate?: () => void;
  isStreaming: boolean;
  canRegenerate: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSend,
  onCancel,
  onRegenerate,
  isStreaming,
  canRegenerate,
}) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || isStreaming) return;
    onSend(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl w-full mx-auto flex items-center gap-3 relative">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={isStreaming ? "AI agent is routing queries..." : "Query manuals, SOPs, or alerts..."}
        disabled={isStreaming}
        className="flex-1 bg-[#F8FAFC] border border-[#E5E7EB] focus:border-[#4F46E5] text-xs text-[#111827] px-4 py-3 rounded-2xl placeholder:text-[#9CA3AF] focus:outline-none focus:ring-3 focus:ring-[#4F46E5]/10 disabled:opacity-70 transition-all pr-12"
      />

      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
        {isStreaming ? (
          <button
            type="button"
            onClick={onCancel}
            className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-all"
            title="Stop generation"
          >
            <StopCircle className="h-4.5 w-4.5" />
          </button>
        ) : (
          <>
            {canRegenerate && (
              <button
                type="button"
                onClick={onRegenerate}
                className="p-1.5 text-slate-400 hover:text-[#4F46E5] hover:bg-indigo-50 rounded-lg transition-all"
                title="Regenerate last response"
              >
                <RefreshCw className="h-4.5 w-4.5" />
              </button>
            )}
            <button
              type="submit"
              disabled={!text.trim()}
              className="p-1.5 text-[#4F46E5] disabled:text-slate-300 rounded-lg transition-all"
            >
              <Send className="h-4.5 w-4.5" />
            </button>
          </>
        )}
      </div>
    </form>
  );
};

export default ChatInput;
