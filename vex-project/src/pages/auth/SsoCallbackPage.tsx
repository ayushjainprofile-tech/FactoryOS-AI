import React, { useEffect } from "react";
import { useAuthStore } from "../../store/auth";

export const SsoCallbackPage: React.FC = () => {
  const { restoreSession } = useAuthStore();

  useEffect(() => {
    // Attempt session restoration on mount (checks fresh SSO cookies)
    restoreSession().then(() => {
      if (typeof window !== "undefined") {
        window.location.href = "/dashboard";
      }
    });
  }, [restoreSession]);

  return (
    <div className="flex h-screen items-center justify-center bg-[#0F172A]">
      <div className="text-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#4F46E5] border-t-transparent mx-auto" />
        <h1 className="text-white font-semibold mt-4">Processing SSO Authentication...</h1>
      </div>
    </div>
  );
};

export default SsoCallbackPage;
