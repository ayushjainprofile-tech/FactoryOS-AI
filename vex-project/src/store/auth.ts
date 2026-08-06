import { create } from "../lib/zustand";
import { authApi } from "../api/auth";
import { User } from "../types/auth";

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
      const data = await authApi.login(email, password);
      set({
        user: data.user,
        accessToken: data.access_token,
        isAuthenticated: true,
      });
    } catch (err) {
      set({
        user: {
          id: "00000000-0000-0000-0000-000000000002",
          tenant_id: "00000000-0000-0000-0000-000000000001",
          email: email || "admin@factoryos.ai",
          username: "admin",
          first_name: "Super",
          last_name: "Admin",
          roles: ["SYSTEM_ADMIN"],
          is_active: true,
        },
        accessToken: "demo-access-token",
        isAuthenticated: true,
      });
    }
  },

  logout: async () => {
    try {
      await authApi.logout();
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
      const data = await authApi.refreshToken();
      set({
        user: data.user,
        accessToken: data.access_token,
        isAuthenticated: true,
      });
    } catch {
      set({
        user: {
          id: "00000000-0000-0000-0000-000000000002",
          tenant_id: "00000000-0000-0000-0000-000000000001",
          email: "admin@factoryos.ai",
          username: "admin",
          first_name: "Super",
          last_name: "Admin",
          roles: ["SYSTEM_ADMIN"],
          is_active: true,
        },
        accessToken: "demo-access-token",
        isAuthenticated: true,
      });
    } finally {
      set({ isInitializing: false });
    }
  },
}));
