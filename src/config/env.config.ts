import { config } from "dotenv";

config();

export const APP_NAME: any = process.env.APP_NAME;
export const APP_ENV: any = process.env.APP_ENV;

export const API_KEY: any = process.env.API_KEY;
export const API_MAINPATH: any = process.env.API_MAINPATH;

// DATABASE
export const DB_SUPABASE_API_URL: any = process.env.DB_SUPABASE_API_URL;
export const DB_SUPABASE_API_KEY: any = process.env.DB_SUPABASE_KEY_URL;
export const DB_NAME: any = process.env.DB_NAME

// DEVELOPMENT CONFIGURATIONS
export const APP_PORT: any = process.env.APP_PORT;