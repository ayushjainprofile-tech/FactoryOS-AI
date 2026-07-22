import { useAuthStore } from "../store/auth";

export const useAuth = () => {
  const { user, accessToken, isAuthenticated, isInitializing, login, logout, restoreSession } = useAuthStore();
  return {
    user,
    accessToken,
    isAuthenticated,
    isInitializing,
    login,
    logout,
    restoreSession,
  };
};

export default useAuth;
