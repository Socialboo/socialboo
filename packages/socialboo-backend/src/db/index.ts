import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { env } from '../app.env.js';
import * as schema from './schema/index.js';

const client = postgres(env.DATABASE_URL);

export const db = drizzle(client, { schema });
export * from './schema/index.js';