export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  role: Role;
  created_at: Date;
  updated_at: Date;
  last_login: Date;
}

export type Role = "admin" | "user" | "guest" | "none";

export interface UserCreationParams {
  name: string;
  username: string;
  email: string;
  password: string;
}