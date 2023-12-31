import { User } from "./user";
import pool from "../db";

// A post request should not contain an id.
export type UserCreationParams = Pick<User, "email" | "name">;

export class UsersService {
  public async get(id: number, name?: string): Promise<User> {
    const result = await pool.query('SELECT $1::text as name', ['brianc']);

    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
    };
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      ...userCreationParams,
    };
  }
}