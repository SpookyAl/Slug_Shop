import {User, UserCreationParams} from "./user";
import pool from "../db";

export class UsersService {
  public async get(id: string): Promise<User> {
    const statement = 'SELECT * FROM users WHERE id = $1';

    const query = {
      text: statement,
      values: [id],
    }

    const result = await pool.query(query);

    if (result.rowCount === 0) {
      throw new Error(`No user found with id: ${id}`);
    }

    return result.rows[0];
  }

  public async create(userCreationParams: UserCreationParams): Promise<User> {
    const statement = "INSERT INTO users (name, username, email, password) VALUES ($1, $2, $3, crypt($4, gen_salt('bf'))) RETURNING *";
    const query = {
      text: statement,
      values: [userCreationParams.name, userCreationParams.username, userCreationParams.email, userCreationParams.password],
    }

    const result = await pool.query(query);

    if (result.rowCount === 0) {
      throw new Error(`User was unable to be created.`);
    }

    return result.rows[0];
  }
}