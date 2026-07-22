import React from "react";
import { useExecutive } from "../../hooks/useExecutive";
import { PlantHealthChart } from "./charts/PlantHealthChart";
import { DowntimeChart } from "./charts/DowntimeChart";
import { CostSavingsChart } from "./charts/CostSavingsChart";
import { AiUsageChart } from "./charts/AiUsageChart";
import { ComplianceChart } from "./charts/ComplianceChart";
import { RiskScoreChart } from "./charts/RiskScoreChart";
import { RoiChart } from "./charts/RoiChart";
import { Shield, Sparkles, TrendingUp, AlertTriangle } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const ExecutiveDashboardPage: React.FC = () => {
  const {
    summary,
    plantHealth,
    downtime,
    costSavings,
    aiUsage,
    compliance,
    riskScore,
    roi,
    filters,
    setFilters,
    isLoading,
  } = useExecutive();

  if (isLoading || !summary) {
    return (
      <div className="h-64 flex items-center justify-center font-sans">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#4F46E5] border-t-transparent" />
      </div>
    );
  }

  const getTrendBadge = (change: number) => {
    if (change >= 0) {
      return (
        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
          <TrendingUp className="h-3.5 w-3.5" /> +{change}%
        </span>
      );
    }
    return (
      <span className="text-[10px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
        -{Math.abs(change)}%
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8 font-sans space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111827] tracking-tight">Executive Control Tower</h1>
          <p className="text-xs text-[#6B7280]">
            Portfolio downtime metrics, AI integration savings and risk indices.
          </p>
        </div>

        {/* Global time range filter selector */}
        <select
          value={filters.timeRange}
          onChange={(e) => setFilters({ timeRange: e.target.value as any })}
          className="bg-white border border-[#E5E7EB] text-xs text-slate-700 px-3.5 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/10 w-full sm:w-40"
        >
          <option value="30">Last 30 Days</option>
          <option value="90">Last 90 Days</option>
          <option value="180">Last 180 Days</option>
          <option value="ytd">Year To Date</option>
        </select>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Plant Health */}
        <div className="p-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs space-y-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Plant Health</span>
            {getTrendBadge(summary.plantHealth.change)}
          </div>
          <span className="text-xl font-extrabold text-slate-800">{summary.plantHealth.current}%</span>
          <Link to="/assets" className="text-[10px] font-bold text-[#4F46E5] hover:underline">
            View Assets
          </Link>
        </div>

        {/* Downtime */}
        <div className="p-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs space-y-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Downtime Hours</span>
            {getTrendBadge(summary.downtimeHours.change)}
          </div>
          <span className="text-xl font-extrabold text-slate-800">{summary.downtimeHours.current} hrs</span>
          <Link to="/maintenance" className="text-[10px] font-bold text-[#4F46E5] hover:underline">
            Inspect Schedules
          </Link>
        </div>

        {/* Cost Savings */}
        <div className="p-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs space-y-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase">AI Cost Savings</span>
            {getTrendBadge(summary.costSavings.change)}
          </div>
          <span className="text-xl font-extrabold text-slate-800">${summary.costSavings.current.toLocaleString()}</span>
          <Link to="/chat" className="text-[10px] font-bold text-[#4F46E5] hover:underline">
            Query AI
          </Link>
        </div>

        {/* Compliance */}
        <div className="p-4 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs space-y-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Compliance Index</span>
            {getTrendBadge(summary.compliance.change)}
          </div>
          <span className="text-xl font-extrabold text-slate-800">{summary.compliance.current}%</span>
          <Link to="/compliance" className="text-[10px] font-bold text-[#4F46E5] hover:underline">
            Audit Posture
          </Link>
        </div>
      </div>

      {/* Main Charts Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlantHealthChart data={plantHealth} />
        <DowntimeChart data={downtime} />
        <CostSavingsChart data={costSavings} />
        <AiUsageChart data={aiUsage} />
        <ComplianceChart data={compliance} />
        <RiskScoreChart data={riskScore} />
        <RoiChart data={roi} />
      </div>
    </div>
  );
};

export default ExecutiveDashboardPage;
