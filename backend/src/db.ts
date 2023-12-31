import pg, {PoolConfig} from 'pg';
import * as process from "process";
require('dotenv').config()

const config: PoolConfig = {
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  idleTimeoutMillis: 30000,
  port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
}

const pool = new pg.Pool(config);

export default pool;