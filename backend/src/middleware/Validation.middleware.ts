import { Request, Response, NextFunction } from "express";
export const ValidateQuestionForm = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { question } = req.body;
  if (!question || typeof question !== "string") {
    return res.status(400).json({
      status: false,
      message: "QUestions is required",
      code: 400,
    });
  }
  next();
};
