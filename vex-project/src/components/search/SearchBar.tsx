import React, { useRef, useEffect } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Ctrl+K focus shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <form onSubmit={onSubmit} className="max-w-3xl w-full mx-auto relative font-sans">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
      <input
        type="text"
        ref={inputRef}
        placeholder="Search mechanical manuals, engineering SOPs, or maintenance tickets..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-[#E5E7EB] focus:border-[#4F46E5] text-xs text-[#111827] pl-12 pr-4 py-3.5 rounded-[20px] shadow-sm focus:outline-none focus:ring-3 focus:ring-[#4F46E5]/10 transition-all placeholder:text-[#9CA3AF]"
      />
    </form>
  );
};

export default SearchBar;
