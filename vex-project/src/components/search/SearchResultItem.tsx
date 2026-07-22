import React from "react";
import { SearchResultItem as ResultItem } from "../../types/search";
import { FileText, Briefcase, AlertOctagon, User, BookOpen, Clipboard, Terminal } from "lucide-react";

interface SearchResultItemProps {
  item: ResultItem;
}

export const SearchResultItem: React.FC<SearchResultItemProps> = ({ item }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText className="h-4.5 w-4.5 text-blue-500" />;
      case "asset":
        return <Briefcase className="h-4.5 w-4.5 text-purple-500" />;
      case "incident":
        return <AlertOctagon className="h-4.5 w-4.5 text-red-500" />;
      case "sop":
        return <BookOpen className="h-4.5 w-4.5 text-green-500" />;
      case "report":
        return <Clipboard className="h-4.5 w-4.5 text-orange-500" />;
      case "equipment":
        return <Terminal className="h-4.5 w-4.5 text-cyan-500" />;
      case "engineer":
        return <User className="h-4.5 w-4.5 text-indigo-500" />;
      default:
        return <FileText className="h-4.5 w-4.5 text-slate-500" />;
    }
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4 font-sans">
      <div className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
        {getIcon(item.entityType)}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-4">
          <a
            href={item.link}
            className="text-xs font-semibold text-slate-800 hover:text-[#4F46E5] hover:underline truncate"
          >
            {item.title}
          </a>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[9px] uppercase font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
              {item.entityType}
            </span>
            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">
              Score: {item.score.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Snippet with highlighted text */}
        <p
          className="text-xs text-slate-500 mt-2 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: item.snippet }}
        />

        {/* Scoping details */}
        <div className="flex items-center gap-4 text-[10px] text-slate-400 mt-4 pt-3 border-t border-[#F8FAFC]">
          {item.plantId && <span>Plant: {item.plantId}</span>}
          {item.owner && <span>Owner: {item.owner}</span>}
          {item.date && <span>Date: {new Date(item.date).toLocaleDateString()}</span>}
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;
