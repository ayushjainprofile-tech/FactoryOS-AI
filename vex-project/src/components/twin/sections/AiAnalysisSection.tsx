import React from "react";
import { AlertCircle, CheckCircle2, Bot } from "lucide-react";

interface AiAnalysisSectionProps {
  analysis: {
    healthScore: number;
    anomalies: string[];
    recommendations: string[];
  };
}

export const AiAnalysisSection: React.FC<AiAnalysisSectionProps> = ({ analysis }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-50 border border-green-200";
    if (score >= 50) return "text-yellow-600 bg-yellow-50 border border-yellow-200";
    return "text-red-600 bg-red-50 border border-red-200";
  };

  return (
    <div className="space-y-5 font-sans">
      <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
        <div className="h-7 w-7 bg-indigo-50 border border-indigo-100 rounded-lg flex items-center justify-center">
          <Bot className="h-4 w-4 text-[#4F46E5]" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase">AI Diagnosis Telemetry</span>
        </div>
      </div>

      {/* Health score badge */}
      <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl">
        <span className="text-xs font-semibold text-slate-700">Health Index Score</span>
        <span className={`text-base font-extrabold px-3 py-1 rounded-xl ${getScoreColor(analysis.healthScore)}`}>
          {analysis.healthScore}%
        </span>
      </div>

      {/* Anomalies list */}
      <div className="space-y-2">
        <span className="text-[10px] font-bold text-slate-400 uppercase block">Anomalies Detected</span>
        {analysis.anomalies.length === 0 ? (
          <p className="text-xs text-green-600 flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4" /> Healthy. No anomalous signals.
          </p>
        ) : (
          <div className="space-y-1.5">
            {analysis.anomalies.map((anom, idx) => (
              <p key={idx} className="text-xs text-red-600 flex items-start gap-1.5 bg-red-50/50 p-2 rounded-lg border border-red-100 font-medium">
                <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                <span>{anom}</span>
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Recommendations */}
      <div className="space-y-2">
        <span className="text-[10px] font-bold text-slate-400 uppercase block">Suggested Remediation Actions</span>
        <ul className="space-y-1.5">
          {analysis.recommendations.map((rec, idx) => (
            <li key={idx} className="text-xs text-slate-600 flex items-start gap-2 bg-[#F8FAFC] border border-[#E5E7EB] p-2.5 rounded-xl leading-relaxed">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
              <span>{rec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AiAnalysisSection;
