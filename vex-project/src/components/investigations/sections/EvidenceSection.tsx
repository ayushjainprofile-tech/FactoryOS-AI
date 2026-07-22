import React from "react";
import { InvestigationDetail } from "../../../types/investigations";
import { FileText, Camera, UploadCloud } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface EvidenceSectionProps {
  investigation: InvestigationDetail;
}

export const EvidenceSection: React.FC<EvidenceSectionProps> = ({ investigation }) => {
  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-400 uppercase">Evidence & Material Index</span>
        <button className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[10px] rounded-lg transition-all flex items-center gap-1.5 border border-slate-200">
          <UploadCloud className="h-3.5 w-3.5" /> Upload File
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {investigation.evidence.map((item) => (
          <div key={item.id} className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl space-y-3 flex flex-col justify-between">
            <div className="flex items-start gap-2.5">
              <div className="h-7 w-7 rounded-lg bg-indigo-50 flex items-center justify-center text-[#4F46E5] shrink-0">
                {item.type === "image" ? <Camera className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
              </div>
              <div>
                <span className="text-xs font-bold text-slate-700 block leading-normal">{item.title}</span>
                <span className="text-[10px] text-slate-400 font-medium block mt-0.5">Source: {item.source}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-200/50 text-[10px] text-slate-400 font-medium">
              <span>Uploaded: {new Date(item.date).toLocaleDateString()}</span>
              <Link to="/documents" className="text-[#4F46E5] hover:underline font-bold">
                Inspect Document
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvidenceSection;
