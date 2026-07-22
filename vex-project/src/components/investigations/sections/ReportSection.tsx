import React from "react";
import { InvestigationDetail } from "../../../types/investigations";
import { useInvestigationDetail } from "../../../hooks/useInvestigationDetail";
import { Play, Download, Check } from "lucide-react";

interface ReportSectionProps {
  investigation: InvestigationDetail;
}

export const ReportSection: React.FC<ReportSectionProps> = ({ investigation }) => {
  const { generateReport, updateInvestigation } = useInvestigationDetail();

  const handleGenerate = async () => {
    await generateReport();
  };

  const handleFinalize = async () => {
    await updateInvestigation({ status: "finalized" });
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-400 uppercase">Final Investigation Report Summary</span>
        <div className="flex items-center gap-2">
          <button
            onClick={handleGenerate}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold text-[10px] rounded-lg transition-all flex items-center gap-1.5"
          >
            <Download className="h-3.5 w-3.5" /> PDF Preview
          </button>
          {investigation.status !== "finalized" && (
            <button
              onClick={handleFinalize}
              className="px-3 py-1.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-[10px] rounded-lg transition-all flex items-center gap-1"
            >
              <Check className="h-3.5 w-3.5" /> Mark Finalized
            </button>
          )}
        </div>
      </div>

      <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl space-y-4">
        <div>
          <h4 className="text-xs font-bold text-slate-800">{investigation.title}</h4>
          <span className="text-[10px] text-slate-400 block mt-0.5">Report Status: {investigation.status}</span>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-200 text-xs text-slate-600 font-medium leading-relaxed">
          <p>
            <strong>Trigger alarm:</strong> {investigation.alarmRef} at {investigation.plantId}.
          </p>
          <p>
            <strong>Diagnostic timeline:</strong> Chronological events verified: {investigation.timeline.length} logs mapped.
          </p>
          <p>
            <strong>Root cause ICAM analysis:</strong> {investigation.rootCause.primary}.
          </p>
          <p>
            <strong>Recommendations Action Plan:</strong> {investigation.recommendations.length} preventive items defined.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportSection;
