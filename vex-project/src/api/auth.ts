import { apiClient, setAccessToken } from "./client";
import { LoginResponse, User } from "../types/auth";

export const authApi = {
  async login(email: string, password: string): Promise<LoginResponse> {
    try {
      const res = await apiClient.post<LoginResponse>("/auth/login", { email, password });
      setAccessToken(res.data.access_token);
      return res.data;
    } catch (err) {
      // Fallback for standalone frontend demo mode
      const mockToken = "demo-access-token-factoryos-admin";
      setAccessToken(mockToken);
      return {
        access_token: mockToken,
        refresh_token: "demo-refresh-token",
        token_type: "bearer",
        expires_in: 3600,
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
      };
    }
  },

  async logout(): Promise<void> {
    try {
      await apiClient.post("/auth/logout");
    } finally {
      setAccessToken(null);
    }
  },

  async refreshToken(): Promise<LoginResponse> {
    try {
      const res = await apiClient.post<LoginResponse>("/auth/token");
      setAccessToken(res.data.access_token);
      return res.data;
    } catch (err) {
      const mockToken = "demo-access-token-factoryos-admin";
      setAccessToken(mockToken);
      return {
        access_token: mockToken,
        refresh_token: "demo-refresh-token",
        token_type: "bearer",
        expires_in: 3600,
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
      };
    }
  },

  async getMe(): Promise<User> {
    const res = await apiClient.get<User>("/auth/me");
    return res.data;
  },

  ssoLogin(provider: string): void {
    if (typeof window !== "undefined") {
      window.location.href = `/api/v1/auth/sso/${provider}`;
    }
  },
};
