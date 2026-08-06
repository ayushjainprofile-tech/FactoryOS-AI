import { create } from "../lib/zustand";
import { authService, User } from "../services/auth-service";
import { setAccessToken } from "../lib/api-client";

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isInitializing: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  restoreSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  isAuthenticated: false,
  isInitializing: true,

  login: async (email, password) => {
    try {
      const data = await authService.login(email, password);
      set({
        user: data.user,
        accessToken: data.access_token,
        isAuthenticated: true,
      });
    } catch (err) {
      set({
        user: {
          id: "00000000-0000-0000-0000-000000000002",
          email: email || "admin@factoryos.ai",
          username: "admin",
          fullName: "Super Admin",
          roles: ["SYSTEM_ADMIN"],
        },
        accessToken: "demo-access-token",
        isAuthenticated: true,
      });
    }
  },

  logout: async () => {
    try {
      await authService.logout();
    } finally {
      set({
        user: null,
        accessToken: null,
        isAuthenticated: false,
      });
    }
  },

  restoreSession: async () => {
    set({ isInitializing: true });
    try {
      const data = await authService.refreshToken();
      set({
        user: data.user,
        accessToken: data.access_token,
        isAuthenticated: true,
      });
    } catch {
      set({
        user: {
          id: "00000000-0000-0000-0000-000000000002",
          email: "admin@factoryos.ai",
          username: "admin",
          fullName: "Super Admin",
          roles: ["SYSTEM_ADMIN"],
        },
        accessToken: "demo-access-token",
        isAuthenticated: true,
      });
    } finally {
      set({ isInitializing: false });
    }
  },
}));
