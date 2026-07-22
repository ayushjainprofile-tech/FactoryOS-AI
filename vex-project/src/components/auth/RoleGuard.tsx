import React from "react";
import { useAuthStore } from "../../store/auth";

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles: string[];
  fallback?: React.ReactNode;
}

export const RoleGuard: React.FC<RoleGuardProps> = ({ children, allowedRoles, fallback = null }) => {
  const user = useAuthStore((state) => state.user);

  if (!user || !user.roles.some((role) => allowedRoles.includes(role))) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default RoleGuard;
