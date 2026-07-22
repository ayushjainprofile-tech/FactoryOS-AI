import React, { useEffect } from "react";
import { useAuthStore } from "../../store/auth-store";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user, isAuthenticated, isInitializing, restoreSession } = useAuthStore();

  useEffect(() => {
    if (isInitializing) {
      restoreSession();
    }
  }, [isInitializing, restoreSession]);

  if (isInitializing) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#F8FAFC]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#4F46E5] border-t-transparent" />
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
    return null;
  }

  if (allowedRoles && !user.roles.some((role) => allowedRoles.includes(role))) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#F8FAFC]">
        <div className="text-center">
          <h1 className="text-xl font-bold text-[#EF4444]">Unauthorized Access</h1>
          <p className="text-sm text-[#6B7280] mt-1">You do not hold permissions to view this resource.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
