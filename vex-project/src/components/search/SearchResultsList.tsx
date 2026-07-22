import React from "react";
import { SearchResultItem as ResultItem } from "../../types/search";
import { SearchResultItem } from "./SearchResultItem";

interface SearchResultsListProps {
  results: ResultItem[];
  total: number;
}

export const SearchResultsList: React.FC<SearchResultsListProps> = ({ results, total }) => {
  return (
    <div className="space-y-4 font-sans">
      <div className="flex items-center justify-between text-xs text-[#6B7280] px-1">
        <span>Found {total} matches across scoped entities</span>
      </div>
      <div className="space-y-4">
        {results.map((item) => (
          <SearchResultItem key={`${item.entityType}-${item.id}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchResultsList;
