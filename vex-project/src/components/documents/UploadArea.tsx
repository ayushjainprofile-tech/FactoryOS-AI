import React, { useState, useRef } from "react";
import { UploadCloud, File, AlertTriangle } from "lucide-react";

interface UploadAreaProps {
  onFileSelect: (file: File) => void;
}

export const UploadArea: React.FC<UploadAreaProps> = ({ onFileSelect }) => {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");
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

  const validateFile = (file: File): boolean => {
    const allowedExtensions = [
      "pdf", "docx", "xlsx", "png", "jpg", "jpeg", "tiff", "eml", "pst", "dxf", "dwg"
    ];
    const fileExt = file.name.split(".").pop()?.toLowerCase();

    if (!fileExt || !allowedExtensions.includes(fileExt)) {
      setError(`Unsupported file format. Supported types: ${allowedExtensions.join(", ").toUpperCase()}`);
      return false;
    }

    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
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
        onFileSelect(droppedFile);
        setError("");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (validateFile(selectedFile)) {
        onFileSelect(selectedFile);
        setError("");
      }
    }
  };

  return (
    <div className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-xs px-4 py-3 rounded-xl flex items-start gap-2">
          <AlertTriangle className="h-4.5 w-4.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all ${
          dragActive
            ? "border-[#4F46E5] bg-[#EEF2FF]/40"
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

        <UploadCloud className="h-10 w-10 text-slate-400 mx-auto mb-2" />
        <p className="text-xs font-semibold text-slate-800">Drag & drop document here</p>
        <p className="text-[10px] text-slate-400 mt-1">or click to browse local files (PDF, Image, CAD, P&ID)</p>
      </div>
    </div>
  );
};

export default UploadArea;
