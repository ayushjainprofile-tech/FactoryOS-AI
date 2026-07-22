import React from "react";
import { Sparkles, History } from "lucide-react";

interface SearchSuggestionsProps {
  suggestions: string[];
  recentSearches: string[];
  onSelect: (query: string) => void;
  onClearHistory: () => void;
}

export const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  suggestions,
  recentSearches,
  onSelect,
  onClearHistory,
}) => {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-xs font-sans space-y-6 max-w-xl mx-auto w-full">
      {/* Recent searches */}
      {recentSearches.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between pb-1 border-b border-[#F1F5F9]">
            <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5">
              <History className="h-3.5 w-3.5" /> Recent Searches
            </span>
            <button onClick={onClearHistory} className="text-[9px] font-bold text-red-500 hover:text-red-600">
              Clear
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((q, idx) => (
              <button
                key={idx}
                onClick={() => onSelect(q)}
                className="text-xs text-slate-600 bg-slate-50 hover:bg-slate-100 px-3 py-1 rounded-xl transition-all"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Query suggestions */}
      {suggestions.length > 0 && (
        <div className="space-y-3">
          <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400 animate-pulse" /> Suggested Queries
          </span>
          <div className="flex flex-col gap-2">
            {suggestions.slice(0, 5).map((s, idx) => (
              <button
                key={idx}
                onClick={() => onSelect(s)}
                className="text-left text-xs text-slate-700 hover:text-[#4F46E5] hover:bg-indigo-50/50 p-2.5 rounded-xl border border-slate-100 hover:border-indigo-100 transition-all font-medium"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions;
