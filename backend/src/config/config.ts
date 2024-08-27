import { Options } from "swagger-jsdoc";
import dotenv from "dotenv";
dotenv.config();

export const NLP_API_URL = process.env.NLP_API_URL as string;
export const PORT = process.env.PORT || 5000;
export const CORS_ORIGINS = process.env.CORS_ORIGINS?.split(",") || [];
export const OPEN_AI_URL = process.env.OPEN_AI_URL as string;
export const OPEN_AI_KEY = process.env.OPEN_AI_KEY as string;
export const CHAT_GPT_MODEL = process.env.GPT_MODEL as string;

export const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend API",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      { url: "http://localhost:5000", description: "Development server" },
    ],
  },
  apis: ["./src/routes/*.ts"], // Path to routes
};
