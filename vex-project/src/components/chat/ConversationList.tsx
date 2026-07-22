import React from "react";
import { MessageSquare, Plus, Trash2 } from "lucide-react";

interface Conversation {
  id: string;
  title: string;
  timestamp: string;
}

interface ConversationListProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onNew: () => void;
  onDelete?: (id: string) => void;
}

export const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  activeId,
  onSelect,
  onNew,
  onDelete,
}) => {
  return (
    <div className="bg-white border-r border-[#E5E7EB] w-64 h-full flex flex-col flex-shrink-0 font-sans">
      <div className="p-4 border-b border-[#E5E7EB]">
        <button
          onClick={onNew}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold py-2.5 text-xs transition-all shadow-sm"
        >
          <Plus className="h-4 w-4" />
          <span>New Chat Session</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {conversations.length === 0 ? (
          <div className="text-center text-xs text-slate-400 py-8">No past chat logs.</div>
        ) : (
          conversations.map((conv) => (
            <div
              key={conv.id}
              className={`group flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                activeId === conv.id
                  ? "bg-[#EEF2FF] text-[#4F46E5]"
                  : "text-[#374151] hover:bg-[#F8FAFC]"
              }`}
              onClick={() => onSelect(conv.id)}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <MessageSquare className={`h-4 w-4 shrink-0 ${activeId === conv.id ? "text-[#4F46E5]" : "text-slate-400"}`} />
                <span className="truncate pr-2">{conv.title}</span>
              </div>

              {onDelete && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(conv.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-opacity p-0.5"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ConversationList;
