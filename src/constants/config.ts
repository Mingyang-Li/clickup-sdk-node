import * as dotenv from 'dotenv';
dotenv.config();

export const Config = {
  CLICKUP_API_KEY: process.env.CLICKUP_API_KEY || undefined,
};
