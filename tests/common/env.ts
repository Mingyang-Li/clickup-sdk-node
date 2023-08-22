import { z } from 'zod';
import * as dotenv from 'dotenv';
dotenv.config();

const EnvSchema = z.object({
  CLICKUP_API_KEY: z.string().trim().min(1),
});

const envServer = EnvSchema.safeParse({
  CLICKUP_API_KEY: process.env.CLICKUP_API_KEY,
});

if (envServer.success === false) {
  throw new Error(`Env error: ${JSON.stringify(envServer.error.issues)}`);
}

export const env = envServer.data;
