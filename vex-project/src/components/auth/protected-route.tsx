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

  if (allowedRoles && !user.roles.some((role) => allowedRoles.includes(role) || role === "SYSTEM_ADMIN" || user.roles.includes("SYSTEM_ADMIN"))) {
    return <>{children}</>;
  }

  return <>{children}</>;
};
