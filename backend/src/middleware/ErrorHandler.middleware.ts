// errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/CustomError.error"; // Adjust the import path as needed

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      status: false,
      message: err.message,
      code: err.statusCode,
    });
  }

  return res.status(500).json({
    status: false,
    message: "Internal Server Error",
    code: 500,
  });
};
