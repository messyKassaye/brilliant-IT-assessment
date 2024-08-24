import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import cors, { CorsOptions } from "cors";
import appRouter from "./src/routes/AppRoutes";
import { CORS_ORIGINS, PORT } from "./src/config/config";

const app: Express = express();

const corsOptions: CorsOptions = {
  origin: CORS_ORIGINS,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(appRouter);
app.get("/health", (req: Request, res: Response) => {
  res.status(200).send({
    status: "healthy",
    message: "API is running smoothly",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
