import React from "react";
import { ProtectedRoute } from "../auth/ProtectedRoute";
import { useAuthStore } from "../../store/auth";
import { PlantHealthWidget } from "./PlantHealthWidget";
import { CriticalAssetsWidget } from "./CriticalAssetsWidget";
import { ActiveAlertsWidget } from "./ActiveAlertsWidget";
import { ComplianceScoreWidget } from "./ComplianceScoreWidget";
import { AiInvestigationsWidget } from "./AiInvestigationsWidget";
import { DocumentsIndexedWidget } from "./DocumentsIndexedWidget";
import { Bell, Sparkles } from "lucide-react";

export const DashboardPage: React.FC = () => {
  const { user, logout } = useAuthStore();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
        {/* HEADER */}
        <header className="h-16 border-b border-[#E5E7EB] bg-white flex items-center justify-between px-8 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-[#4F46E5] to-[#6366F1] flex items-center justify-center shadow-md shadow-indigo-500/10">
              <Sparkles className="h-4.5 w-4.5 text-white" />
            </div>
            <span className="text-base font-bold text-[#111827] tracking-tight">FactoryOS AI</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F0FDF4] border border-[#DCFCE7] text-[10px] font-semibold text-[#166534]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] animate-pulse"></span>
              <span>AI Agent Active</span>
            </div>

            <button className="relative p-2 rounded-xl bg-white border border-[#E5E7EB] text-[#4B5563] hover:text-[#111827] hover:bg-[#F8FAFC] transition-all">
              <Bell className="h-4 w-4" />
            </button>

            <button
              onClick={() => logout()}
              className="flex items-center gap-3 pl-3 border-l border-[#E5E7EB] text-left hover:opacity-85 transition-opacity"
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#4F46E5] to-[#6366F1] text-white font-bold flex items-center justify-center text-xs">
                {user?.fullName ? user.fullName.split(" ").map((n) => n[0]).join("") : "OP"}
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-semibold text-[#111827]">{user?.fullName || "Operator"}</div>
                <div className="text-[10px] text-[#6B7280]">Sign Out</div>
              </div>
            </button>
          </div>
        </header>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 max-w-[1700px] w-full mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-[#111827] tracking-tight">Enterprise Overview</h1>
            <p className="text-sm text-[#6B7280] mt-0.5">
              Welcome back, {user?.fullName?.split(" ")[0] || "Operator"}. Here is your plant telemetry metrics overview.
            </p>
          </div>

          {/* TOP ROW: 4 KPI CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PlantHealthWidget plantId="plant-01" />
            <CriticalAssetsWidget />
            <ActiveAlertsWidget />
            <ComplianceScoreWidget />
          </div>

          {/* BOTTOM ROW: 2 DETAILS CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AiInvestigationsWidget />
            <DocumentsIndexedWidget />
          </div>
        </div>

        {/* FOOTER */}
        <footer className="border-t border-[#E5E7EB] bg-white px-8 py-4 text-[10px] text-[#6B7280] flex items-center justify-between mt-auto">
          <div>FactoryOS AI Enterprise • SaaS Edition v2.4</div>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#111827] cursor-pointer">Documentation</span>
            <span>•</span>
            <span className="hover:text-[#111827] cursor-pointer">API Status</span>
          </div>
        </footer>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
