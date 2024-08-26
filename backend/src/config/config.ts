import dotenv from "dotenv";
dotenv.config();

export const NLP_API_URL = process.env.NLP_API_URL as string;
export const PORT = process.env.PORT || 5000;
export const CORS_ORIGINS = process.env.CORS_ORIGINS?.split(",") || [];
export const OPEN_AI_URL = process.env.OPEN_AI_URL as string;
export const OPEN_AI_KEY = process.env.OPEN_AI_KEY as string;
export const CHAT_GPT_MODEL = process.env.GPT_MODEL as string;
