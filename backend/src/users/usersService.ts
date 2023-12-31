import { User } from "./user";
import pool from "../db";

// A post request should not contain an id.
export type UserCreationParams = Pick<User, "email" | "name">;

export class UsersService {
  public async get(id: number, name?: string): Promise<User | undefined> {
    const result = await pool.query('SELECT $1::text as name', ['brianc']);

    return undefined;
  }

  public create(userCreationParams: UserCreationParams): undefined {
    return undefined;
  }
}