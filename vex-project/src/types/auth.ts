export type Role = "admin" | "engineer" | "operator" | "viewer";

export interface User {
  id: string;
  email: string;
  username: string;
  fullName: string;
  roles: Role[];
}

export interface LoginResponse {
  access_token: string;
  user: User;
}
