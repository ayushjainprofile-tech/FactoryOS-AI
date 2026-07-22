import { apiClient, setAccessToken } from "./client";
import { LoginResponse, User } from "../types/auth";

export const authApi = {
  async login(email: string, password: string): Promise<LoginResponse> {
    const res = await apiClient.post<LoginResponse>("/auth/login", { email, password });
    setAccessToken(res.data.access_token);
    return res.data;
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
