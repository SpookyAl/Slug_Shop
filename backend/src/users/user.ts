/**
 * Email, requires "@"
 * Reference: https://www.regular-expressions.info/email.html
 * @pattern \b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b
 * @example "admin@ucsc.edu"
 */
export type Email = string;

/**
 * UUID
 * Reference: https://tsoa-community.github.io/docs/examples.html
 * @pattern [0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}
 * @example "52907745-7672-470e-a803-a2f8feb52944"
 */
export type UUID = string;

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

export enum Role {
  "ADMIN" = "admin",
  "USER" = "user",
  "NONE" = "none",
}

export interface UserCreationParams {
  name: string;
  username: string;
  email: string;
  password: string;
}