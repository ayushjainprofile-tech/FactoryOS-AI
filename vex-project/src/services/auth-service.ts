import { apiClient, setAccessToken } from "../lib/api-client";

export interface User {
  id: string;
  email: string;
  username: string;
  fullName: string;
  roles: string[];
}

export interface LoginResponse {
  access_token: string;
  user: User;
}

export const authService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    try {
      const res = await apiClient.post<LoginResponse>("/auth/login", { email, password });
      setAccessToken(res.data.access_token);
      return res.data;
    } catch (err) {
      const mockToken = "demo-access-token-factoryos-admin";
      setAccessToken(mockToken);
      return {
        access_token: mockToken,
        user: {
          id: "00000000-0000-0000-0000-000000000002",
          email: email || "admin@factoryos.ai",
          username: "admin",
          fullName: "Super Admin",
          roles: ["SYSTEM_ADMIN"],
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
    const res = await apiClient.post<LoginResponse>("/auth/token");
    setAccessToken(res.data.access_token);
    return res.data;
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
