import React from "react";
import { Document } from "../../types/documents";
import { DocumentRow } from "./DocumentRow";

interface DocumentListProps {
  documents: Document[];
  onSelect: (doc: Document) => void;
  onDelete: (id: string) => void;
  onRegenerate: (id: string) => void;
}

export const DocumentList: React.FC<DocumentListProps> = ({
  documents,
  onSelect,
  onDelete,
  onRegenerate,
}) => {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] overflow-hidden shadow-sm font-sans">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#F1F5F9] bg-[#F8FAFC]">
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Name / Type</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Scoping</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Status</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Uploaded At</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-[#6B7280] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F5F9]">
            {documents.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-xs text-slate-400">
                  No documents found matching the filters.
                </td>
              </tr>
            ) : (
              documents.map((doc) => (
                <DocumentRow
                  key={doc.id}
                  document={doc}
                  onSelect={onSelect}
                  onDelete={onDelete}
                  onRegenerate={onRegenerate}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentList;
