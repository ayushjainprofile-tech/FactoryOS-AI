import React, { useEffect } from "react";
import { useAuthStore } from "../../store/auth";

interface PublicRouteProps {
  children: React.ReactNode;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated, isInitializing, restoreSession } = useAuthStore();

  useEffect(() => {
    if (isInitializing) {
      restoreSession();
    }
  }, [isInitializing, restoreSession]);

  if (isInitializing) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0F172A]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#4F46E5] border-t-transparent" />
      </div>
    );
  }

  if (isAuthenticated) {
    if (typeof window !== "undefined") {
      window.location.href = "/dashboard";
    }
    return null;
  }

  return <>{children}</>;
};

export default PublicRoute;
