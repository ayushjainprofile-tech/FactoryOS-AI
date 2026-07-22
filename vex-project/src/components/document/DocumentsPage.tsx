import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { documentApi } from "../../api/document";
import { DocumentList } from "./DocumentList";
import { DocumentUpload } from "./DocumentUpload";
import { DocumentDetail } from "./DocumentDetail";
import { Document } from "../../types/document";
import { Search, SlidersHorizontal, Plus, FileText } from "lucide-react";
import { ProtectedRoute } from "../auth/ProtectedRoute";

export const DocumentsPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [showUpload, setShowUpload] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  const queryClient = useQueryClient();

  const { data: documents = [], isLoading } = useQuery({
    queryKey: ["documents", { search, status }],
    queryFn: () => documentApi.getDocumentList({ search, status }),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => documentApi.deleteDocument(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["documents"] });
      setSelectedDoc(null);
    },
  });

  const regenerateMutation = useMutation({
    mutationFn: (id: string) => documentApi.regeneratePipeline(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["documents"] });
    },
  });

  return (
    <ProtectedRoute allowedRoles={["admin", "engineer"]}>
      <div className="min-h-screen bg-[#F8FAFC] p-8 font-sans space-y-8">
        {selectedDoc ? (
          <DocumentDetail
            document={selectedDoc}
            onBack={() => setSelectedDoc(null)}
            onDelete={(id) => deleteMutation.mutate(id)}
            onRegenerate={(id) => regenerateMutation.mutate(id)}
          />
        ) : (
          <>
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-[#111827] tracking-tight">Document Intelligence</h1>
                <p className="text-xs text-[#6B7280]">Upload manuals, PDFs, scans, and P&ID diagrams into memory.</p>
              </div>

              <button
                onClick={() => setShowUpload(!showUpload)}
                className="px-4 py-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold rounded-xl shadow-md shadow-indigo-500/10 flex items-center gap-2"
              >
                <Plus className="h-4 w-4" /> {showUpload ? "Hide Uploader" : "Upload File"}
              </button>
            </div>

            {/* Drag Drop Uploader drawer */}
            {showUpload && (
              <div className="py-4">
                <DocumentUpload onSuccess={() => queryClient.invalidateQueries({ queryKey: ["documents"] })} />
              </div>
            )}

            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-3 bg-white border border-[#E5E7EB] p-4 rounded-2xl shadow-xs">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by file name, plant, or tags..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-[#E5E7EB] focus:border-[#4F46E5] text-xs text-[#111827] pl-10 pr-4 py-2.5 rounded-xl placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10"
                />
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="bg-[#F8FAFC] border border-[#E5E7EB] text-xs text-slate-700 px-3 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 w-full sm:w-40"
                >
                  <option value="">All Statuses</option>
                  <option value="ready">Ready</option>
                  <option value="processing">Processing</option>
                  <option value="failed">Failed</option>
                </select>
              </div>
            </div>

            {/* Document list table */}
            {isLoading ? (
              <div className="h-64 flex items-center justify-center bg-white border border-[#E5E7EB] rounded-2xl">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#4F46E5] border-t-transparent" />
              </div>
            ) : (
              <DocumentList
                documents={documents}
                onSelect={(doc) => setSelectedDoc(doc)}
                onDelete={(id) => deleteMutation.mutate(id)}
                onRegenerate={(id) => regenerateMutation.mutate(id)}
              />
            )}
          </>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default DocumentsPage;
