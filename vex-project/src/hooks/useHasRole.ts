import { useAuthStore } from "../store/auth";

export const useHasRole = (allowedRoles: string[]): boolean => {
  const user = useAuthStore((state) => state.user);
  if (!user) return false;
  return user.roles.some((role) => allowedRoles.includes(role));
};

export default useHasRole;
