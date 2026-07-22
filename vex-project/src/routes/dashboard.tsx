import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  LayoutDashboard,
  Bot,
  FolderKanban,
  BarChart3,
  FileText,
  Users,
  CreditCard,
  Settings,
  Search,
  Bell,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ArrowLeft,
  DollarSign,
  Briefcase,
  Zap,
  CheckCircle,
  MoreVertical,
  Send,
  Plus,
  SlidersHorizontal,
  Wrench,
  Shield,
  ShieldAlert,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { ProtectedRoute } from "../components/auth/protected-route";
import { PlantHealthWidget } from "../components/dashboard/PlantHealthWidget";
import { CriticalAssetsWidget } from "../components/dashboard/CriticalAssetsWidget";
import { ActiveAlertsWidget } from "../components/dashboard/ActiveAlertsWidget";
import { ComplianceScoreWidget } from "../components/dashboard/ComplianceScoreWidget";
import { AiInvestigationsWidget } from "../components/dashboard/AiInvestigationsWidget";
import { DocumentsIndexedWidget } from "../components/dashboard/DocumentsIndexedWidget";
import { PipelineHealthWidget } from "../components/dashboard/PipelineHealthWidget";
import { ExecutiveDashboardPage } from "../components/executive/ExecutiveDashboardPage";

export const Route = createFileRoute("/dashboard")({
  component: () => (
    <ProtectedRoute>
      <EnterpriseDashboard />
    </ProtectedRoute>
  ),
});

/* ──────────────────────────────────────────────
   ANALYTICS CHART DATA
   ────────────────────────────────────────────── */
const analyticsData = [
  { month: "Jan", revenue: 45000, requests: 12000 },
  { month: "Feb", revenue: 52000, requests: 15400 },
  { month: "Mar", revenue: 61000, requests: 18900 },
  { month: "Apr", revenue: 58000, requests: 22100 },
  { month: "May", revenue: 74000, requests: 28400 },
  { month: "Jun", revenue: 89000, requests: 34100 },
  { month: "Jul", revenue: 98450, requests: 42890 },
];

import { useAuthStore } from "../store/auth-store";

