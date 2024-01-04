import * as jwt from "jsonwebtoken";
import pool from "../db";

import {Credentials, LoggedInUser} from './auth';

import * as bcrypt from "bcrypt";
import * as process from "process";
import {Role, User} from "../users/user";
import {SessionUser} from "../types/custom";
import logger from "../logger";
require('dotenv').config()

const accessTokenSecret: string = process.env.ACCESS_TOKEN_SECRET || '';

export class AuthService {
  public async login(credentials: Credentials): Promise<LoggedInUser|undefined>  {
    const select = 'SELECT * FROM users WHERE email = $1 ';

    const query = {
      text: select,
      values: [credentials.email]
    }

    const {rows} = await pool.query(query);

    if (rows.length !== 1)
      return undefined;

    // Grabs the current user from the successful SQL command
    const user: User = rows[0];

    // Compares passwords to make sure that it's correct
    // The reason that I did not do it using SQL was due to SQL issues...
    // However, JS works fine.
    const rightPass = await bcrypt.compare(credentials.password, user.password);

    if (!rightPass)
      return undefined;

    const accessToken = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      accessTokenSecret, {
        expiresIn: '30m',
        algorithm: 'HS256'
      });
    return {name: user.name, accessToken: accessToken};
  }

  public async check(authHeader?: string, scopes?: string[]): Promise<any>  {
    return new Promise((resolve, reject) => {
      if (!authHeader) {
        reject(new Error("Unauthorised"));
      }
      else {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err: any, user: any) => {
          if (err) {
            reject(err);
          }

          if (!user) {
            reject(new Error("Unauthorised"));
          }

          const currUser = user as SessionUser;

          if(!(currUser.role < Role.NONE) && !scopes?.includes(currUser.role)) {
            reject(new Error("Unauthorised"));
          }

          resolve(user);
        });
      }
    });
  }
}
