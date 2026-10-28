import { betterAuth } from 'better-auth';
import { drizzleAdapter } from '@better-auth/drizzle-adapter';
import { openAPI } from "better-auth/plugins"
//import { db } from '../db/index.js';
import { db } from '@/shared/db/index.js';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  advanced: {
    database: {
      generateId: false,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    openAPI(),
  ],
});