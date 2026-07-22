import React, { useState } from "react";
import { useGraphSearch } from "../../hooks/useGraphSearch";
import { Search, Loader2 } from "lucide-react";
import { GraphNode } from "../../types/graph";

interface GraphSearchBarProps {
  onNodeSelect: (node: GraphNode) => void;
}

export const GraphSearchBar: React.FC<GraphSearchBarProps> = ({ onNodeSelect }) => {
  const [query, setQuery] = useState("");
  const { results, isLoading } = useGraphSearch(query);

  const handleSelect = (node: GraphNode) => {
    onNodeSelect(node);
    setQuery("");
  };

  return (
    <div className="absolute top-4 right-4 z-20 font-sans max-w-xs w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search node in Neo4j..."
          className="w-full bg-white border border-[#E5E7EB] focus:border-[#4F46E5] text-xs text-[#111827] pl-9 pr-8 py-2.5 rounded-xl shadow-sm focus:outline-none"
        />
        {isLoading && (
          <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 animate-spin text-slate-400" />
        )}
      </div>

      {query.length > 2 && results.length > 0 && (
        <div className="bg-white border border-[#E5E7EB] rounded-xl mt-1.5 shadow-lg overflow-hidden flex flex-col max-h-48 overflow-y-auto">
          {results.map((node) => (
            <button
              key={node.id}
              onClick={() => handleSelect(node)}
              className="text-left text-xs text-slate-700 hover:text-[#4F46E5] hover:bg-slate-50 p-2.5 border-b border-slate-100 last:border-0 flex items-center justify-between"
            >
              <span className="truncate max-w-[180px] font-semibold">{node.label}</span>
              <span className="text-[9px] uppercase font-bold text-slate-400 shrink-0">{node.type}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GraphSearchBar;
