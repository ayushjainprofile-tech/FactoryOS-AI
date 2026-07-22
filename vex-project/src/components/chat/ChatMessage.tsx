import React, { useState } from "react";
import { Message, Citation } from "../../types/chat";
import { Copy, ThumbsUp, ThumbsDown, Check, Info } from "lucide-react";

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);
  const [selectedCitation, setSelectedCitation] = useState<Citation | null>(null);

  const isUser = message.sender === "user";

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getConfidenceLevel = (score?: number) => {
    if (score === undefined) return null;
    if (score >= 0.8) return { label: "High Confidence", color: "text-[#166534] bg-[#F0FDF4] border-[#DCFCE7]" };
    if (score >= 0.5) return { label: "Medium Confidence", color: "text-[#D97706] bg-[#FFFBEB] border-[#FEF3C7]" };
    return { label: "Low Confidence (Verify)", color: "text-[#DC2626] bg-[#FEF2F2] border-[#FEE2E2]" };
  };

  const confidence = getConfidenceLevel(message.confidence);

  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} mb-6 max-w-3xl w-full mx-auto px-4`}>
      <div
        className={`rounded-2xl p-5 text-sm leading-relaxed border ${
          isUser
            ? "bg-[#4F46E5] text-white border-transparent shadow-md"
            : "bg-white text-slate-800 border-[#E5E7EB] shadow-xs"
        }`}
      >
        <p className="whitespace-pre-wrap">{message.text}</p>

        {/* Inline citations references preview */}
        {!isUser && message.citations && message.citations.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Sources</span>
            <div className="flex flex-wrap gap-2">
              {message.citations.map((cit, idx) => (
                <button
                  key={cit.id}
                  onClick={() => setSelectedCitation(cit)}
                  className="text-[11px] font-medium text-[#4F46E5] bg-[#EEF2FF] hover:bg-[#E0E7FF] border border-[#C7D2FE] px-2 py-0.5 rounded transition-all"
                >
                  [{idx + 1}] {cit.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Meta Indicators (Confidence, Copy, Feedback) */}
      {!isUser && (
        <div className="flex items-center justify-between w-full mt-2 px-1 text-xs">
          <div className="flex items-center gap-3">
            {confidence && (
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${confidence.color}`}>
                {confidence.label}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2.5 text-slate-400">
            <button onClick={handleCopy} className="hover:text-slate-700 transition-colors p-1" title="Copy response">
              {copied ? <Check className="h-3.5 w-3.5 text-green-600" /> : <Copy className="h-3.5 w-3.5" />}
            </button>
            <button
              onClick={() => setFeedback(feedback === "up" ? null : "up")}
              className={`hover:text-[#22C55E] transition-colors p-1 ${feedback === "up" ? "text-[#22C55E]" : ""}`}
            >
              <ThumbsUp className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setFeedback(feedback === "down" ? null : "down")}
              className={`hover:text-[#EF4444] transition-colors p-1 ${feedback === "down" ? "text-[#EF4444]" : ""}`}
            >
              <ThumbsDown className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Source snippet detail overlay */}
      {selectedCitation && (
        <div className="fixed inset-0 bg-[#0F172A]/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 max-w-lg w-full shadow-2xl relative">
            <h3 className="font-bold text-[#111827] text-base mb-2">{selectedCitation.title}</h3>
            <p className="text-xs text-slate-500 mb-4">Document Source ID: {selectedCitation.documentId}</p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 leading-relaxed font-mono whitespace-pre-wrap max-h-48 overflow-y-auto">
              "{selectedCitation.snippet}"
            </div>
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setSelectedCitation(null)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl"
              >
                Close Reference
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
