import { User } from "./user";
import pool from "../db";
import logger from "../logger";

// A post request should not contain an id.
export type UserCreationParams = Pick<User, "email" | "name">;

export class UsersService {
  public async get(id: string): Promise<User | undefined> {
    const statement = 'SELECT * FROM users WHERE id = $1';

    const query = {
      text: statement,
      values: [id],
    }

    const result = await pool.query(query);

    logger.info(result.rows);

    return result.rows[0];
  }

  public create(userCreationParams: UserCreationParams): undefined {
    return undefined;
  }
}