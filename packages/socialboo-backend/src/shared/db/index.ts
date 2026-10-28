import { env } from '@/app.env.js';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema/index.js';

export * from './schema/index.js';

const queryClient = postgres(env.DATABASE_URL);
export const db = drizzle({ client: queryClient, schema });