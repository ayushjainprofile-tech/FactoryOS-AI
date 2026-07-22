import React from "react";
import { UploadJob } from "../../store/uploads";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface UploadProgressProps {
  jobs: UploadJob[];
}

export const UploadProgress: React.FC<UploadProgressProps> = ({ jobs }) => {
  if (jobs.length === 0) return null;

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-xs space-y-3 font-sans">
      <span className="text-[10px] uppercase font-bold text-slate-400 block pb-1 border-b border-[#F1F5F9]">
        Active Ingestion Queue
      </span>

      <div className="space-y-3 max-h-40 overflow-y-auto pr-1">
        {jobs.map((job) => (
          <div key={job.id} className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 truncate max-w-[160px]" title={job.fileName}>
                {job.fileName}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                {job.status === "uploading" && (
                  <span className="flex items-center gap-1 text-[10px] text-indigo-600 font-semibold">
                    <Loader2 className="h-3.5 w-3.5 animate-spin" /> {job.progress}%
                  </span>
                )}
                {job.status === "success" && (
                  <span className="flex items-center gap-1 text-[10px] text-green-600 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> Ingested
                  </span>
                )}
                {job.status === "failed" && (
                  <span className="flex items-center gap-1 text-[10px] text-red-600 font-semibold">
                    <AlertCircle className="h-3.5 w-3.5 text-red-500" /> Failed
                  </span>
                )}
              </div>
            </div>

            {job.status === "uploading" && (
              <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#4F46E5] rounded-full transition-all" style={{ width: `${job.progress}%` }} />
              </div>
            )}

            {job.error && (
              <p className="text-[10px] text-red-500 font-mono leading-relaxed">{job.error}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadProgress;
