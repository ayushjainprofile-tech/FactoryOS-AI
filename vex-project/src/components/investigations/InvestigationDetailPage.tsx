import React from "react";
import { useInvestigationDetail } from "../../hooks/useInvestigationDetail";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { TriggerSection } from "./sections/TriggerSection";
import { TimelineSection } from "./sections/TimelineSection";
import { EvidenceSection } from "./sections/EvidenceSection";
import { RootCauseSection } from "./sections/RootCauseSection";
import { RecommendationsSection } from "./sections/RecommendationsSection";
import { ReportSection } from "./sections/ReportSection";

interface InvestigationDetailPageProps {
  onBack: () => void;
}

export const InvestigationDetailPage: React.FC<InvestigationDetailPageProps> = ({ onBack }) => {
  const { investigation, isLoading, activeStep, setActiveStep } = useInvestigationDetail();

  if (isLoading) {
    return <div className="h-64 flex items-center justify-center font-sans">Loading investigation profile...</div>;
  }

  if (!investigation) {
    return <div className="h-64 flex items-center justify-center font-sans text-xs text-red-500">Failed to load investigation details.</div>;
  }

  const steps = [
    { label: "Trigger" },
    { label: "Timeline" },
    { label: "Evidence" },
    { label: "Root Cause" },
    { label: "Recommendations" },
    { label: "Report" },
  ];

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-6 shadow-sm font-sans space-y-6 max-w-4xl mx-auto">
      {/* Back header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
        <button onClick={onBack} className="text-xs text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1.5">
          <ArrowLeft className="h-4 w-4" /> Back to List
        </button>

        <span className="text-[10px] font-bold uppercase text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
          Status: {investigation.status}
        </span>
      </div>

      {/* Title */}
      <div>
        <h2 className="text-base font-bold text-slate-800">{investigation.title}</h2>
        <span className="text-[10px] text-slate-400 block mt-0.5">Plant ID: {investigation.plantId} • Severity: {investigation.severity}</span>
      </div>

      {/* Stepper slider */}
      <div className="flex items-center justify-between gap-2 border-y border-[#F1F5F9] py-3.5 select-none overflow-x-auto no-scrollbar">
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`flex items-center gap-1.5 text-left transition-all shrink-0 px-3 py-1 rounded-lg ${
              activeStep === idx
                ? "bg-slate-900 text-white font-bold"
                : "text-slate-400 hover:text-slate-700 font-semibold"
            }`}
          >
            <span className={`h-4.5 w-4.5 rounded-full flex items-center justify-center text-[10px] font-bold ${
              activeStep === idx ? "bg-white text-slate-900" : "bg-slate-100 text-slate-400"
            }`}>
              {idx + 1}
            </span>
            <span className="text-[10px]">{step.label}</span>
          </button>
        ))}
      </div>

      {/* Step Component render */}
      <div className="py-4">
        {activeStep === 0 && <TriggerSection investigation={investigation} />}
        {activeStep === 1 && <TimelineSection investigation={investigation} />}
        {activeStep === 2 && <EvidenceSection investigation={investigation} />}
        {activeStep === 3 && <RootCauseSection investigation={investigation} />}
        {activeStep === 4 && <RecommendationsSection investigation={investigation} />}
        {activeStep === 5 && <ReportSection investigation={investigation} />}
      </div>

      {/* Step navigation actions */}
      <div className="flex items-center justify-between pt-4 border-t border-[#F1F5F9]">
        <button
          disabled={activeStep === 0}
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          className="px-3.5 py-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600 disabled:opacity-40 disabled:hover:bg-slate-50 font-semibold text-xs rounded-xl transition-all flex items-center gap-1"
        >
          <ChevronLeft className="h-4 w-4" /> Previous
        </button>

        <button
          disabled={activeStep === steps.length - 1}
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
          className="px-3.5 py-2 bg-slate-900 border border-slate-950 hover:bg-slate-850 text-white disabled:opacity-40 disabled:hover:bg-slate-900 font-semibold text-xs rounded-xl transition-all flex items-center gap-1"
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default InvestigationDetailPage;
