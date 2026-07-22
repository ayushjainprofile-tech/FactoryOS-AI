import { useAuthStore } from "../store/auth-store";

export const useHasRole = (allowedRoles: string[]): boolean => {
  const user = useAuthStore((state) => state.user);
  if (!user) return false;
  return user.roles.some((role) => allowedRoles.includes(role));
};

export const useCanAccess = (feature: string): boolean => {
  const user = useAuthStore((state) => state.user);
  if (!user) return false;

  // Simple feature-to-role policy mapper
  const policies: Record<string, string[]> = {
    view_analytics: ["admin", "engineer"],
    run_ocr: ["admin", "engineer", "operator"],
    generate_reports: ["admin", "engineer"],
    edit_settings: ["admin"],
  };

  const requiredRoles = policies[feature];
  if (!requiredRoles) return true; // Default allowed if not explicitly gated
  return user.roles.some((role) => requiredRoles.includes(role));
};