function EnterpriseDashboard() {
  const { user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "ai",
      text: `Hello ${user?.fullName ? user.fullName.split(" ")[0] : "Operator"}! FactoryOS AI is currently running at 99.4% precision across all active project pipelines. How can I assist your workflow today?`,
      time: "10:42 AM",
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = { sender: "user", text: chatInput, time: "Just now" };
    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput("");

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `Analyzing query: "${chatInput}". Cross-referencing 248K enterprise documents and active telemetry nodes...`,
          time: "Just now",
        },
      ]);
    }, 600);
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen w-full bg-[#F8FAFC] text-[#111827] flex font-sans antialiased selection:bg-[#EEF2FF] selection:text-[#4F46E5]">
        
        {/* ════════════════════════════════════════
            LEFT SIDEBAR
           ════════════════════════════════════════ */}
        <Sidebar className="border-r border-[#E5E7EB] bg-white text-[#111827]">
          <SidebarHeader className="p-5 border-b border-[#F1F5F9]">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-[#4F46E5] to-[#6366F1] flex items-center justify-center shadow-md shadow-indigo-500/20 transition-transform group-hover:scale-105">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="text-base font-bold tracking-tight text-[#111827]">FactoryOS</h1>
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold text-[#4F46E5] bg-[#EEF2FF] border border-[#C7D2FE] rounded-md">
                    PRO
                  </span>
                </div>
                <p className="text-[11px] text-[#6B7280]">Enterprise Platform</p>
              </div>
            </Link>
          </SidebarHeader>

          <SidebarContent className="px-3 py-4 space-y-6">
            <SidebarGroup>
              <SidebarGroupLabel className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] px-3 mb-2">
                Main Menu
              </SidebarGroupLabel>
              <SidebarMenu className="space-y-1">
                {[
                  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
                  { id: "twin", label: "Digital Twin", icon: LayoutGrid, to: "/twin" },
                  { id: "assets", label: "Assets", icon: FileSpreadsheet, to: "/assets" },
                  { id: "maintenance", label: "Maintenance", icon: Wrench, to: "/maintenance" },
                  { id: "compliance", label: "Compliance", icon: Shield, to: "/compliance" },
                  { id: "investigations", label: "Investigations", icon: ShieldAlert, to: "/investigations" },
                  { id: "workflows", label: "Workflows", icon: SlidersHorizontal, to: "/workflows" },
                  { id: "chat", label: "AI Chat", icon: Bot, badge: "AI", to: "/chat" },
                  { id: "graph", label: "Knowledge Graph", icon: FolderKanban, to: "/graph" },
                  { id: "search", label: "Search", icon: Search, to: "/search" },
                  { id: "documents", label: "Documents", icon: FileText, to: "/documents" },
                ].map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <Link to={item.to} className="w-full block">
                      <SidebarMenuButton
                        isActive={activeTab === item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                          activeTab === item.id
                            ? "bg-[#EEF2FF] text-[#4F46E5] font-semibold shadow-sm"
                            : "text-[#4B5563] hover:text-[#111827] hover:bg-[#F8FAFC]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className={`h-4.5 w-4.5 ${activeTab === item.id ? "text-[#4F46E5]" : "text-[#9CA3AF]"}`} />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                            activeTab === item.id ? "bg-[#4F46E5] text-white" : "bg-[#F1F5F9] text-[#6B7280]"
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] px-3 mb-2">
                Management
              </SidebarGroupLabel>
              <SidebarMenu className="space-y-1">
                {[
                  { id: "team", label: "Team", icon: Users },
                  { id: "billing", label: "Billing", icon: CreditCard },
                  { id: "settings", label: "Settings", icon: Settings },
                ].map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      isActive={activeTab === item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        activeTab === item.id
                          ? "bg-[#EEF2FF] text-[#4F46E5] font-semibold"
                          : "text-[#4B5563] hover:text-[#111827] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className={`h-4.5 w-4.5 ${activeTab === item.id ? "text-[#4F46E5]" : "text-[#9CA3AF]"}`} />
                        <span>{item.label}</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="p-4 border-t border-[#F1F5F9]">
            <Link
              to="/"
              className="flex items-center gap-2 text-xs font-semibold text-[#6B7280] hover:text-[#4F46E5] transition-colors p-2 rounded-lg hover:bg-[#EEF2FF]"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Landing Page
            </Link>
          </SidebarFooter>
        </Sidebar>

        {/* ════════════════════════════════════════
            MAIN CONTENT AREA
           ════════════════════════════════════════ */}
        <SidebarInset className="flex-1 flex flex-col min-w-0 bg-[#F8FAFC]">

          {/* TOP HEADER */}
          <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-[#E5E7EB] px-8 py-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-[#6B7280] hover:text-[#111827] hover:bg-[#F1F5F9] p-2 rounded-xl border border-[#E5E7EB] transition-all" />
              
              {/* Search Bar */}
              <div className="relative hidden sm:block w-72 md:w-96">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Search projects, AI docs, analytics..."
                  className="w-full bg-[#F8FAFC] border border-[#E5E7EB] focus:border-[#4F46E5] text-[#111827] pl-10 pr-4 py-2 rounded-xl text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* AI Status Badge */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F0FDF4] border border-[#DCFCE7] text-xs font-medium text-[#166534]">
                <span className="h-2 w-2 rounded-full bg-[#22C55E] animate-pulse"></span>
                <span>AI Agent Active</span>
              </div>

              {/* Notifications Button */}
              <button className="relative p-2.5 rounded-xl bg-white border border-[#E5E7EB] text-[#4B5563] hover:text-[#111827] hover:bg-[#F8FAFC] transition-all shadow-sm">
                <Bell className="h-4.5 w-4.5" />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#EF4444]"></span>
              </button>

              {/* User Profile */}
              <button
                onClick={() => logout()}
                className="flex items-center gap-3 pl-3 border-l border-[#E5E7EB] hover:opacity-80 transition-opacity text-left bg-transparent border-0 cursor-pointer"
              >
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#4F46E5] to-[#6366F1] text-white font-bold flex items-center justify-center text-xs shadow-sm">
                  {user?.fullName ? user.fullName.split(" ").map((n) => n[0]).join("") : "OP"}
                </div>
                <div className="hidden lg:block">
                  <div className="text-sm font-semibold text-[#111827]">{user?.fullName || "Operator"}</div>
                  <div className="text-xs text-[#6B7280]">Sign Out</div>
                </div>
              </button>
            </div>
          </header>

          {/* DASHBOARD BODY */}
          <div className="flex-1 overflow-y-auto">
            <ExecutiveDashboardPage />
          </div>

          {/* FOOTER */}
          <footer className="border-t border-[#E5E7EB] bg-white px-8 py-4 text-xs text-[#6B7280] flex flex-col sm:flex-row items-center justify-between gap-2 mt-auto">
            <div>FactoryOS AI Enterprise • SaaS Edition v2.4</div>
            <div className="flex items-center gap-4">
              <span className="hover:text-[#111827] cursor-pointer">Documentation</span>
              <span>•</span>
              <span className="hover:text-[#111827] cursor-pointer">API Status</span>
              <span>•</span>
              <span className="hover:text-[#111827] cursor-pointer">Privacy</span>
            </div>
          </footer>

        </SidebarInset>

      </div>
    </SidebarProvider>
  );
}
