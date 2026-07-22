import React, { useState } from "react";
import { useDocuments } from "../../hooks/useDocuments";
import { useUploads } from "../../hooks/useUploads";
import { DocumentList } from "./DocumentList";
import { UploadArea } from "./UploadArea";
import { UploadProgress } from "./UploadProgress";
import { DocumentDetailPage } from "./DocumentDetailPage";
import { Document } from "../../types/documents";
import { Search, Plus } from "lucide-react";
import { ProtectedRoute } from "../auth/ProtectedRoute";

export const DocumentsPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [showUpload, setShowUpload] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  // Metadata form states
  const [plantId, setPlantId] = useState("");
  const [equipmentId, setEquipmentId] = useState("");
  const [tags, setTags] = useState("");

  const { documents, isLoading, deleteDocument, regeneratePipeline, refetch } = useDocuments({
    search,
    status,
  });

  const { jobs, uploadFile } = useUploads();

  const handleFileSelect = async (file: File) => {
    const tagList = tags.split(",").map((t) => t.trim()).filter((t) => t !== "");
    await uploadFile(file, {
      title: file.name.split(".")[0],
      plantId,
      equipmentId,
      tags: tagList,
    });
    setPlantId("");
    setEquipmentId("");
    setTags("");
    refetch();
  };

  return (
    <ProtectedRoute allowedRoles={["admin", "engineer"]}>
      <div className="min-h-screen bg-[#F8FAFC] p-8 font-sans space-y-8">
        {selectedDoc ? (
          <DocumentDetailPage
            document={selectedDoc}
            onBack={() => setSelectedDoc(null)}
            onDelete={async (id) => {
              await deleteDocument(id);
              setSelectedDoc(null);
            }}
            onRegenerate={async (id) => {
              await regeneratePipeline(id);
              refetch();
            }}
          />
        ) : (
          <>
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

            {showUpload && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <UploadArea onFileSelect={handleFileSelect} />

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 bg-white border border-[#E5E7EB] p-5 rounded-2xl">
                    <div>
                      <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Plant Scoping
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. plant-01"
                        value={plantId}
                        onChange={(e) => setPlantId(e.target.value)}
                        className="w-full bg-[#F8FAFC] border border-[#E5E7EB] focus:border-[#4F46E5] text-xs text-[#111827] px-3.5 py-2 rounded-xl focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Equipment Tag
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. pump-21"
                        value={equipmentId}
                        onChange={(e) => setEquipmentId(e.target.value)}
                        className="w-full bg-[#F8FAFC] border border-[#E5E7EB] focus:border-[#4F46E5] text-xs text-[#111827] px-3.5 py-2 rounded-xl focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Tags (Comma-separated)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. SOP, calibration"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        className="w-full bg-[#F8FAFC] border border-[#E5E7EB] focus:border-[#4F46E5] text-xs text-[#111827] px-3.5 py-2 rounded-xl focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <UploadProgress jobs={jobs} />
                </div>
              </div>
            )}

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

            {isLoading ? (
              <div className="h-64 flex items-center justify-center bg-white border border-[#E5E7EB] rounded-2xl">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#4F46E5] border-t-transparent" />
              </div>
            ) : (
              <DocumentList
                documents={documents}
                onSelect={(doc) => setSelectedDoc(doc)}
                onDelete={async (id) => {
                  await deleteDocument(id);
                  refetch();
                }}
                onRegenerate={async (id) => {
                  await regeneratePipeline(id);
                  refetch();
                }}
              />
            )}
          </>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default DocumentsPage;
