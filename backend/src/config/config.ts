import dotenv from "dotenv";
dotenv.config();

export const AI_API_URL = process.env.AI_API_URL as string;
export const PORT = process.env.PORT || 5000;
export const CORS_ORIGINS = process.env.CORS_ORIGINS?.split(",") || [];
