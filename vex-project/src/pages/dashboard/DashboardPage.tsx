import React from "react";
import { ProtectedRoute } from "../../components/auth/ProtectedRoute";
import { useAuthStore } from "../../store/auth";

export const DashboardPage: React.FC = () => {
  const { user, logout } = useAuthStore();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#F8FAFC] p-8 text-[#111827] font-sans">
        <div className="max-w-4xl mx-auto bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-6 mb-6">
            <div>
              <h1 className="text-2xl font-bold">Industrial Overview</h1>
              <p className="text-sm text-[#6B7280]">Welcome back, {user?.fullName || "Operator"}.</p>
            </div>
            <button
              onClick={() => logout()}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-all"
            >
              Sign Out
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#EEF2FF] border border-[#C7D2FE] p-6 rounded-xl">
              <h3 className="font-bold text-[#4F46E5]">Roles & Privileges</h3>
              <p className="text-xs text-slate-600 mt-1">Authorized scopes: {user?.roles?.join(", ") || "None"}</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#DCFCE7] p-6 rounded-xl">
              <h3 className="font-bold text-[#166534]">System Status</h3>
              <p className="text-xs text-slate-600 mt-1">Precision target status: Optimal (99.4%)</p>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
