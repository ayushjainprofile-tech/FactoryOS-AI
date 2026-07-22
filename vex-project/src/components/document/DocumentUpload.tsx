import React, { useState, useRef } from "react";
import { documentApi } from "../../api/document";
import { UploadCloud, File, AlertTriangle, CheckCircle, Loader2 } from "lucide-react";

interface DocumentUploadProps {
  onSuccess: () => void;
}

export const DocumentUpload: React.FC<DocumentUploadProps> = ({ onSuccess }) => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [plantId, setPlantId] = useState("");
  const [equipmentId, setEquipmentId] = useState("");
  const [tags, setTags] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFile = (selectedFile: File): boolean => {
    const allowedExtensions = [
      "pdf", "docx", "xlsx", "png", "jpg", "jpeg", "tiff", "eml", "pst", "dxf", "dwg"
    ];
    const fileExt = selectedFile.name.split(".").pop()?.toLowerCase();

    if (!fileExt || !allowedExtensions.includes(fileExt)) {
      setError(`Unsupported file format. Supported types: ${allowedExtensions.join(", ").toUpperCase()}`);
      return false;
    }

    const maxSize = 100 * 1024 * 1024; // 100MB
    if (selectedFile.size > maxSize) {
      setError("File exceeds maximum allowed size (100MB)");
      return false;
    }

    return true;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (validateFile(droppedFile)) {
        setFile(droppedFile);
        setTitle(droppedFile.name.split(".")[0]);
        setError("");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
        setTitle(selectedFile.name.split(".")[0]);
        setError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || isUploading) return;

    setIsUploading(true);
    setProgress(0);
    setError("");
    setSuccess(false);

    try {
      const tagList = tags.split(",").map((t) => t.trim()).filter((t) => t !== "");
      await documentApi.uploadFile(file, {
        title,
        plantId,
        equipmentId,
        tags: tagList,
      });

      setSuccess(true);
      setFile(null);
      setTitle("");
      setPlantId("");
      setEquipmentId("");
      setTags("");
      onSuccess();
    } catch (err: any) {
      setError(err.message || "Failed to upload document. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-6 shadow-sm font-sans max-w-xl w-full mx-auto">
      <h3 className="text-base font-bold text-[#111827] mb-4">Ingest Industrial Document</h3>

      {error && (
        <div className="bg-red-50/80 border border-red-200 text-red-600 text-xs px-4 py-3 rounded-xl mb-4 flex items-start gap-2">
          <AlertTriangle className="h-4.5 w-4.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 text-[#166534] text-xs px-4 py-3 rounded-xl mb-4 flex items-start gap-2">
          <CheckCircle className="h-4.5 w-4.5 shrink-0" />
          <span>Document uploaded successfully! Async processing pipeline triggered.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* DRAG AND DROP ZONE */}
        <div
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all ${
            dragActive
              ? "border-[#4F46E5] bg-[#EEF2FF]/40"
              : file
              ? "border-[#22C55E] bg-[#F0FDF4]/20"
              : "border-[#E5E7EB] hover:border-[#4F46E5] hover:bg-[#F8FAFC]"
          }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept=".pdf,.docx,.xlsx,.png,.jpg,.jpeg,.tiff,.eml,.pst,.dxf,.dwg"
          />

          {file ? (
            <div className="text-center">
              <File className="h-10 w-10 text-[#22C55E] mx-auto mb-2" />
              <p className="text-xs font-semibold text-slate-800 truncate max-w-[250px]">{file.name}</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
            </div>
          ) : (
            <div className="text-center">
              <UploadCloud className="h-10 w-10 text-slate-400 mx-auto mb-2" />
              <p className="text-xs font-semibold text-slate-800">Drag & drop document here</p>
              <p className="text-[10px] text-slate-400 mt-1">or click to browse local files</p>
            </div>
          )}
        </div>

        {/* METADATA FIELDS */}
        {file && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="sm:col-span-2">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Document Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full bg-[#F8FAFC] border border-[#E5E7EB] focus:border-[#4F46E5] text-xs text-[#111827] px-3.5 py-2.5 rounded-xl placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Plant Scoping
              </label>
              <input
                type="text"
                placeholder="e.g. plant-01"
                value={plantId}
                onChange={(e) => setPlantId(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-[#E5E7EB] focus:border-[#4F46E5] text-xs text-[#111827] px-3.5 py-2.5 rounded-xl placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Equipment Tag
              </label>
              <input
                type="text"
                placeholder="e.g. pump-21"
                value={equipmentId}
                onChange={(e) => setEquipmentId(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-[#E5E7EB] focus:border-[#4F46E5] text-xs text-[#111827] px-3.5 py-2.5 rounded-xl placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Tags (Comma-separated)
              </label>
              <input
                type="text"
                placeholder="e.g. SOP, calibration, manual"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-[#E5E7EB] focus:border-[#4F46E5] text-xs text-[#111827] px-3.5 py-2.5 rounded-xl placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={!file || isUploading}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold py-3 text-xs transition-all disabled:opacity-50"
        >
          {isUploading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Uploading File ({progress}%)</span>
            </>
          ) : (
            <span>Trigger Ingestion Pipeline</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default DocumentUpload;
